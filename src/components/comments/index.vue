<template>
  <template v-if="commentsList[0]">
    <div v-for="(comment, index) in commentsList" :key="index" >
      <Comment :comment="comment"></Comment>
    </div>
  </template>
  
  <van-empty description="还没有评论哦, 快来抢占沙发吧~" v-else />

</template>

<script>
import Comment from "./Comment";
/* import { useStore } from "vuex"; */
/* import { computed, onMounted } from "vue"; */

export default {
  components: {
    Comment
  },
  props:[ 'news_id' ],
  setup() {
    /* const store = useStore(); */
    /*const commentsList =  computed(() => store.state.comments.commentsList); */
    const commentsList =[
      {
      "comment_id": 1, //评论id
      "like_count": 10, //点赞数
      "dislike_count": 3, //点踩数量
      "likes": 0, //赞踩状态：0、未点赞/踩，1、已点赞，2、已点踩
      "is_been_commented": false, //是否被评论
      "user_id": 1, //评论用户id
      "user_nickname": "kakkk", //评论用户昵称
      "user_avatar": "https://s1.ax1x.com/2021/12/10/oI3Owd.jpg", //评论用户头像
      "content": "这是另一条评论" //评论内容
      },
      {
      "comment_id": 1, //评论id
      "like_count": 10, //点赞数
      "dislike_count": 3, //点踩数量
      "likes": 1, //赞踩状态：0、未点赞/踩，1、已点赞，2、已点踩
      "is_been_commented": false, //是否被评论
      "user_id": 1, //评论用户id
      "user_nickname": "kakkk", //评论用户昵称
      "user_avatar": "https://s1.ax1x.com/2021/12/10/oI3Owd.jpg", //评论用户头像
      "content": "这是另一条评论" //评论内容
      }
      ] 

    /* onMounted(async () => {
      await store.dispatch("comments/getCommentsList", news_id);
    }); */

    return { commentsList };
  },
};
</script>

<style>
</style>