<template>
<div>
  <van-nav-bar left-text="返回"  left-arrow/>
  <div class="container">
    <div class="ResetBox">
      <div class="ResetBox_title">重置密码</div>
      <div class="SignFlow ResetBox_content">
        <div class="">
          <input type="password" class="SignFlow_password" placeholder="请输入新密码" v-model="password1" >
        </div>
        <div class="">
          <input type="password" class="SignFlow_password" placeholder="请确定新密码" v-model="password2" >
        </div>
      </div>
      <button type="submit" class="Button ResetBox_submitButton Button--yellow">确定</button>
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
.ResetBox{
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


