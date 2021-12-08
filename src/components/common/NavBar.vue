<template>
  <van-nav-bar
    :title="title"
    left-arrow
    @click-left="$router.back(-1)"
    safe-area-inset-top
    class="nav"
  >
  </van-nav-bar>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
<style lang="less">
.nav {
  position: sticky;
  top: 0;
}
</style>