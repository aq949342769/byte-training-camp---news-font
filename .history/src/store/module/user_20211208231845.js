import { login, register } from "../../network/api/user.js"
import { Toast } from "vant";

export const user = {
  namespaced: true,
  state: () => ({
    isLogin: false,
    user_id: '',
    nick_name: '',
    username: '',
    password: '',
    email: '',
    avatar: '',
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
    getAvatar: (state) => {
      return state.avatar
    },
  },
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag
    },
    changUserInfo(state, user_id, username, nick_name, email, avatar) {
      state.user_id = user_id;
      state.username = username;
      state.nick_name = nick_name;
      state.email = email;
      state.avatar = avatar;

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
            ctx.commit("userStatus", true); //保存登录状态
            Toast.success("登录成功")
            let {id, user_name, nick_name, email, avatar} = res.data;
            ctx.commit("changUserInfo", id, user_name, nick_name, email, avatar)//保存账号和密码
            setTimeout(() => {
              console.log(ctx.state.avatar)
            console.log(ctx.getters.getAvatar)
        
      }, 4500);
            
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

    async handleRegister(ctx, userinfo) {
      const method = "post";
      let username = userinfo.username;
      let email = userinfo.email;
      let password = userinfo.password;
      await login(username, email, password, method)
        .then((res) => {
          console.log(username, email, password)
          console.log(res)
          if (res.code === 0) {
            Toast.success("注册成功")
            ctx.commit("changUserInfo", username, password)//保存账号和密码
          } else {
            Toast(res.msg);
            console.log(res)
          }
        })
        .catch((err) => {
          Toast.fail('注册失败');
          console.log(err);
        });
    }
  },
};