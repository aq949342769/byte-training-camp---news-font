<template>
  <van-nav-bar
    title="用户设置"
    left-arrow
    @click-left="$router.back()"
    safe-area-inset-top
    class="nav"
  ></van-nav-bar>

  <setting-cell title="头像"> </setting-cell>
  <setting-cell title="昵称" :value="userInfo.nick_name"> </setting-cell>
  <setting-cell title="邮箱" :value="userInfo.email"> </setting-cell>

  <van-cell title="黑夜模式">
    <template #right-icon>
      <van-switch v-model="checked" size="20px"></van-switch>
    </template>
  </van-cell>
  <van-cell
    title="字体大小"
    :value="font_text"
    is-link
    @click="font_show = true"
  >
  </van-cell>

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
import { Dialog, Toast } from "vant";
import SettingCell from "./components/SettingCell.vue";
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
        Dialog.confirm({
          title: "请输入新的昵称",
          message: "neirong",
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
      font_text,
    };
  },
  components: { SettingCell },
};
</script>

<style>
#save_btn {
  display: block;
  margin: auto;
  margin-top: 10px;
}
</style>