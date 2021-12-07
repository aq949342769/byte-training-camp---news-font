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
        <div class="">
          <input type="text" class="SignFlow_account" placeholder="请输入注册邮箱或账号"  >
        </div>
        <div class="">
          <input type="password" class="SignFlow_password" placeholder="请输入密码"  >
        </div>
      </div>
      <div class="Login_options">
        <button type="button" class="Button Login_goRegist Button--plain">立即注册</button>
        <button type="button" class="Button Login_goRegist Button--plain">忘记密码</button>
      </div>
      <button type="submit" class="Button LoginBox_submitButton Button--yellow">登录</button>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
body {
  font-size: 62.5%;
}
.container {
  margin: 10vh auto;
  width: 75vw;
}
.LoginBox{
  &_title {
    font-size: 22px;
    font-weight: 600;
  }
  .SignFlow {
    width: 75vw;
    line-height: 26px;
    div {
      border:1px solid gray;
      border-radius: 6px;
      margin-top: 10px;
      &:hover{
        border-color: blue;
      }
    }
    input {
      width: 95%;
      border: none;
      margin: 2px;
      padding: 0 5px;
    }
  }
  .Login_options {
    margin-top: 1em;
    margin-bottom: 1.5em;
    height: 2em;
    display: flex;
    justify-content: space-between;
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
  height: 2.5em;
  cursor: pointer;
}
.Button--yellow {
  background: #fff200c4;
  width: 100%;
  letter-spacing: 0.8em;
  &:hover {
    background: #fff200;
  }
}

</style>>


