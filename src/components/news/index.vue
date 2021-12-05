<template>
  <!-- 加一个下拉列表组件 -->
  <template v-if="newsList[0]">
    <template v-for="(news, index) in newsList" :key="index">
      <div @click="toDetail(news.id)">
        <template v-if="news.type === 1">
          <NewsText :news="news" />
        </template>
        <template v-else-if="news.type === 2">
          <NewsOnePic :news="news" />
        </template>
        <template v-else-if="news.type === 3">
          <NewsMorePic :news="news" />
        </template>
        <template v-else>
          <NewsVideo :news="news" />
        </template>
      </div>
    </template>
  </template>
  <van-empty description="没有新闻" v-else />
</template>

<script>
import { useStore } from "vuex";
import NewsText from "./NewsText.vue";
import NewsVideo from "./NewsVideo.vue";
import NewsOnePic from "./NewsOnePic.vue";
import NewsMorePic from "./NewsMorePic.vue";
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";

export default {
  components: {
    NewsText,
    NewsVideo,
    NewsOnePic,
    NewsMorePic,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const newsList = computed(() => store.state.news.newsList);
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
    onMounted(async () => {
      await store.dispatch("news/getRecommendNewsList");
    });
    return { newsList, toDetail };
  },
};
</script>

<style>
</style>