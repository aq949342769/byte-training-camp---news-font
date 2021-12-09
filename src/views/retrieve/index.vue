<template>
<div>
  <van-nav-bar left-text="返回"  left-arrow/>
  <div class="container">
    <div class="RetrieveBox">
      <div class="RetrieveBox_title">找回密码</div>
      <div class="SignFlow LoginBox_content">
        <van-field v-model="userinfo.username" name="账号" placeholder="填写注册时的邮箱或账号" :error="unfillAccount"/>
        <van-field v-model="userinfo.code" name="验证码"  placeholder="验证码" :error="unfillC" />
      </div>
      <div class="Code">
        <canvas id="canvas" width="237" height="55" class="Code_area"></canvas>
        <button type="button" class="Button Code_RefreshBtn Button--plain" @click="refreshCode">刷新验证码</button>
      </div>
      <van-button :style="{height:'30px',color:'black','border-radius': '10px','border-color':'transparent'}" size="large" round type="info" color="yellow" @click="sendEmail">确定</van-button>

    </div>
  </div>
</div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  setup(){
    const userinfo = reactive ({
      username:'',
      code: ''

    });
    return{ userinfo }
    
  } 

}
</script>

<style lang="less">
@import "../../assets/css/SignFlow.less";
  .Code {
    margin-top: 20px;
    margin-bottom: 30px;
    justify-content: space-between;
    #canvas {
      vertical-align: middle;
      box-sizing: border-box;
      border: 1px solid gray;
      cursor: pointer;
      margin-bottom: 10px;
    }
    button {
      float: right;
      font-size: 13px;
    }
  }




</style>>


