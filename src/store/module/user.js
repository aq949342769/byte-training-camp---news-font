import {
  getUserInfo,
  getUserSetting,


} from '../../network/api/my';
export const user = {
  state: () => ({
    userInfo: {
      nick_name: '',
      emial: ''
    },
    userSetting: {}
  }),
  getters: {},
  mutations: {
    Mu_getUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    Mu_getUserSetting(state, userSetting) {
      state.userSetting = userSetting;
    }
  },
  actions: {
    async Ac_getUserInfo(ctx) {
      await getUserInfo().then((result) => {
        ctx.commit("Mu_getUserInfo", result.data)
      }).catch((err) => {
        console.log(err);
      });
    },
    async Ac_getUserSetting(ctx) {
      await getUserSetting().then((result) => {
        ctx.commit("Mu_getUserSetting", result.data)
      }).catch((err) => {
        console.log(err);
      });
    }
  },
};