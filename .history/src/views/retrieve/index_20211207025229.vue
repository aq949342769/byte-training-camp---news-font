<template>
<div>
  <van-nav-bar left-text="返回"  left-arrow/>
  <div class="container">
    <div class="RetrieveBox">
      <div class="RetrieveBox_title">找回密码</div>
      <div class="SignFlow RetrieveBox_content">
        <div class="">
          <input type="text" class="SignFlow_account" placeholder="填写注册时的邮箱或账号"  >
        </div>
        <div class="">
          <input type="password" class="SignFlow_code" placeholder="验证码"  >
        </div>
      </div>
      
      <div class="Code">
        <canvas id="canvas" width="100" height="35" class="Code_area"></canvas>
        <button type="button" class="Button Code_RefreshBtn Button--plain">刷新验证码</button>
      </div>
      <button type="submit" class="Button RetrieveBox_submitButton Button--yellow">确定</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  setup(){
    
  }

}
</script>

<style lang="less">
.RetrieveBox{
  &_title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .SignFlow {
    width: 75vw;
    line-height: 23px;
    font-size: 14px;
    div {
      border:1px solid gray;
      border-radius: 8px;
      margin-top: 15px;
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
  .Code {
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    #canvas {
      vertical-align: middle;
      box-sizing: border-box;
      border: 1px solid #ddd;
      cursor: pointer;
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


</style>>


