<template>
<div>
  <van-nav-bar left-text="返回"  left-arrow/>
  <div class="container">
    <div class="RegistBox">
      <div class="RegistBox_title">注册用户</div>
      <div class="SignFlow RegistBox_content">
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
      <div class="Register_options">
        <span>已有账号？</span>
        <button type="button" class="Button Register_goLogin Button--plain">立即登录</button>
      </div>
      <button type="submit" class="Button RegistBox_submitButton Button--yellow">注册</button>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.container {
  margin: 10vh auto;
  width: 75vw;
}
.RegistBox{
  &_title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .SignFlow {
    width: 75vw;
    line-height: 23px;
    font-size: 14px;
    div {
      border:1px solid gray;
      border-radius: 8px;
      margin-top: 10px;
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
  .Register_options {
    margin-top: 10px;
    margin-bottom: 20px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    span {
      display: inline-block;
      line-height: 20px;
    }

  }
  .Button--plain {
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
  height: 30px;
  cursor: pointer;
}
.Button--yellow{
  background: #fff200c4;
  width: 100%;
  letter-spacing: 8px;
  &:hover{
    background: #fff200;
  }
}

</style>>


