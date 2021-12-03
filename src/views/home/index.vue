<template>
  <div class="category">
    <NavBar />
    <Category />
  </div>
  <!-- 加一个下拉列表组件 -->
  <NewsText />
  <NewsVideo />
  <NewsOnePic />
  <NewsMorePic />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Category from "./components/Category.vue";
import NewsText from "../../components/news/NewsText.vue";
import NewsVideo from "../../components/news/NewsVideo.vue";
import NewsOnePic from "../../components/news/NewsOnePic.vue";
import NewsMorePic from "../../components/news/NewsMorePic.vue";
export default {
  components: {
    NewsText,
    NewsVideo,
    NewsOnePic,
    NewsMorePic,
    NavBar,
    Category,
  },
};
</script>

<style lang="less" scoped>
.category {
  position: sticky;
  top: 0px;
}
</style>
