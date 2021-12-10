import {
  login,
  register
} from "../../network/api/user.js";
import {
  getUserInfo,
  getUserSetting
} from "../../network/api/my";
import {
  getUserCollectNewsList,
  getUserLikeNewsList,
} from "../../network/api/user";
import {
  toRaw
} from "vue";
import {
  Toast
} from "vant";
import moment from "moment";

export const user = {
  namespaced: true,
  state: () => ({
    isLogin: false,
    user_id: "",
    nick_name: "",
    username: "",
    password: "",
    email: "",
    avatar: "",
    userInfo: {
      nick_name: "",
      emial: "",
    },
    userSetting: {
      darkTheme: false
    },
    collectNewsList: [],
    likeNewsList: [],
  }),
  getters: {
    //获取登录状态
    isLogin: (state) => {
      return state.isLogin;
    },

    getUsername: (state) => {
      return state.username;
    },
    getPassword: (state) => {
      return state.password;
    },
    getAvatar: (state) => {
      return state.avatar;
    },
  },
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag;
    },
    //保存个人信息
    changUserInfo(state, user_id, username, nick_name, email, avatar) {
      state.user_id = user_id;
      state.username = username;
      state.nick_name = nick_name;
      state.email = email;
      state.avatar = avatar;
    },
    Mu_getUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    Mu_getUserSetting(state, userSetting) {
      state.userSetting = userSetting;
    },
    CHANGE_COLLECT_LIST(state, collectNewsList) {
      collectNewsList.forEach((news) => {
        moment.locale("zh-cn");
        news.publish_time = moment(Number(news.publish_time) * 1000).format(
          "ll"
        );
      });
      state.collectNewsList = collectNewsList;
    },
    ADD_COLLECT_LIST(state, collectNewsList) {
      collectNewsList.forEach((news) => {
        moment.locale("zh-cn");
        news.publish_time = moment(Number(news.publish_time) * 1000).format(
          "ll"
        );
      });
      state.collectNewsList = [
        ...toRaw(state.collectNewsList),
        ...collectNewsList,
      ];
    },
    CHANGE_LIKES_LIST(state, likeNewsList) {
      likeNewsList.forEach((news) => {
        moment.locale("zh-cn");
        news.publish_time = moment(Number(news.publish_time) * 1000).format(
          "ll"
        );
      });
      state.likeNewsList = likeNewsList;
    },
    ADD_LIKES_LIST(state, likeNewsList) {
      likeNewsList.forEach((news) => {
        moment.locale("zh-cn");
        news.publish_time = moment(Number(news.publish_time) * 1000).format(
          "ll"
        );
      });
      state.likeNewsList = [...toRaw(state.likeNewsList), ...likeNewsList];
    },
  },
  actions: {
    // 登录
    async handleLogin(ctx, userinfo) {
      const method = "post";
      let username = userinfo.username;
      let password = userinfo.password;
      await login(username, password, method)
        .then((res) => {
          console.log(username, password);
          console.log(res);

          if (res.code === 0) {
            ctx.commit("userStatus", true); //保存登录状态
            Toast.success("登录成功");
            let {
              id,
              user_name,
              nick_name,
              email,
              avatar
            } = res.data;
            ctx.commit(
              "changUserInfo",
              id,
              user_name,
              nick_name,
              email,
              avatar
            ); //保存账号和密码
          } else {
            Toast(res.msg);
            console.log(res);
          }
        })
        .catch((err) => {
          Toast.fail("登陆失败");
          console.log(err);
        });
    },

    async handleRegister(ctx, userinfo) {
      const method = "post";
      let username = userinfo.username;
      let email = userinfo.email;
      let password = userinfo.password;
      await register(username, email, password, method)
        .then((res) => {
          console.log(username, email, password);
          console.log(res);
          if (res.code === 0) {
            ctx.commit("userStatus", true); //注册成功即已登录
            Toast.success("注册成功");
            const user_id = res.data.id;
            ctx.commit("changUserInfo", user_id); //保存账号和密码
          } else {
            Toast(res.msg);
            console.log(res);
          }
        })
        .catch((err) => {
          Toast.fail("注册失败");
          console.log(err);
        });
    },
    async Ac_getUserInfo(ctx) {
      await getUserInfo()
        .then((result) => {
          ctx.commit("Mu_getUserInfo", result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async Ac_getUserSetting(ctx) {
      await getUserSetting()
        .then((result) => {
          ctx.commit("Mu_getUserSetting", result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 用户收藏新闻列表
    async getUserCollectNewsList(ctx) {
      await getUserCollectNewsList().then((res) => {
        ctx.commit("CHANGE_COLLECT_LIST", res.data ? res.data : []);
      });
    },
    async addUserCollectNewsList(ctx) {
      await getUserCollectNewsList().then((res) => {
        ctx.commit("ADD_COLLECT_LIST", res.data ? res.data : []);
      });
    },
    // 用户点赞新闻列表
    async getUserLikeNewsList(ctx) {
      await getUserLikeNewsList().then((res) => {
        ctx.commit("CHANGE_LIKES_LIST", res.data ? res.data : []);
      });
    },
    async addUserLikeNewsList(ctx) {
      await getUserLikeNewsList()
        .then((res) => {
          ctx.commit("ADD_LIKES_LIST", res.data ? res.data : []);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};