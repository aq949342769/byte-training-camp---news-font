<template>
    <div class="reply-item comment-wrap reply-wrap" >
      <div>
        <div class="user_avata">
          <a href="">
              <img
              class="avatar_img" 
              :src = 'user_avatar' />
          </a>
        </div>
        <div class="content">
          <span class="user">
            <a href="">{{user_nickname}}</a>
          </span>
          <span class="toolbox">
            <span class="like">
              <van-icon class-prefix="my-icon" name="good" v-show="likes!=1"/>
              <van-icon class-prefix="my-icon" color="red" name="good-act" v-show="likes==1"/>
              <span>{{like_count}}</span>
            </span> 
            <span class="dislike">
              <van-icon class-prefix="my-icon" name="bad" v-show="likes!=2"/>
              <van-icon class-prefix="my-icon" color="red" name="bad-act" v-show="likes==2"/>
              <span>{{dislike_count}}</span>
            </span>
            
        </span>
          <p class="text">
            {{content}}
          </p>
          <button class="showreply_btn" @click="showReply">{{}}条回复 ></button>
          <van-popup v-model="show" position="bottom">内容</van-popup>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    /* props: ['user_avatar', 'user_nickname', 'content', like_count, reply_amout, dislike_count, reply_object] */
  setup() {
    const user_avatar = 'https://s3.bmp.ovh/imgs/2021/12/928270c4cb54f1f7.jpg';
    const user_nickname = '评论用户昵称';
    const content = '这是一条用户B发出来的对A的某一新闻评论的回复展示嗯嗯就是这样。';
    let like_count = 9;
    let reply_amout = 10;
    let dislike_count = 0;
    let reply_object = 'xx';
    let likes = 2;
    let show = ref(true);
    const showReply = () => {
      show.value = true
    };
    return{
      user_avatar,
      user_nickname,
      content,
      like_count,
      reply_amout,
      dislike_count,
      reply_object,
      likes,
      show,
      showReply
    };
  },
}
</script>

<style lang="less">
@import '/src/assets/css/comment.less';
</style>