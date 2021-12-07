<template>
  <div>
    <van-nav-bar left-text="评论"  left-arrow/>
    <div class="comment_detail" >
      <div class="comment-item comment-wrap">
        <!-- 展开的某一条评论  -->
        <div>
          <div class="user_avata">
            <a href="#">
              <img
              class="avatar_img" 
              src = 'https://s3.bmp.ovh/imgs/2021/12/928270c4cb54f1f7.jpg' />
            </a>
          </div>
          <div class="content">
            <div class="user">
              <a href="#">用户昵称</a>
            </div>
            <p class="text">
              这是一条用户A发出来的新闻评论展示假设这是A新闻的第一条评论好了。
            </p>
          </div>
        </div>
        <!-- 该评论的收到的回复、赞、踩个数 -->
        <div class="info">
          <span class="reply">
            <span>{{reply_amout}}</span>
            <span>回复</span>
          </span>
          <span class="like">
            <span>{{like_amout}}</span>
            <span>赞</span>
          </span> 
          <span class="unlike">
            <span>{{unlike_amout}}</span>
            <span>踩</span>
          </span>
        </div>
        <!-- 该评论的回复 -->
        <div class="reply-box">
          <div class="reply-item comment-wrap reply-wrap" >
            <div>
              <div class="user_avata">
                <a href="#">
                    <img
                    class="avatar_img" 
                      src = 'https://s3.bmp.ovh/imgs/2021/12/e7d302ecd0e9bcee.jpg' />
                </a>
              </div>
              <div class="content">
                <span class="user">
                  <a href="#">用户昵称</a>
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
                  这是一条用户B发出来的对A的某一新闻评论的回复展示嗯嗯就是这样。
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="comment-send-lite">
      <div class="textarea-container">
        <textarea :placeholder="placeholder" cols="40" rows="1" ></textarea>
      </div>
    </div>
    
  </div>
</template>

<script>
export default{
setup(){
  let like_amout = 9;
  let reply_amout = 10;
  let unlike_amout = 0;
  let placeholder = '回复用户xxx';
  let reply_object = 'xx'
  return{
    like_amout,
    reply_amout,
    unlike_amout,
    placeholder,
    reply_object
  }
}
}
</script>

<style lang="less" scoped>
body {
  height: 100vh;
  
}
/* .comment_detail{
} */
.comment-item , .reply-item{
  font-size: 13px;
  & > div:first-child{
    padding-bottom: 10px;
    border-bottom: 0.5px solid #EDEDED;
    display:flex;
  }
}
.user_avata{
  width: 23px;
  height:23px;
  transform: translate(0px, 0px);
  .avatar_img{
    height: 100%;
    width: 100%;
    border:none;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
  }
}
.content{
  width: 80vw;
  margin-left: 25px;
  margin-top: 16px;
  letter-spacing: 1px;
  .user{
    width: 60vw;
    a {
      vertical-align: middle;
      color: #0000AA;
    }
  }
  .text {
    display: block;
    margin-top: 12px;
    line-height: 18px;
  }
}
.info {
  color: #D4D4D4;
  padding-left: 10px;
  margin-top: 15px;
  margin-bottom: 10px;
  & > span{
    margin-right: 20px; 
    & > span{
      margin-right: 5px;
    }
  }
}
.toolbox {
  color: #D4D4D4;
  float: right;
  > span {
    margin-left: 5px;
  }
}
.comment-send-lite {
  width: 100vw;
  position: fixed;
  bottom: 0;
  font-size: 13px;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 10px;
  background-color: white;
  /* z-index: 2; */
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