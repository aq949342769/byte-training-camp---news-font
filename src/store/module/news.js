import { toRaw } from "vue";
import {
  getNewsCateList,
  getLoveNewsCateList,
  getRecommendNewsList,
  getOrdinaryNewsList,
  getNewsDetailList,
} from "../../network/api/news.js";

export const news = {
  namespaced: true,
  state: () => ({
    newsCateList: [],
    loveList: [],
    active: 0,
    love: false,
    newsList: [],
    newsDetail: {},
  }),
  getters: {},
  mutations: {
    changeNewsCateList(state, newData) {
      const list = [{ id: -1, name: "推荐" }];
      const newsCateList = list.concat(newData);
      state.newsCateList = newsCateList;
    },
    changeLoveCateList(state, newData) {
      state.loveList = newData;
    },
    changeLoveCate(state, active) {
      state.active = active;
      const newsCateList = state.newsCateList;
      if (newsCateList[active]) {
        const id = newsCateList[active].id;
        const loveItem = newsCateList.find((item) => item.id === id);
        state.love = loveItem.love;
      }
    },
    changeNewsList(state, newData) {
      state.newsList = newData;
    },
    changeNewsDetail(state, newData) {
      state.newsDetail = newData;
    },
  },
  actions: {
    // 获得分类列表
    async getCateList(ctx) {
      await getNewsCateList()
        .then((res) => {
          ctx.commit("changeNewsCateList", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
    // 推荐频道 Recommended channel
    async getRecommendNewsList(ctx) {
      await getRecommendNewsList(10)
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
    // 普通頻道 Ordinary channel
    async getOrdinaryNewsList(ctx, index) {
      const id = toRaw(ctx.state.newsCateList)[index].id;
      await getOrdinaryNewsList(id, 10)
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
  },
};
