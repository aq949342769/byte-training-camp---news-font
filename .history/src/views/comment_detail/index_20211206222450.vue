<template>
  <div>
    <van-nav-bar left-text="评论"  left-arrow/>
    <div class="comment_detail" >
      <div class="comment-item comment-wrap">
        <!-- 展开的某一条评论详情  -->
        <comment></comment>
        <!-- 该评论的回复 -->
        <!-- <div 
          class="reply-box" 
          v-for="(replyitem, index) in replies_list"
          :key="index"> -->
        <div class="reply-box" >  
          <reply></reply>
        </div>
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
import comment from "../../components/comments/style1.vue";
import reply from "../../components/comments/style2.vue"; 

export default {
  components: {
    comment,
    reply
  },
  setup() {
    let like_amout = 9;
    let reply_amout = 10;
    let unlike_amout = 0;
    let placeholder = '回复用户xxx';
    let reply_object = 'xx';
    return{
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
@import '/src/assets/css/comment.less';
body {
  height: 100vh;
}

.comment-send-lite {
  width: 90vw;
  position: fixed;
  bottom: 0;
  font-size: 13px;
  margin: 0 auto;
  padding-bottom: 10px;
  background-color: white;
  box-sizing:border-box;
  .textarea-inherit {
    width: 95%;
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