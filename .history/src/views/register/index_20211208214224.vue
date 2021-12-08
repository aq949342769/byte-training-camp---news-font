<template>
<div>
  <van-nav-bar left-text="返回"  left-arrow/>
  <div class="container">
    <div class="RegistBox">
      <div class="RegistBox_title">注册用户</div>
      <div class="SignFlow RegistBox_content">
        <van-field v-model="username" placeholder="账号" :error="unfillAccount"/>
        <van-field v-model="email" placeholder="邮箱" :error="unfillEmail"/>
        <van-field v-model="password1" type="password"  placeholder="密码" :error="unfillPassword"/>
        <van-field v-model="password2" type="password"  placeholder="确认密码" :error="unfillPassword_c"/>
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
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { reactive, ref, watch } from "vue";
import { Toast } from "vant";
const doVerify = () => {
  const checkNull = (value, isErr) => {
    if(!value){
        isErr.value = true
    }
  }
  return{ checkNull }
}
const registerToast = (duration) => {
  Toast.loading({
    message: "快马加鞭注册中...",
    forbidClick: true,
    duration: duration || 2000
  });
}
export default {

}
</script>

<style lang="less">
@import "../../assets/css/SignFlow.less";
.Register_options {
  span {
    display: inline-block;
    line-height: auto;
    vertical-align: middle;
  }
}


</style>>


