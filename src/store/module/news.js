import { toRaw } from "vue";
import { Toast } from "vant";
import moment from "moment";
import {
  getLoveNewsCateList,
  getNewsList,
  getNewsDetailList,
  postNewsCateLikes,
  postNewsLikes,
  postNewsCollect,
  getNewsLikeAndCollect,
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
    newsDetail: {
      is_likes: false,
      is_favourites: false,
    },
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
        moment.locale("zh-cn");
        news.publish_time = moment(Number(news.publish_time) * 1000).format(
          "ll"
        );
      });
      state.newsList = newData;
    },
    addNewsList(state, newData) {
      newData.forEach((news) => {
        moment.locale("zh-cn");
        news.publish_time = moment(Number(news.publish_time) * 1000).format(
          "ll"
        );
      });
      state.newsList = [...toRaw(state.newsList), ...newData];
    },
    changeNewsDetail(state, newData) {
      state.newsDetail = newData;
    },
    changeNewsLikes(state, newData) {
      state.newsDetail.is_likes = newData;
      state.newsDetail.like_count = state.newsDetail.is_likes
        ? state.newsDetail.like_count + 1
        : state.newsDetail.like_count - 1;
      if (state.newsDetail.is_likes) {
        Toast.success("点赞 ❥(^_-)");
      } else {
        Toast("取消点赞 ε=(´ο｀*)))");
      }
    },
    changeNewsCollect(state, newData) {
      state.newsDetail.is_favourites = newData;
    },
    changeNewsLikeAndCollect(state, likesAndCollect) {
      if (likesAndCollect) {
        state.newsDetail.is_likes = likesAndCollect.is_likes;
        state.newsDetail.is_favourites = likesAndCollect.is_favourites;
      }
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
    async addNewsList(ctx, index) {
      const channel = toRaw(ctx.state.newsCateList)[index].channel;
      await getNewsList(channel, 10)
        .then((res) => {
          if (res.data) {
            ctx.commit("addNewsList", res.data);
          } else {
            ctx.commit("addNewsList", []);
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
          ctx.commit("changeNewsDetail", res.data ? res.data : {});
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 关注频道
    async postNewsCateLikes(ctx) {
      const index = ctx.state.active;
      const is_love = ctx.state.love;
      const newsCateList = ctx.state.newsCateList;
      const channel = toRaw(newsCateList)[index].channel;
      let method = is_love ? "delete" : "post";
      await postNewsCateLikes(channel, method)
        .then((res) => {
          if (res.code === 0) {
            ctx.dispatch("getLoveCateList").then(() => {
              ctx.commit("changeLoveDirect");
              Toast.success("设置成功");
            });
          } else {
            Toast(res.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 点赞（取消）新闻
    async postNewsLikes(ctx, [id, method]) {
      await postNewsLikes(id, method)
        .then((res) => {
          if (res.code === 0) {
            const is_likes = method === "post" ? true : false;
            ctx.commit("changeNewsLikes", is_likes);
          } else {
            Toast.fail(res.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 收藏（取消）新闻
    async postNewsCollect(ctx, [id, method]) {
      await postNewsCollect(id, method)
        .then((res) => {
          if (res.code === 0) {
            const is_favourites = method === "post" ? true : false;
            ctx.commit("changeNewsCollect", is_favourites);
          } else {
            Toast.fail(res.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 获取新闻点赞收藏信息
    async getNewsLikeAndCollect(ctx, id) {
      await getNewsLikeAndCollect(id)
        .then((res) => {
          ctx.commit("changeNewsLikeAndCollect", res.data ? res.data : {});
        })
        .catch((err) => {
          Toast(err);
        });
    },
  },
};
