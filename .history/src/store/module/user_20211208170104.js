import { login } from "../../network/api/user.js"
import { Toast } from "vant";

export const user = {
  state: () => ({
    token: '',
    username: '',
    password: ''
  }),
  getters: {
     getUsername: (state) => {
      return state.username
    },
    getPassword: (state) => {
      return state.password
    },
  },
  mutations: {
    changUserInfo(state, [username, password]) {
      state.username = username;
      state.password = password;
    }
  },
  actions: {
    // 登录
    async handleLogin(ctx) {
      const method = "post";
      await login([userinfo],method)
        .then((res) => {
          if (res.code === 0) {
            ctx.commit("changUserInfo");
            Toast.success("登录成功")
            console.log("登录成功")
          } else {
            Toast(res.msg);
          }
        })
        .catch((err) => {
          Toast.fail('登陆失败');
          console.log(err);
        });
    },
  },
};