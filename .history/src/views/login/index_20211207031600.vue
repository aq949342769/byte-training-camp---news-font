<template>
<div>
  <van-nav-bar 
    left-text="返回"  
    left-arrow
    @click-left="$router.back()"
  />
  <div class="container">
    <div class="LoginBox">
      <div class="LoginBox_title">密码登录</div>
      <div class="SignFlow LoginBox_content">
        <!-- <div class="">
          <input type="text" class="SignFlow_account" placeholder="请输入注册邮箱或账号" v-model="username" >
        </div>
        <div class="">
          <input type="password" class="SignFlow_password" placeholder="请输入密码" v-model="password" >
        </div> -->
        <van-field v-model="username" label="文本" placeholder="请输入注册邮箱或账号" />
        <van-field v-model="password" type="password"  placeholder="请输入密码" />
      </div>
      <van-field v-model="password" type="password" label="密码" />
      <div class="Login_options">
        <button type="button" class="Button Login_goRegist Button--plain" @click="goRegister">立即注册</button>
        <button type="button" class="Button Login_forgetPassword Button--plain" @click="goRetrieve">忘记密码</button>
      </div>
      <button type="submit" class="Button LoginBox_submitButton Button--yellow" @click="handleLogin">登录</button>
    </div>
  </div>
</div>
</template>

<script>
/* import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex"; */
export default {



}
</script>

<style lang="less">
.container {
  margin: 10vh auto;
  width: 75vw;
}
.LoginBox{
  &_title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
  }
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
  .Login_options {
    margin-top: 10px;
    margin-bottom: 30px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .Button--plain {
    height: auto;
    border: none;
    line-height: inherit;
    background-color: transparent;
    text-decoration-line: underline;
    &:hover{
      color: blue;
    }
  }
}
.Button {
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 10px;
  text-align: center;
  height: 30px;
  cursor: pointer;
}
.Button--yellow {
  background: #fff200c4;
  width: 100%;
  letter-spacing: 8px;
  &:hover {
    background: #fff200;
  }
}

</style>>


