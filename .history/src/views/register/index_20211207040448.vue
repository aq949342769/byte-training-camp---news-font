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
.Register_options {
  span {
    display: inline-block;
    line-height: 300px;
    vertical-align: bottom;
  }
}


</style>>


