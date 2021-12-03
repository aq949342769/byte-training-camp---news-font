<template>
  <div class="card__wrap">
    <div class="card__wrap__left">
      <div class="card__wrap__left__title van-multi-ellipsis--l2">
        中央人民政府决定在澳门特别行政区维护国家安全委员会设立国家安全事务顾问和国家安全技术顾问
        中央人民政府决定在澳门特别行政区维护国家安全委员会设立国家安全事务顾问和国家安全技术顾问
      </div>
      <div class="card__wrap__left__subtitle">
        <div class="card__wrap__left__subtitle__item">新华社</div>
        <div class="card__wrap__left__subtitle__item">345评论</div>
        <div class="card__wrap__left__subtitle__item">2天前</div>
      </div>
    </div>
    <div class="card__wrap__right">
      <img src="../../assets/notfind.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.card__wrap {
  padding: 20px;
  border-bottom: 1px solid #f2f2f2;
  font-size: 12px;
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
    }
  }
}
</style>