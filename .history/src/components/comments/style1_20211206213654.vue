<template>
  <div>
    <div class="user_avata">
      <a href="">
        <img
          class="avatar_img" 
          :src = 'avatar_url' />
      </a>
    </div>
    <div class="content">
      <div class="user">
        <a href="">{{username}}</a>
      </div>
      <p class="text">
        {{comment_content}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
    /* props: ['avatar_url', 'username', 'comment_content'] */
  setup(){
    const avatar_url = 'https://s3.bmp.ovh/imgs/2021/12/928270c4cb54f1f7.jpg';
    const username = '用户昵称';
    const comment_content = '这是一条用户A发出来的新闻评论展示假设这是A新闻的第一条评论好了。';
    return{
      avatar_url,username,comment_content
    }
  }
}
</script>

<style lang="less">
@import '/src/assets/css/comment.less';
</style>