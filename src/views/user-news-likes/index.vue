<template>
  <nav-bar title="点赞新闻"></nav-bar>
  <NewsList
    :newsList="likeNewsList"
    storeOMAction="user/getUserLikeNewsList"
    storeAddAction="user/addUserLikeNewsList"
  />
</template>
<script>
import NavBar from "../../components/common/NavBar.vue";
import NewsList from "../../components/news/index.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  components: {
    NavBar,
    NewsList,
  },
  setup() {
    const store = useStore();
    const likeNewsList = computed(() => store.state.user.likeNewsList);
    onMounted(() => {
      store.dispatch("user/getUserLikeNewsList");
    });
    return { likeNewsList };
  },
};
</script>
