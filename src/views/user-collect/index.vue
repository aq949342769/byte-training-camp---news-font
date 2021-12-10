<template>
  <nav-bar title="我的收藏"></nav-bar>
  <NewsList :newsList="collectNewsList" storeOMAction="user/getUserCollectNewsList"
    storeAddAction="user/addUserLikeNewsList"/>
</template>
<script>
import { computed } from "@vue/reactivity";
import NavBar from "../../components/common/NavBar.vue";
import NewsList from "../../components/news/index.vue";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";

export default {
  components: {
    NavBar,
    NewsList,
  },
  setup() {
    const store = useStore();
    const collectNewsList = computed(() => store.state.user.collectNewsList);
    onMounted(() => {
      store.dispatch("user/getUserCollectNewsList");
    });
    return { collectNewsList };
  },
};
</script>
