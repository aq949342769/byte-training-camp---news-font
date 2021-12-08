import { Toast } from "vant";
import { addComment } from "../../network/api/comment";
export const comment = {
  state: () => ({}),
  getters: {},
  mutations: {},
  actions: {
    async addComment(ctx, data) {
      await addComment(data).then((res) => {
        if (res.code === 0) {
          Toast.success("评论成功");
        } else {
          Toast.fail(res.msg);
        }
      });
    },
  },
};
