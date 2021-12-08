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
        <van-field @input="checkInput" v-model="userinfo.username" name="账号" placeholder="请输入注册邮箱或账号" :error="unfillAccount"/>
        <van-field v-model="userinfo.password" type="password"  placeholder="请输入密码" :error="unfillPassword" />
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

const loginToast = () => {
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
  });
}

export default {
  setup() {
    const { checkNull } = doVerify();
    const store = useStore();
    const router = useRouter();
    const userinfo = reactive({
      username: "",
      password: ""
    });
    let unfillAccount = ref(false);
    let unfillPassword = ref(false);

    watch(userinfo, () => {
      console.log(userinfo)
      if(userinfo.username){
        unfillAccount.value = false
      }
      if(userinfo.password){
        unfillPassword.value = false
      }
    }, {
      deep: true 
    }); 
    
    //登录按钮
    function handleLogin() {
      checkNull(userinfo.username, unfillAccount);
      checkNull(userinfo.password, unfillPassword);
      if(userinfo.username&&userinfo.password){
        loginToast();
        store.dispatch("user/handleLogin", userinfo);
      }else{
        Toast({message: '请将信息填写完整'});
      }; 
    }
      
    }；
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
      checkNull,
      userinfo,
      unfillAccount,
      unfillPassword,
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


