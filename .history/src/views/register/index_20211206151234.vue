<template>
<div>
  <van-nav-bar left-text="返回"  left-arrow/>
  <div class="container">
    <div class="RegistBox">
      <div class="RegistBox-title">注册用户</div>
      <div class="SignFlow RegistBox-content">
        <div class="">
          <input type="text" class="SignFlow_account" placeholder="账号">
        </div>
        <div class="">
          <input type="" class="SignFlow_email" placeholder="邮箱">
        </div>
        <div class="">
          <input type="password" class="SignFlow_password" placeholder="密码">
        </div>
        <div class="">
          <input type="password" class="SignFlow_password_confirm" placeholder="确认密码">
        </div>
      </div>
      <div class="Register-options">
        <span>已有账号？</span>
        <button type="button" class="Button Button-plain">立即登录</button>
      </div>
      <button type="submit" class="Button RegistBox-submitButton Button-yellow">注册</button>
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
.RegistBox{
  .RegistBox-title {
    font-size: 1.5em;
    font-weight: 600;
  }
  .SignFlow {
    width: 75vw;
    line-height: 30px;
    div {
      border:1px solid gray;
      border-radius: 6px;
      margin-top: 1em;
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
  .Register-options {
    margin-top: 1em;
    margin-bottom: 1.5em;
    height: 2em;
    display: flex;
    justify-content: space-between;
    span {
      display: inline-block;
      line-height: 2em;
    }
  }
  .Button-plain {
    height: auto;
    border: none;
    line-height: inherit;
    background-color: transparent;
    text-decoration-line: underline;
    &:hover{
      color: #005ce6;
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
.Button-yellow{
  background: #fff200c4;
  width: 100%;
  letter-spacing: 0.8em;
  &:hover{
    background: #fff200;
  }
}

</style>>


