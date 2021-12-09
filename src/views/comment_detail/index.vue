<template>
  <div>
    <van-nav-bar :left-text="'全部评论' + ' ( '+ comment_num +' )'"  left-arrow :fixed=true />
    <div class="container">
      <van-sticky :offset-top="45">
        <div class="stickyarea">
          <span>评论区</span>
          <div class="stickyarea_sort sort_options" >
            <button type="button" class="Button Button--sort" >最新</button>
            <button type="button" class="Button Button--sort" >最热</button>
          </div>
        </div>
    </van-sticky>
    </div>
    
    <div class="comment_detail" >
      <div class="comment-item comment-wrap">
        <!-- 展开的某一条评论详情  -->
        <comment></comment>
        <van-divider />
        <!-- 该评论的回复 -->
        <!-- <div 
          class="reply-box" 
          v-for="(replyitem, index) in replies_list"
          :key="index"> -->
<!--         <div class="reply-box" >  
          <reply></reply>
          <reply></reply>
          <reply></reply>
          <reply></reply>
          <reply></reply>
          <reply></reply>
          <reply></reply>
          <reply></reply>
          <reply></reply>
          <reply></reply>
          <reply></reply>
          <reply></reply>
        </div> -->
      </div>
    </div>
    <!--发表评论输入框-->
    <div class="comment-send-lite">
      <div class="textarea-container">
        <textarea :placeholder="placeholder"  rows="1" class="textarea-inherit"></textarea>
      </div>
    </div>
    
  </div>
</template>

<script>
import comment from "../../components/comments/style2.vue";
/* import reply from "../../components/comments/style2.vue";  */
/* import { onMounted } from "vue"; */
export default {
  components: {
    comment,
    /* reply */
  },
  setup() {
    let comment_num = 0;
    let like_amout = 9;
    let reply_amout = 10;
    let unlike_amout = 0;
    let placeholder = '回复用户xxx（默认是所点开的评论者）';
    let reply_object = '';
    
    return{
      comment_num,
      like_amout,
      reply_amout,
      unlike_amout,
      placeholder,
      reply_object,
    };
  },
};
</script>

<style lang="less" scoped>
/* @import '/src/assets/css/comment.less'; */

body {
  height: 100vh;
  width: 100vw;
}
.container {
  height: 20px;
  width: 100%;
  padding: 0;
  .stickyarea {
  height: 30px;
  background-color: white;
  display: flex;
  span {
    display: block;
    flex: 3;
    line-height: 30px;
    margin-left: 15px;
  }
  .Button {
    flex:1;
    border: none;
    margin-right: 15px;
    background-color: transparent;
    &:hover, &:active{
      color: #005ce6;
      font-weight: 600;
    }
  }
}
}
.comment_detail {
  margin-top: -45px;
}


.comment-send-lite {
  width: 90vw;
  position: fixed;
  bottom: 0;
  /* left:0;
  right:0; */
  margin-left: 8px;
  font-size: 13px;
  display: block;
  padding-bottom: 10px;
  background-color: white;
  box-sizing:border-box;
  .textarea-inherit {
    width: 98%;
    overflow: auto;
    word-break: break-all; //解决兼容问题
  }

  textarea {
    background-color: #efefef;
    border: none;
    border-radius: 20px;
    height: 26px;
    line-height: 26px;
    position: relative;
    overflow-wrap: break-word;
    padding: 0 10px;
  }
}

</style>