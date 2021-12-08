<template>
<div>
  <van-nav-bar left-text="返回"  left-arrow/>
  <div class="container">
    <div class="RegistBox">
      <div class="RegistBox_title">注册用户</div>
      <div class="SignFlow RegistBox_content">
        <van-field v-model="username" placeholder="账号" />
        <van-field v-model="email" placeholder="邮箱" />
        <van-field v-model="password1" type="password"  placeholder="密码" />
        <van-field v-model="password2" type="password"  placeholder="确认密码" />
      </div>
      <div class="Register_options">
        <span>已有账号？</span>
        <button type="button" class="Button Register_goLogin Button--plain">立即登录</button>
      </div>
      <button type="submit" class="Button RegistBox_submitButton Button--yellow">注册</button>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import "../../assets/css/SignFlow.less";
/* .RegistBox{
  
  .SignFlow {
    width: 75vw;
    line-height: 23px;
    font-size: 14px;
    div {
      border:1px solid gray;
      border-radius: 8px;
      margin-top: 15px;
      &:hover{
        border-color: blue;
      }
    }
    input {
      width: 90%;
      border: none;
      margin: 2px;
      padding: 0 5px;
    }
  }
  .Register_options {
    margin-top: 10px;
    margin-bottom: 30px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    span {
      display: inline-block;
      line-height: 20px;
    }

  }
}

 */

</style>>


