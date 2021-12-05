<template>
  <div class="wrap">
    <div class="wrap__title">{{ newsDetail.title }}</div>
    <div class="wrap__time">{{ newsDetail.publish_time }}</div>
    <div class="wrap__content" v-html="newsDetail.content"></div>
  </div>
</template>

<script>
export default {
  props: ["newsDetail"],
  setup() {},
};
</script>

<style lang="less" scoped>
.wrap {
  margin: 0 30px;
  &__title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
  }
  &__time {
    color: #999;
    text-align: center;
    margin: 10px 0;
    font-size: 80%;
  }
}
</style>

<style lang="less">
.wrap__content {
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  form {
    margin: 5px 0;
  }
  img,
  video {
    width: 100%;
  }
}
</style>