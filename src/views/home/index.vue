<template>
  <div class="category">
    <NavBar @click="toTop" />
    <Category />
  </div>
  <Content
    :newsList="newsList"
    storeOMAction="news/getNewsList"
    storeAddAction="news/addNewsList"
  />
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import NavBar from "./components/NavBar.vue";
import Category from "./components/Category.vue";
import Content from "../../components/news/index.vue";

// 双击回到顶部
const usetoTopEffect = () => {
  const tochoutNum = ref(0);
  const toTop = () => {
    tochoutNum.value++;
    if (tochoutNum.value === 2) {
      window.scrollTo(0, 0);
      tochoutNum.value = 0;
    }
  };
  return { toTop };
};

export default {
  components: {
    NavBar,
    Category,
    Content,
  },
  setup() {
    const store = useStore();
    const newsList = computed(() => store.state.news.newsList);
    const { toTop } = usetoTopEffect();
    return { newsList, toTop };
  },
};
</script>

<style lang="less" scoped>
.category {
  position: sticky;
  top: 0px;
  z-index: 1;
}
</style>
