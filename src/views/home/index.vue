<template>
  <div class="category">
    <NavBar @click="toTop" />
    <Category />
  </div>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <van-list
      v-model:loading="isLoading"
      :finished="finished"
      :offset="5"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <Content />
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { ref, toRaw } from "vue";
import { useStore } from "vuex";
import NavBar from "./components/NavBar.vue";
import Category from "./components/Category.vue";
import Content from "../../components/news/index.vue";
import { Toast } from "vant";

// 下拉刷新，上拉加载
const useReLoadingEffect = () => {
  const store = useStore();
  const loading = ref(false);
  const isLoading = ref(false);
  const finished = ref(false);
  const onRefresh = () => {
    setTimeout(() => {
      store.dispatch("news/getNewsList", store.state.news.active);
      Toast("刷新成功");
      loading.value = false;
    }, 1000);
  };
  const onLoad = async () => {
    await store.dispatch("news/addNewsList", store.state.news.active);
    isLoading.value = false;
    if (toRaw(store.state.news.newsList).length >= 200) {
      finished.value = true;
    }
  };
  return { loading, isLoading, onRefresh, finished, onLoad };
};

// 双击回到顶部
const usetoTopEffect = () => {
  const tochoutNum = ref(0);
  const toTop = () => {
    tochoutNum.value++
    if(tochoutNum.value===2) {
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
    const { loading, isLoading, onRefresh, finished, onLoad } =
      useReLoadingEffect();
    const { toTop } = usetoTopEffect();
    return { loading, isLoading, onRefresh, finished, onLoad, toTop };
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
