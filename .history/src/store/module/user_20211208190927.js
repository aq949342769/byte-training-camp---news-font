import { login } from "../../network/api/user.js"
import { Toast } from "vant";

export const user = {
  namespaced: true,
  state: () => ({
    isLogin: false,
    token: '',
    username: '',
    password: ''
  }),
  getters: {
    //获取登录状态
    isLogin: (state) => state.isLogin,

    getUsername: (state) => {
      return state.username
    },
    getPassword: (state) => {
      return state.password
    },
  },
  mutations: {
    /* changUserInfo(state, [username, password]) {
      state.username = username;
      state.password = password;
    } */
  },
  actions: {
    // 登录
    async handleLogin(ctx, [username,password]) {
      const method = "post";
      await login([username,password],method)
        .then((res) => {
          console.log([userinfo])
          if (res.code === 0) {
            ctx.commit("changUserInfo");
            Toast.success("登录成功")
            console.log("登录成功")
          } else {
            Toast(res.msg);
            console.log(res)
          }
        })
        .catch((err) => {
          Toast.fail('登陆失败');
          console.log(err);
        });
    },
  },
};