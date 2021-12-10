<template>
  <div class="nav" @click="toTop">
    <van-nav-bar
      :title="title"
      left-arrow
      @click-left="$router.back(-1)"
      safe-area-inset-top
    >
    </van-nav-bar>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    title: String,
  },
  setup() {
    // 双击回到顶部
    const tochoutNum = ref(0);
    const toTop = () => {
      tochoutNum.value++;
      if (tochoutNum.value === 2) {
        window.scrollTo(0, 0);
        tochoutNum.value = 0;
      }
    };
    return { toTop };
  },
};
</script>

<style lang="less">
.nav {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>