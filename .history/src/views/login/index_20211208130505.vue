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
        <van-field v-model="userinfo.username" name="账号" placeholder="请输入注册邮箱或账号" :error="fillAccount" />
        <van-field v-model="userinfo.password" type="password"  placeholder="请输入密码" :error="fillPassword" />
      </div>
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
import { useRouter } from "vue-router";
/* import { useStore } from "vuex"; */
import { reactive, ref} from "vue";
import { Toast } from "vant";

/* const loginTips = (tip) => {
    Toast({message: tip});
}; */
const doVerify = () => {
  const fillAccount = ref(false);
  const accountVerify = (value) => {
    if(!value){
      fillAccount.value = true
    }
  }
  /* const passwordVerify = (value) => {
    const fillPassword = ref(false);
    watch(value, () => {
      !value.value ? fillPassword.value = true :  fillPassword.value = false
    });
  } */
  
  return { accountVerify, fillAccount }
}

const loginToast = () => {
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
  });
}

export default {
  setup() {
    const { accountVerify } = doVerify();
    /* const store = useStore(); */
    const router = useRouter();
    const userinfo = reactive({
      username: "",
      password: ""
    });
    

    const handleLogin = () => {
      console.log(1)
      accountVerify(userinfo.username)
      /* if(!userinfo.username){
        fillAccount = true
      }else if() */
      /* store.dispatch("user/handleLogin", userinfo);  */
    };
    //立即注册
    const goRegister = () =>{
      loginToast();
      setTimeout(() => {
        router.push({ name: "register" });
        Toast.clear();
      }, 500);
    };
    //忘记密码
    const goRetrieve = () =>{
      loginToast();
      setTimeout(() => {
        router.push({ name: "retrieve" });
        Toast.clear();
      }, 500);
    };
    
    return {
      userinfo,
      accountVerify,
      handleLogin,
      goRegister,
      goRetrieve
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


