<template>
  <div class="detail-wrap">
    <div class="detail-wrap__title">{{ newsDetail.title }}</div>
    <div class="detail-wrap__time">{{ newsDetail.publish_time }}</div>
    <div class="detail-wrap__content" v-html="newsDetail.content"></div>
  </div>
</template>

<script>
export default {
  props: ["newsDetail"],
  setup() {},
};
</script>

<style lang="less" scoped>
.detail-wrap {
  margin: 20px 23px;
  &__title {
    line-height: 40px;
    font-size: 23px;
    font-weight: 700;
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
.detail-wrap__content {
  font-size: 16px;
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
    margin: 10px 0 20px 0;
    line-height: 1.71;
    br {
    line-height: 0px;
    }
  }
  .pgc-h-arrow-right {
    font-weight: bold;
  }
  .pgc-img {
    margin: 18px 0;
  }
  img,video {
      max-width: 100%;
      display: block;
      border-radius: 4px;
      margin: 0 auto 8px;
    }
}
</style>