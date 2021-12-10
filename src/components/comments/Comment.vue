<template>
    <div class="comment-item comment-wrap reply-wrap" >
        <div class="user_avatar">
          <a href="">
              <img
              class="avatar_img" 
              :src = 'comment.user_avatar' />
          </a>
        </div>
        <div class="content">
          <div>
            <div class="nickname">
              {{comment.user_nickname}}
            </div>
            <div class="toolbox">
              <van-icon class-prefix="my-icon" size="15.5px" name="good" v-show="comment.likes!=1"/>
              <van-icon class-prefix="my-icon" size="15.5px" color="red" name="good-act" v-show="comment.likes==1"/>
              <span>{{comment.like_count}}</span>
              <van-icon class-prefix="my-icon" size="15.5px" name="bad" v-show="comment.likes!=2"/>
              <van-icon class-prefix="my-icon" size="15.5px" color="red" name="bad-act" v-show="comment.likes==2"/>
              <span>{{comment.dislike_count}}</span>
            </div>
          </div>
          <p class="text">
            {{comment.content}}
          </p>
          <!-- <span class="showReply" @click="showReply">{{commentreply_count}}条回复 ></span> -->
          <van-popup v-model:show="show" position="bottom">内容</van-popup>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
  props:['comment'],
  name: 'Comment',
  setup() {
    let reply_object = 'xx';
    let show = ref(false);

    const showReply = () => {
      show.value = true
    };

    return{
      reply_object,
      show,
      showReply
    };
  },
}
</script>

<style lang="less">
@import '../../assets/css/comment.less';
</style>