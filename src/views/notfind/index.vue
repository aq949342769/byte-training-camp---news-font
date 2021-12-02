<template>
  <van-empty
    class="custom-image"
    image="https://gitee.com/youlan_lan/md_image/raw/master/20211202153648.png"
    description="没有这个页面"
  >
    <van-button round type="danger" class="bottom-button" @click="toHome"
      >回到首页</van-button
    >
  </van-empty>
</template>

<script>
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default {
  setup() {
    const router = useRouter();
    const toHome = () => {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      setTimeout(() => {
        Toast.clear();
        router.push({ name: "home" });
      }, 1000);
    };
    return { toHome };
  },
};
</script>

<style>
.custom-image .van-empty__image {
  padding-top: 100px;
}
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>