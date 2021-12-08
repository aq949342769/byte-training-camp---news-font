<template>
<div>
  <van-nav-bar left-text="返回"  left-arrow/>
  <div class="container">
    <div class="RegistBox">
      <div class="RegistBox_title">注册用户</div>
      <div class="SignFlow RegistBox_content">
        <van-field v-model="userinfo.username" placeholder="账号" :error="unfillAccount"/>
        <van-field v-model="userinfo.email" placeholder="邮箱" :error="unfillEmail"/>
        <van-field v-model="userinfo.password" type="password"  placeholder="密码" :error="unfillPassword"/>
        <van-field v-model="userinfo.password_c" type="password"  placeholder="确认密码" :error="unfillPassword_c"/>
      </div>
      <div class="Register_options">
        <span>已有账号？</span>
        <button type="button" class="Button Register_goLogin Button--plain" @click="goLogin">立即登录</button>
      </div>
      <button type="submit" class="Button RegistBox_submitButton Button--yellow" @click="handleRegister">注册</button>
    </div>
  </div>
</div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { reactive, ref, watch } from "vue";
import { Toast, Notify  } from "vant";

const doVerify = () => {
  const checkNull = (value, isErr) => {
    if(!value){
        isErr.value = true
        return false
    }
    return true
  
  }

  //检查密码是否一致
  const checkPassword = (value1, value2) => {
    let same = value1==value2;
    if(!same){
      Notify({ type: 'warning', message: '密码输入不一致，请仔细检查' });
      return false
    }
    return true
  }
  return{ checkNull, checkPassword }
}

const registerToast = (duration) => {
  Toast.loading({
    message: "加载中...",
    forbidClick: true,
    duration: duration || 2000
  });
}
export default {
  setup() {
    const { checkNull, checkPassword } = doVerify();
    const store = useStore();
    const router = useRouter();
    const userinfo = reactive({
      username: "",
      email: "",
      password: "",
      password_c: ""
    });
    let unfillAccount = ref(false);
    let unfillEmail = ref(false);
    let unfillPassword = ref(false);
    let unfillPassword_c = ref(false);




    watch(userinfo, () => {
      console.log(userinfo)
      if(userinfo.username){
        unfillAccount.value = false
      }
      if(userinfo.email){
        unfillEmail.value = false
      }
      if(userinfo.password){
        unfillPassword.value = false
      }
      if(userinfo.password_c){
        unfillPassword_c.value = false
      }
    }, {
      deep: true 
    }); 
    
    // 注册按钮
    function handleRegister() {
      let res1 = checkNull(userinfo.username, unfillAccount);
      let res2 = checkNull(userinfo.email, unfillEmail);
      let res3 = checkNull(userinfo.password, unfillPassword);
      let res4 = checkNull(userinfo.password_c, unfillPassword_c);
      let res5 = checkPassword(userinfo.password,userinfo.password_c)
      if(res1&&res2&&res3&&res4&&res5){
        store.dispatch("user/handleRegister", userinfo);
        registerToast(3000);
      }else{
        Toast({message: '请将信息填写完整'});
      }; 
      
      setTimeout(() => {
        if(store.state.user.isLogin){
          router.push({ name: "home" });
          Toast.clear();
        }
      }, 4500);
    };
    //前往登录
    const goLogin = () =>{
      registerToast();
      setTimeout(() => {
        router.push({ name: "login" });
        Toast.clear();
      }, 500);
    };

    return {
      checkNull,
      userinfo,
      unfillAccount,
      unfillEmail,
      unfillPassword,
      unfillPassword_c,
      handleRegister,
      goLogin
    }
  }

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


