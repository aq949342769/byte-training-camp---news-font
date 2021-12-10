<template>
  <van-nav-bar
    title="个人中心"
    left-arrow
    @click-left="$router.push({ name: 'home' })"
    @click-right="$router.replace('setting')"
    safe-area-inset-top
    class="nav"
  >
    <template #right>
      <van-icon name="setting-o" size="20" />
    </template>
  </van-nav-bar>
  <div id="user_wrapper">
    <div id="pic"></div>
    <div id="nick_name">{{ userInfo.nick_name }}</div>
    <div id="email">{{ userInfo.email }}</div>
  </div>

  <van-cell-group class="top">
    <van-cell title="使用报告" is-link></van-cell>
  </van-cell-group>
  <van-cell-group class="center">
    <van-cell title="收藏内容" is-link to="collect"></van-cell>
    <van-cell title="我的关注" is-link to="channels"></van-cell>
    <van-cell title="我的点赞" is-link to="likes"></van-cell>
  </van-cell-group>
  <van-cell-group>
    <van-cell title="退出账户" is-link id="exit"></van-cell>
  </van-cell-group>
</template>

<script>
import { useStore } from "vuex";
import themeChanger from "../../theme";
export default {
  setup() {
    const store = useStore();
    store.dispatch("user/Ac_getUserInfo");
    store.dispatch("user/Ac_getUserSetting");
    const userInfo = store.state.user.userInfo;
    const darkTheme = store.state.user.userSetting.darkTheme;
    const themeChange = new themeChanger();
    if (darkTheme) {
      themeChange._addDarkTheme();
    }
    return { userInfo };
  },
};
</script>

<style lang="less" scoped>
.nav {
  position: sticky;
  top: 0;
}
#user_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  #pic {
    width: 100px;
    height: 100px;
    background-image: url("../../assets/notfind.png");
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #666;
    border-radius: 50%;
  }
  #nick_name {
    padding-top: 5px;
    color: var(--van-text-color);
  }
  #email {
    padding-top: 5px;
    color: var(--van-text-color);
  }
}
#exit {
  color: #e99d9d;
}

.center {
  padding-top: 10px;
  background-color: var(--van-gray-2);
  padding-bottom: 10px;
}
</style>
