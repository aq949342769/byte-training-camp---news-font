<template>
  <van-nav-bar title="新闻首页">
    <template #left>
      <van-icon name="manager-o" size="18" @click="toMy" />
    </template>
    <template #right>
      <div class="bar__right" v-show="active" @click="toLove">
        <van-icon name="like" size="20" color="red" v-show="is_love" />
        <van-icon name="like-o" size="20" color="red" v-show="!is_love" />
      </div>
    </template>
  </van-nav-bar>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const is_love = computed(() => store.state.news.love);
    const active = computed(() => store.state.news.active);
    // 设置关注该频道(未完成)
    const toLove = () => {
      console.log(is_love.value);
    };
    const toMy = () => {
      router.push({ name: "my" });
    };
    return { is_love, active, toLove, toMy };
  },
};
</script>

<style lang="less" scoped>
.bar__right {
  p {
    color: red;
    font-size: 12px;
    margin: -8px 0;
  }
}
</style>