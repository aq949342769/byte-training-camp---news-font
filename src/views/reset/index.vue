<template>
<div>
  <van-nav-bar left-text="返回"  left-arrow/>
  <div class="container">
    <div class="ResetBox">
      <div class="ResetBox_title">重置密码</div>
      <div class="SignFlow ResetBox_content">
        <van-field v-model="userinfo.password" type="password"  placeholder="请输入密码" :error="unfillPassword" />
        <van-field v-model="userinfo.password_c" type="password"  placeholder="请再次输入密码" :error="unfillPassword_c" />                    
      </div>
      <van-button :style="{height:'30px',color:'black','border-radius': '10px','border-color':'transparent'}" size="large" round type="info" color="yellow">确定</van-button>
    </div>
  </div>
</div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup(){
    const userinfo = reactive({
      password: "",
      password_c: ""
    });
    return{
      userinfo
    }
  }

}
</script>

<style lang="less">
@import "../../assets/css/SignFlow.less";
body {
  height: 100%;
}
</style>>


