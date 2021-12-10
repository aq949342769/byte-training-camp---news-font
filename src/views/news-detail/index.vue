<template>
  <div class="navbar">
    <van-nav-bar :title="newsDetail.title" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis" size="18" @click="showShare = true" />
      </template>
    </van-nav-bar>
  </div>
  <!-- 新闻区 -->
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <NewsContent :newsDetail="newsDetail" />
    <van-divider>正文结束</van-divider>
    <!-- 评论区 -->
    <div class="comment">
      <NewsComment />
    </div>
  </van-pull-refresh>
  <!-- footer -->
  <NewsOperate :newsDetail="newsDetail" />
  <van-share-sheet
    v-model:show="showShare"
    title="立即分享给好友"
    :options="options"
    @select="onSelect"
  />
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import NewsContent from "./components/NewsContent.vue";
import NewsComment from "./components/NewsComment.vue";
import NewsOperate from "./components/NewsOperate.vue";
import { Toast } from "vant";

// 分享面板
const useShareSheetEffect = () => {
  const showShare = ref(false);
  const options = [
    { name: "微信", icon: "wechat" },
    { name: "微博", icon: "weibo" },
    { name: "复制链接", icon: "link" },
    { name: "分享海报", icon: "poster" },
    { name: "二维码", icon: "qrcode" },
  ];
  const onSelect = (option) => {
    Toast(option.name);
    showShare.value = false;
  };
  return { showShare, options, onSelect };
};

// 下拉刷新
const usePullRefreshEffect = () => {
  const loading = ref(false);
  const onRefresh = () => {
    setTimeout(() => {
      Toast("刷新成功");
      loading.value = false;
    }, 1000);
  };
  return { loading, onRefresh };
};

export default {
  components: {
    NewsContent,
    NewsComment,
    NewsOperate,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const onClickLeft = () => history.back();
    const newsDetail = computed(() => store.state.news.newsDetail);
    const { showShare, options, onSelect } = useShareSheetEffect();
    const { loading, onRefresh } = usePullRefreshEffect();

    onMounted(() => {
      store.dispatch("news/getNewsDetailList", route.query.id);
    });
    return {
      onClickLeft,
      newsDetail,
      options,
      onSelect,
      showShare,
      loading,
      onRefresh,
    };
  },
};
</script>

<style lang="less" scoped>
.navbar {
  position: sticky;
  top: 0px;
  z-index: 1;
}
.comment {
  padding-bottom: 60px;
}
</style>
