<template>
  <van-tabs v-model:active="active" @click-tab="changeTab">
    <van-tab
      v-for="(newsCategory, index) in newsList"
      :title="newsCategory.name"
      :key="index"
    ></van-tab>
  </van-tabs>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

// 获取分类列表
const useHttpEffect = () => {
  const store = useStore();
  const newsList = computed(() => store.state.news.newsCateList);
  return { newsList };
};

// 判断该频道是否为喜爱的
const useIsLoveEffect = () => {
  const store = useStore();
  const is_love = ref(false);
  const getLoveList = async () => {
    store.dispatch("news/getLoveCateList");
  };
  const isLove = (active) => {
    store.commit("news/changeLoveCate", active);
  };
  return { getLoveList, is_love, isLove };
};

// 切换tab页
const useTabEffect = () => {
  const store = useStore();
  const active = ref(0);
  const { isLove } = useIsLoveEffect();
  watch(active, (newVal) => {
    isLove(newVal);
  });
  const changeTab = (item) => {
    store.dispatch("news/getNewsList", item.name);
  };
  return { active, changeTab };
};

export default {
  setup() {
    const { newsList } = useHttpEffect();
    const { getLoveList, is_love, isLove } = useIsLoveEffect();
    const { active, changeTab } = useTabEffect();
    onMounted(async () => {
      await getLoveList();
      isLove(0);
    });
    return { active, newsList, is_love, changeTab };
  },
};
</script>

<style>
</style>