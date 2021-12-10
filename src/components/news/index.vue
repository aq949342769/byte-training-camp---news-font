<template>
  <template v-if="newsList[0]">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <van-list
        v-model:loading="isLoading"
        :finished="finished"
        :offset="5"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <template v-for="news in newsList" :key="news.id">
          <div @click="toDetail(news.id)">
            <template v-if="news.type === 2">
              <NewsOnePic :news="news" />
            </template>
            <template v-else-if="news.type === 3">
              <NewsMorePic :news="news" />
            </template>
            <template v-else-if="news.type === 4">
              <NewsVideo :news="news" />
            </template>
            <template v-else>
              <NewsText :news="news" />
            </template>
          </div>
        </template>
      </van-list>
    </van-pull-refresh>
  </template>
  <van-empty description="没有新闻" v-else />
</template>

<script>
import { useStore } from "vuex";
import { onMounted, ref, toRaw, watch } from "vue";
import { useRouter } from "vue-router";
import NewsText from "./NewsText.vue";
import NewsVideo from "./NewsVideo.vue";
import NewsOnePic from "./NewsOnePic.vue";
import NewsMorePic from "./NewsMorePic.vue";
import { Toast } from "vant";

// 下拉刷新，上拉加载
const useReLoadingEffect = (store, newsList, storeOMAction, storeAddAction) => {
  const loading = ref(false);
  const isLoading = ref(false);
  const finished = ref(false);
  const onRefresh = () => {
    setTimeout(() => {
      store.dispatch(toRaw(storeOMAction), store.state.news.active);
      Toast("刷新成功");
      loading.value = false;
    }, 1000);
  };
  const onLoad = async () => {
    if (toRaw(newsList.value).length >= 10) {
      await store.dispatch(toRaw(storeAddAction), store.state.news.active);
      if (toRaw(store.state.news.newsList).length >= 200) {
        finished.value = true;
      }
    } else {
      finished.value = true;
    }
    isLoading.value = false;
  };
  return { loading, isLoading, onRefresh, finished, onLoad };
};

// 跳转页面
const useRouterEffect = () => {
  const router = useRouter();
  const toDetail = (id) => {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });
    setTimeout(() => {
      router.push({ name: "newsDetail", query: { id: id } });
      Toast.clear();
    }, 400);
  };
  return { toDetail };
};

export default {
  components: {
    NewsText,
    NewsVideo,
    NewsOnePic,
    NewsMorePic,
  },
  props: ["newsList", "storeOMAction", "storeAddAction"],
  setup(props) {
    const store = useStore();
    const propsNewsList = ref([]);
    const { loading, isLoading, onRefresh, finished, onLoad } =
      useReLoadingEffect(
        store,
        propsNewsList,
        toRaw(props).storeOMAction,
        toRaw(props).storeAddAction
      );
    const { toDetail } = useRouterEffect();

    watch(props, (newVal, oldVal) => {
      propsNewsList.value = toRaw(oldVal.newsList);
    });
    onMounted(() => {
      store.dispatch(toRaw(props).storeOMAction, store.state.news.active);
    });
    return { loading, isLoading, onRefresh, finished, onLoad, toDetail };
  },
};
</script>

<style>
</style>