<template>
  <div class="card__wrap">
    <div class="card__wrap__title van-multi-ellipsis--l3">{{news.title}}</div>
    <div class="card__wrap__subtitle">
      <!-- <div class="card__wrap__subtitle__item">新华社</div> -->
      <!-- <div class="card__wrap__subtitle__item">345评论</div> -->
      <div class="card__wrap__subtitle__item">{{news.publish_time}} 发布</div>
    </div>
  </div>
</template>

<script>
export default {
  props:['news']
};
</script>

<style lang="less" scoped>
.card__wrap {
  padding: 20px;
  border-bottom: 1px solid #f2f2f2;
  font-size: 14px;
  &__subtitle {
    display: flex;
    color: #999;
    font-size: 50%;
    padding-top: 10px;
    width: 100%;
    &__item {
      flex: 1;
    }
  }
}
</style>