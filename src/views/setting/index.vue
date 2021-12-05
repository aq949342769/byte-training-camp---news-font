<template>
  <van-nav-bar
    title="用户设置"
    left-arrow
    @click-left="$router.back()"
    safe-area-inset-top="true"
    class="nav"
  ></van-nav-bar>
  <van-cell-group class="cell-group1">
    <van-cell title="头像" is-link @click="handlePop('pic_show')"></van-cell>
    <van-cell title="昵称" is-link @click="handlePop('nick_show')"></van-cell>
    <van-cell title="邮箱" is-link @click="handlePop('email_show')"></van-cell>
  </van-cell-group>
  <van-cell-group class="cell-group2">
    <van-cell title="黑夜模式">
      <template #right-icon>
        <van-switch v-model="checked" size="20px"></van-switch>
      </template>
    </van-cell>
    <van-cell title="字体大小" is-link @click="handlePop('font_show')">
    </van-cell>
  </van-cell-group>
  <van-button round type="primary" id="save_btn">保存设置</van-button>

  <van-popup
    v-model:show="pic_show"
    round
    position="bottom"
    :style="{ height: '30%' }"
  >
    <van-uploader :after-read="afterRead" />
  </van-popup>
  <van-popup
    v-model:show="nick_show"
    round
    position="bottom"
    :style="{ height: '20%' }"
  >
    <van-field v-model="value" placeholder="请输入昵称" />
  </van-popup>
  <van-popup
    v-model:show="email_show"
    round
    position="bottom"
    :style="{ height: '30%' }"
  >
    <van-field v-model="value" placeholder="请输入新邮箱" />
  </van-popup>
  <van-action-sheet
    v-model:show="font_show"
    :actions="font_size"
    @select="font_select"
  >
  </van-action-sheet>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      pic_show: false,
      nick_show: false,
      email_show: false,
      font_show: false,
      font_size: [{ name: "大" }, { name: "中" }, { name: "小" }],
    };
  },
  methods: {
    handlePop(data_name) {
      this[data_name] = !this[data_name];
    },
    font_select(item) {
      this.font_show = false;
      this.$toast("您选择了 " + item.name + " 字体");
    },
  },
};
</script>

<style>
#save_btn {
  display: block;
  margin: auto;
}
</style>