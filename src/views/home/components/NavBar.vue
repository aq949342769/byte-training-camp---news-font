<template>
  <van-nav-bar title="新闻首页">
    <template #left>
      <van-icon name="manager-o" size="18" @click="toMy"/>
    </template>
    <template #right>
      <div class="bar__right">
        <van-icon name="like-o" size="20" color="red" />
        <!-- <p>喜爱频道</p> -->
      </div>
    </template>
  </van-nav-bar>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    setup(){
        const router = useRouter();
        const toMy =() => {
            router.push({name:'my'})
        }
        return {toMy}
    }
};
</script>

<style lang="less" scoped>
.bar__right {
  p {
    color: red;
    font-size: 12px;
    margin: -8px 0;
  }
}
</style>