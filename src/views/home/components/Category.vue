<template>
  <van-tabs v-model:active="active">
    <van-tab
      v-for="(newsCategory, index) in newsList"
      :title="newsCategory.name"
      :key="index"
    ></van-tab>
  </van-tabs>
</template>

<script>
import { onMounted, ref } from "vue";
import { getNewsList, getLoveNewsList } from "../../../network/api/news";

// 网络请求
const useHttpEffect = () => {
  const newsList = ref([]);
  const getList = () => {
    getNewsList()
      .then((res) => {
        newsList.value = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getLoveList = () => {
    getLoveNewsList().then((res) => {
      console.log(res);
    });
  };
  return { newsList, getList, getLoveList };
};

export default {
  setup() {
    const active = ref(0);
    const { newsList, getList, getLoveList } = useHttpEffect();
    onMounted(async () => {
      await getList();
      await getLoveList();
    });
    return { active, newsList };
  },
};
</script>

<style>
</style>