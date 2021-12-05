<template>
  <div class="card__wrap">
    <div class="card__wrap__title van-multi-ellipsis--l2">{{news.title}}</div>
    <div class="card__wrap__img">
      <div class="card__wrap__img__item" v-for="item in news.media" :key="item">
        <img :src="item"/>
      </div>
    </div>
    <div class="card__wrap__subtitle">
      <div class="card__wrap__subtitle__item">新华社</div>
      <div class="card__wrap__subtitle__item">345评论</div>
      <div class="card__wrap__subtitle__item">2天前</div>
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
  &__img {
    display: flex;
    padding-top: 10px;
    &__item {
      flex: 1;
      text-align: center;
      img {
        width: 90%;
        height: 100%;
      }
    }
  }
  &__subtitle {
    display: flex;
    color: #999;
    font-size: 50%;
    padding-top: 10px;
    width: 70%;
    &__item {
      flex: 1;
    }
  }
}
</style>