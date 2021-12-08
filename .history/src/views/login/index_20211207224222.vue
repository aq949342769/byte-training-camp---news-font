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
      <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
</van-form>
      <van-form > 
      
        <van-field v-model="userinfo.username" name="账号" placeholder="请输入注册邮箱或账号" :rules="[{ required: true, message: '请填写用户名' }]"/>
        <van-field v-model="userinfo.password" type="password"  placeholder="请输入密码" />
      
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
import { reactive, ref } from "vue";

export default {
  setup() {
    const store = useStore();
   /*  const router = useRouter(); */
    const username = ref("");
    const password = ref("");
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
    const onSubmit = (values) => {
      console.log('submit', values);
    };
    
    const handleLogin = () => {
      store.dispatch("user/handleLogin", userinfo);
    };
    return {
      username,
      password,
      userinfo,
      rules,
      onSubmit,
      handleLogin
    }
  }



}
</script>

<style lang="less">
@import "../../assets/css/SignFlow.less";
</style>>


