<template>
  <!-- 逻辑未写 -->
  <van-tabbar v-model="active" class="wrap">
    <van-field v-model="comment" placeholder="评论框" class="wrap__comment" />
    <div class="wrap__icon">
      <div class="wrap__icon__item" @click="toGood">
        <van-icon name="good-job" size="23" color="#eb4d4b" v-if="is_likes" />
        <van-icon name="good-job" size="23" color="#d1d8e0" v-else />
        <span>{{ newsDetail.like_count }}</span>
      </div>
      <div class="wrap__icon__item" @click="toCollect">
        <van-icon name="star" size="23" color="#f9ca24" v-if="is_favourites" />
        <van-icon name="star" size="23" color="#d1d8e0" v-else />
      </div>
    </div>
  </van-tabbar>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

//喜爱相关
const useLikesEffect = (props, store) => {
  const is_likes = computed(() => props.newsDetail.is_likes);
  const toGood = () => {
    const method = is_likes.value ? "delete" : "post";
    store.dispatch("news/postNewsLikes", [props.newsDetail.id, method]);
  };
  return { is_likes, toGood };
};

//收藏相关
const useCollectEffect = (props, store) => {
  const is_favourites = computed(() => props.newsDetail.is_favourites);
  const toCollect = () => {
    const method = is_favourites.value ? "delete" : "post";
    store.dispatch("news/postNewsCollect", [props.newsDetail.id, method]);
  };
  return { is_favourites, toCollect };
};

export default {
  props: ["newsDetail"],
  setup(props) {
    const active = ref(0);
    const comment = ref("");
    const store = useStore();
    const { is_likes, toGood } = useLikesEffect(props, store);
    const { is_favourites, toCollect } = useCollectEffect(props, store);
    return { active, comment, is_likes, toGood, is_favourites, toCollect };
  },
};
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  align-items: center;
  padding: 0 10px;
  &__comment {
    width: 60%;
    height: 60%;
    display: flex;
    align-items: center;
  }
  &__icon {
    display: flex;
    width: 30%;
    margin: 0 20px;
    &__item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      span {
        margin-left: 3px;
        line-height: 23px;
      }
    }
  }
}
</style>