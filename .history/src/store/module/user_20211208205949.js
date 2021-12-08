import { login } from "../../network/api/user.js"
import { Toast } from "vant";

export const user = {
  namespaced: true,
  state: () => ({
    isLogin: false,
    username: '',
    password: ''
  }),
  getters: {
    //获取登录状态
    isLogin: (state) => {
      return state.isLogin
    },
    
    getUsername: (state) => {
      return state.username
    },
    getPassword: (state) => {
      return state.password
    },
  },
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
    changUserInfo(state, username, password) {
      state.username = username;
      state.password = password;
    } 
  },
  actions: {
    // 登录
    async handleLogin(ctx, userinfo) {
      const method = "post";
      let username = userinfo.username;
      let password = userinfo.password;
      await login(username, password, method)
        .then((res) => {
          console.log(username, password)
          console.log(res)
          if (res.code === 0) {
            Toast.success("登录成功")
            console.log("登录成功")//
            router.push({ name: "/" });
            ctx.commit("userStatus", true); //保存登录状态
            ctx.commit("changUserInfo", username, password)//保存账号和密码
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