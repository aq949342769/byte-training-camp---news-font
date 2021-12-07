<template>
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
</template>

<style lang="less">
@import '/src/assets/css/comment.less';
</style>