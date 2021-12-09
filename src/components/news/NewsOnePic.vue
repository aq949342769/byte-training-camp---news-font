<template>
  <div class="card__wrap">
    <div class="card__wrap__left">
      <div class="card__wrap__left__title van-multi-ellipsis--l2">
        {{ news.title }}
      </div>
      <div class="card__wrap__left__subtitle">
        <!-- <div class="card__wrap__left__subtitle__item">新华社</div> -->
        <!-- <div class="card__wrap__left__subtitle__item">345评论</div> -->
        <div class="card__wrap__subtitle__item">
          {{ news.publish_time }} 发布
        </div>
      </div>
    </div>
    <div class="card__wrap__right">
      <img :src="news.media[0]" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
};
</script>

<style lang="less" scoped>
.card__wrap {
  padding: 20px;
  border-bottom: 1px solid #f2f2f2;
  font-size: 14px;
  display: flex;
  &__left {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0;
    &__subtitle {
      display: flex;
      color: #999;
      font-size: 50%;
      padding-top: 10px;
      width: 90%;
      &__item {
        flex: 1;
      }
    }
  }
  &__right {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 2px;
      margin: 0 auto 8px;
    }
  }
}
</style>