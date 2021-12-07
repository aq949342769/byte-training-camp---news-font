<template>
<div>
  <van-nav-bar left-text="返回"  left-arrow/>
  <div class="container">
    <div class="ResetBox">
      <div class="ResetBox-title">找回密码</div>
      <div class="SignFlow ResetBox-content">
        <div class="">
          <input type="text" class="SignFlow_account" placeholder="填写注册时的邮箱或账号"  >
        </div>
        <div class="">
          <input type="password" class="SignFlow_code" placeholder="验证码"  >
        </div>
      </div>
      
      <div class="Code">
        <canvas></canvas>
        <button type="button" class="Button Code_Refresh Button-plain">刷新验证码</button>
      </div>
      <button type="submit" class="Button ResetBox-submitButton Button-yellow">确定</button>

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
.ResetBox{
  .ResetBox-title {
    font-size: 1.5em;
    font-weight: 600;
  }
  .SignFlow {
    width: 75vw;
    line-height: 30px;
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
  .Code {
    margin-top: 10px;
    margin-bottom: 15px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    &_Refresh{
      float: right;
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
  height: 25px;
  cursor: pointer;
}
.Button-yellow{
  background: #fff200c4;
  width: 100%;
  letter-spacing: 8px;
  &:hover{
    background: #fff200;
  }
}

</style>>


