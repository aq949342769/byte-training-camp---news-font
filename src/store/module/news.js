import { toRaw } from "vue";
import { Toast } from "vant";
import {
  getLoveNewsCateList,
  getNewsList,
  getNewsDetailList,
  postNewsLikes,
} from "../../network/api/news.js";

export const news = {
  namespaced: true,
  state: () => ({
    newsCateList: [
      {
        name: "推荐",
        channel: "__all__",
      },
      {
        name: "热点",
        channel: "news_hot",
      },
      {
        name: "社会",
        channel: "news_society",
      },
      {
        name: "娱乐",
        channel: "news_entertainment",
      },
      {
        name: "科技",
        channel: "news_tech",
      },
      {
        name: "军事",
        channel: "news_military",
      },
      {
        name: "体育",
        channel: "news_sports",
      },
      {
        name: "汽车",
        channel: "news_car",
      },
      {
        name: "美食",
        channel: "news_food",
      },
    ],
    loveList: [],
    active: 0,
    love: false,
    newsList: [],
    newsDetail: {},
  }),
  getters: {},
  mutations: {
    changeLoveCateList(state, newData) {
      state.loveList = newData;
    },
    // 直接修改
    changeLoveDirect(state) {
      state.love = !state.love;
    },
    // 通过查找
    changeLoveCate(state, active) {
      state.active = active;
      if (active) {
        const currNewsCate = toRaw(state.newsCateList[active]).channel;
        const index = toRaw(state.loveList).indexOf(currNewsCate);
        if (index >= 0) {
          state.love = true;
        } else {
          state.love = false;
        }
      }
    },
    changeNewsList(state, newData) {
      newData.forEach((news) => {
        const date = new Date(news.publish_time);
        const Y = date.getFullYear() + "年";
        const M =
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "月";
        const D = date.getDate() + "日";
        news.publish_time = Y + M + D;
      });
      state.newsList = newData;
    },
    changeNewsDetail(state, newData) {
      state.newsDetail = newData;
    },
  },
  actions: {
    // 获得已关注列表
    async getLoveCateList(ctx) {
      await getLoveNewsCateList()
        .then((res) => {
          if (res.data) {
            ctx.commit("changeLoveCateList", res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 推荐频道用 __all__
    async getNewsList(ctx, index) {
      const channel = toRaw(ctx.state.newsCateList)[index].channel;
      await getNewsList(channel, 10)
        .then((res) => {
          if (res.data) {
            ctx.commit("changeNewsList", res.data);
          } else {
            ctx.commit("changeNewsList", []);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 获得新闻详情
    async getNewsDetailList(ctx, id) {
      await getNewsDetailList(id)
        .then((res) => {
          ctx.commit("changeNewsDetail", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 关注频道
    async postNewsLikes(ctx) {
      const index = ctx.state.active;
      const is_love = ctx.state.love;
      const newsCateList = ctx.state.newsCateList;
      const channel = toRaw(newsCateList)[index].channel;
      let method = is_love ? "delete" : "post";
      await postNewsLikes(channel, method)
        .then((res) => {
          if (res.code === 0) {
            ctx.commit("changeLoveDirect");
            Toast.success("设置成功")
          } else {
            Toast(res.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
