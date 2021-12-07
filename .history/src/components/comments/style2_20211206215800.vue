<template>
  <div class="reply-box">
    <div class="reply-item comment-wrap reply-wrap" >
      <div>
        <div class="user_avata">
          <a href="">
              <img
              class="avatar_img" 
                :src = 'avatar_url' />
          </a>
        </div>
        <div class="content">
          <span class="user">
            <a href="">{{username}}</a>
          </span>
          <span class="toolbox">
          <span class="like">
            <van-icon class-prefix="my-icon" name="good" />
            <span>{{like_amout}}</span>
          </span> 
          <span class="unlike">
            <van-icon class-prefix="my-icon" name="bad" />
            <span>{{unlike_amout}}</span>
          </span>
          <span class="reply">
            <van-icon class-prefix="my-icon" name="comments" />
            <span>{{reply_amout}}</span>
          </span>
        </span>
          <p class="text">
            <span>回复{{reply_object}}:</span>
            {{comment_content}}
          </p>
        </div>
      </div>
    </div>
  <div>
</template>

<script>
export default {
    /* props: ['avatar_url', 'username', 'comment_content'] */
  setup() {
    const avatar_url = 'https://s3.bmp.ovh/imgs/2021/12/928270c4cb54f1f7.jpg';
    const username = '用户昵称';
    const comment_content = '这是一条用户B发出来的对A的某一新闻评论的回复展示嗯嗯就是这样。';
    let like_amout = 9;
    let reply_amout = 10;
    let unlike_amout = 0;
    let reply_object = 'xx';
    return{
      avatar_url,
      username,
      comment_content,
      like_amout,
      reply_amout,
      unlike_amout,
      reply_object,
    };
  },
}
</script>

<style lang="less">
@import '/src/assets/css/comment.less';
</style>