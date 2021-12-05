<template>
  <van-nav-bar :title="newsDetail.title" left-arrow @click-left="onClickLeft" />
  <!-- 新闻区 -->
  <NewsContent :newsDetail="newsDetail" />
  <van-divider>正文结束</van-divider>
  <!-- 评论区 -->
  <NewsComment />
  <!-- 推荐新闻区 -->
  <div class="recomment">
    <div class="recomment__title van-hairline--bottom">推荐新闻</div>
    <NewsRecommendation />
  </div>
  <!-- footer -->
  <NewsOperate />
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import NewsContent from "./components/NewsContent.vue";
import NewsComment from "./components/NewsComment.vue";
import NewsRecommendation from "../../components/news/index.vue";
import NewsOperate from "./components/NewsOperate.vue";

export default {
  components: {
    NewsContent,
    NewsComment,
    NewsRecommendation,
    NewsOperate,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const onClickLeft = () => history.back();
    const newsDetail = computed(() => store.state.news.newsDetail);
    onMounted(() => {
      const id = route.query.id;
      store.dispatch("news/getNewsDetailList", id);
    });
    return {
      onClickLeft,
      newsDetail,
    };
  },
};
</script>

<style lang="less" scoped>
.recomment {
  &__title {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
    padding: 10px;
    letter-spacing: 2px;
  }
}
</style>