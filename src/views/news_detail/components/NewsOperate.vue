<template>
  <!-- 逻辑未写 -->
  <van-tabbar v-model="active" class="wrap">
    <van-field v-model="comment" placeholder="评论框" class="wrap__comment" />
    <div class="wrap__icon">
      <div class="wrap__icon__item" @click="toGood">
        <!-- <van-icon name="good-job-o" size="23"/> -->
        <van-icon name="good-job" size="23" color="#eb4d4b" />
        <span>{{ newsDetail.like_count }}</span>
      </div>
      <div class="wrap__icon__item" @click="toBad">
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
        <span>{{ newsDetail.dislike_count }}</span>
      </div>
      <!-- <div class="wrap__icon__item"><van-icon name="star-o" size="23" /></div> -->
      <div class="wrap__icon__item" @click="toCollect">
        <van-icon name="star" size="23" color="#f9ca24" />
      </div>
    </div>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
import { Dialog } from "vant";

export default {
  props: ["newsDetail"],
  setup() {
    const active = ref(0);
    const comment = ref("");
    const toGood = () => {
      console.log("toGood");
      Dialog.confirm({
        title: "标题",
        message:
          "如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。",
      }).then(() => {
        // on confirm
      });
    };
    const toBad = () => {
      console.log("toBad");
      Dialog.confirm({
        title: "标题",
        message:
          "如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。",
      }).then(() => {
        // on confirm
      });
    };
    const toCollect = () => {
      console.log("toCollect");
      Dialog.confirm({
        title: "标题",
        message:
          "如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。",
      }).then(() => {
        // on confirm
      });
    };
    return { active, comment, toGood, toBad, toCollect };
  },
};
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  align-items: center;
  padding: 0 10px;
  &__comment {
    width: 52%;
    height: 60%;
    display: flex;
    align-items: center;
  }
  &__icon {
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    width: 47%;
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
        padding-right: 4px;
      }
    }
  }
}
</style>