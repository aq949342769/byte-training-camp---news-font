import { createStore } from "vuex";

import { news } from "./module/news";
import { comment } from "./module/comment";
import { user } from "./module/user";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    news,
    comment,
    user,
  },
});
