import { Toast } from "vant";
import { addComment,  getCommentsList} from "../../network/api/comment";

export const comment = {
  state: () => ({
    commentsList: []
  }),
  getters: {},
  mutations: {
    changeCommentsList(state, newData) {
      state.commentsList = newData
    }
  },
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

    // 查看新闻评论（列表）
    async getCommentsList(ctx, id) {
      await getCommentsList(id)
        .then((res) => {
          if (res.data) {
            ctx.commit("changeCommentsList", res.data);
          }else {
            ctx.commit("changeCommentsList", []);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    
  },
};
