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
    <van-cell title="收藏内容" is-link></van-cell>
    <van-cell title="我的关注" is-link></van-cell>
    <van-cell title="我的评论" is-link></van-cell>
    <van-cell title="我的点赞" is-link></van-cell>
  </van-cell-group>
  <van-cell-group>
    <van-cell title="退出账户" is-link id="exit"></van-cell>
  </van-cell-group>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
const userHttpEffect = () => {
  const store = useStore();
  store.dispatch("user/Ac_getUserInfo");
  store.dispatch("user/Ac_getUserSetting");
  const userInfo = computed(() => store.state.user.userInfo);
  return { userInfo };
};
export default {
  setup() {
    const { userInfo } = userHttpEffect();
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
  margin-top: 100px;
  margin-bottom: 100px;
  #pic {
    width: 50px;
    height: 50px;
    background-image: url("../../assets/notfind.png");
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid #666;
    border-radius: 50%;
  }
  #nick_name {
    padding-top: 5px;
  }
  #email {
    padding-top: 5px;
  }
}
#exit {
  color: #e99d9d;
}

.center {
  padding-top: 10px;
  background-color: #f0f1f2;
  padding-bottom: 10px;
}
</style>
