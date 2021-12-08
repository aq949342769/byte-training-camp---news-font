<template>
  <van-nav-bar
    title="用户设置"
    left-arrow
    @click-left="$router.back()"
    safe-area-inset-top
    class="nav"
  ></van-nav-bar>
  <van-cell-group class="cell-group1">
    <van-cell title="头像" is-link @click="handleCellClick(0)"></van-cell>
    <van-cell
      title="昵称"
      :value="userInfo.nick_name"
      is-link
      @click="handleCellClick(1)"
    ></van-cell>
    <van-cell
      title="邮箱"
      :value="userInfo.email"
      is-link
      @click="handleCellClick(2)"
    ></van-cell>
  </van-cell-group>
  <van-cell-group class="cell-group2">
    <van-cell title="黑夜模式">
      <template #right-icon>
        <van-switch v-model="checked" size="20px"></van-switch>
      </template>
    </van-cell>
    <van-cell title="字体大小" :value="font_text" is-link @click="font_show = true">
    </van-cell>
  </van-cell-group>
  <van-button round type="primary" id="save_btn">保存设置</van-button>

  <van-action-sheet
    v-model:show="font_show"
    :actions="fontSize"
    @select="font_select"
    close-on-click-action
  >
  </van-action-sheet>
</template>

<script>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { Dialog,Toast } from "vant";
const useHttpEffect = () => {
  const store = useStore();
  const userInfo = reactive(store.state.user.userInfo);
  const userSetting = reactive(store.state.user.userSetting);
  return { userInfo, userSetting };
};
export default {
  setup() {
    const { userInfo, userSetting } = useHttpEffect();
    let checked = ref(false);
    let font_show = ref(false);
    const fontSize = [{ name: "大" }, { name: "中" }, { name: "小" }];
    let font_text = ref("中");
    const handleCellClick = (index) => {
      if (index === 1) {
        Dialog.alert({
          title: "修改个人信息",
          message: "neirong",
          theme: "round-button",
        })
          .then(() => {})
          .catch(() => {});
      }
    };
    const font_select = (item) => {
      font_text.value = item.name;
      Toast("您选择了 " + item.name + " 字体");
    };

    return {
      userInfo,
      userSetting,
      fontSize,
      handleCellClick,
      checked,
      font_show,
      font_select,
      font_text
    };
  },
  data() {
    return {};
  },
};
</script>

<style>
#save_btn {
  display: block;
  margin: auto;
  margin-top: 10px;
}
</style>