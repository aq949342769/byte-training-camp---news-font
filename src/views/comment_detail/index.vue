<template>
  <div>
    <van-nav-bar :left-text="'全部评论' + ' ('+ comment_num +')'"  left-arrow :fixed=true />
    <div class="container">
      <van-sticky :offset-top="45">
        <div class="stickyarea">
          <span>评论区</span>
          <div class="stickyarea_sort sort_options" >
            <button type="button" class="Button Button--sort" >
              最新
              <van-icon class-prefix="my-icon" size="15.5px" name="sort"/>
              </button>
            
            <button type="button" class="Button Button--sort" >
              最热
              <van-icon class-prefix="my-icon" size="15.5px" name="sort"/>
              </button>
          </div>
        </div>
    </van-sticky>
    </div>
    
    <div class="comment_detail" >
        <!-- 展开的某一条评论详情  -->
        <Content />
        <van-divider />
        <!-- 该评论的回复 -->
        <!-- <div 
          class="reply-box" 
          v-for="(replyitem, index) in replies_list"
          :key="index"> -->
<!--         <div class="reply-box" >  
        </div> -->
      
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
import Content from "../../components/comments/index";
export default {
  components: {
    Content
  },


  setup() {
    let placeholder = '回复用户xxx（默认是所点开的评论者）';
    let reply_object = '';
  

    return{
      placeholder,
      reply_object,
    };
  },
};
</script>

<style lang="less" scoped>
body {
  height: 100vh;
}
.container {
  height: 20px;
  width: 100%;
  padding: 0;
  .stickyarea {
  height: 30px;
  font-size: 14px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  span {
    display: block;
    
    line-height: 30px;
    margin-left: 12px;
  }
  .Button {
    border: none;
    margin-right: 5px;
    background-color: transparent;
    &:hover, &:active{
      color: #005ce6;
      font-weight: 600;
    }
  }
}
}
.comment_detail {
  margin-top: -40px;
  .comment-wrap {
    width: 100%;
  }
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