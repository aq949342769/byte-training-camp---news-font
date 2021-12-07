<template>
  <div class="category">
    <NavBar />
    <Category />
  </div>
  <Content />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Category from "./components/Category.vue";
import Content from "../../components/news/index.vue";


export default {
  components: {
    NavBar,
    Category,
    Content,
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
