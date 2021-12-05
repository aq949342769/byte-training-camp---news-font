<template>
  <!-- 逻辑未写 -->
  <van-tabbar v-model="active" class="wrap">
    <van-field v-model="comment" placeholder="评论框" class="wrap__comment" />
    <div class="wrap__icon">
      <div class="wrap__icon__item">
        <!-- <van-icon name="good-job-o" size="23"/> -->
        <van-icon name="good-job" size="23" color="#eb4d4b" />
        <span>2</span>
      </div>
      <div class="wrap__icon__item">
        <!-- <van-icon
          name="good-job-o"
          size="23"
          class="wrap__icon__item--transform"
        /> -->
        <van-icon
          name="good-job"
          size="23"
          class="wrap__icon__item--transform"
        />
        <span>2</span>
      </div>
      <!-- <div class="wrap__icon__item"><van-icon name="star-o" size="23" /></div> -->
      <div class="wrap__icon__item">
        <van-icon name="star" size="23" color="#f9ca24" />
      </div>
    </div>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const active = ref(0);
    const comment = ref("");
    return { active, comment };
  },
};
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  align-items: center;
  padding: 0 10px;
  &__comment {
    width: 55%;
    height: 60%;
    display: flex;
    align-items: center;
  }
  &__icon {
    display: flex;
    width: 45%;
    &__item {
      flex: 1;
      display: flex;
      align-items: center;
      color: #666;
      &--transform {
        transform: rotate(180deg);
      }
      span:nth-child(2) {
        padding-left: 2px;
      }
    }
  }
}
</style>