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
      <van-form > 
      <div class="SignFlow LoginBox_content">
        
        <van-field v-model="userinfo.username" name="账号" placeholder="请输入注册邮箱或账号" :rules="[{ required: true, message: '请填写用户名' }]"/>
        <van-field v-model="userinfo.password" type="password"  placeholder="请输入密码" />
        
      </div>
      <div class="Login_options">
        <button type="button" class="Button Login_goRegist Button--plain" @click="goRegister">立即注册</button>
        <button type="button" class="Button Login_forgetPassword Button--plain" @click="goRetrieve">忘记密码</button>
      </div>
      <button type="submit" class="Button LoginBox_submitButton Button--yellow" @click="handleLogin">登录</button>
    </van-form>
    </div>
  </div>
</div>
</template>

<script>
/* import { useRouter } from "vue-router"; */
import { useStore } from "vuex";
import { reactive } from "vue";

export default {
  setup() {
    const store = useStore();
   /*  const router = useRouter(); */
    const userinfo = reactive({
      username: "",
      password: ""
    });
    const rules = {
      account: [
        { 
        required: true, 
        message: '账号不能为空',
        }
      ]

    };
    
    const handleLogin = () => {
      store.dispatch("user/handleLogin", userinfo);
    };
    return {
      userinfo,
      rules,
      handleLogin
    }
  }



}
</script>

<style lang="less">
@import "../../assets/css/SignFlow.less";
</style>>


