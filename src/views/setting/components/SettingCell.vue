<template>
  <van-cell :title="title" :value="value" @click="handleCellClick"> </van-cell>
  <van-dialog
    v-model:show="show"
    title="修改个人信息"
    :before-close="changeInfo"
    show-cancel-button
  >
    <van-uploader />
    <van-field v-model="nick_name" label="昵称" placeholder="请输入新的昵称" />
    <van-field v-model="email" label="电子邮箱" placeholder="请输入新的邮箱" />
  </van-dialog>
</template>
<script>
import { ref } from "vue";
import { updateUserInfo } from "../../../network/api/my";
import { useStore } from "vuex";
export default {
  name: "SettingCell",
  props: {
    title: String,
    value: {
      type: String,
      default() {
        return "请先登陆";
      },
    },
  },
  setup() {
    let show = ref(false);
    let nick_name = ref(null);
    let email = ref(null);
    const store = useStore();
    const handleCellClick = () => {
      show.value = !show.value;
    };
    const changeInfo = (action) => {
      if (action === "confirm") {
        //缺少验证逻辑，以后补
        updateUserInfo({ nick_name, email })
          .then(() => {
            store.dispatch("Ac_getUserInfo");
            return true;
          })
          .catch((err) => {
            console.log(err);
            return true;
          });
        return true;
      } else {
        return true;
      }
    };
    return { show, handleCellClick, nick_name, email, changeInfo };
  },
  methods: {},
};
</script>