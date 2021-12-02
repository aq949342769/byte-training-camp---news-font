<template>
  <p @click="XXclick(type,page)">个人中心</p>
</template>

<script>
import { getNews } from "network/home";
export default {
  name: "News",
  methods:{
    XXclick(type,page) {
      getNews(type, page)
        .then((res) => {
          //业务代码
        })
        .catch((err) => {
          //错误提示
        });
    },
  }
};
</script>
