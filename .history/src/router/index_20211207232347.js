import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/home/index.vue";
import Login from "../views/login/index.vue";
import Register from "../views/register/index.vue";
import Reset from "../views/reset/index.vue";
import Retrieve from "../views/retrieve/index.vue";
import NewsDetail from "../views/news_detail/index.vue";
import CommentDetail from "../views/comment_detail/index.vue";
import My from "../views/my/index.vue";
import Setting from "../views/setting/index.vue";
import Notfind from "../views/notfind/index.vue";

const routes = [
  { path: "/:pathMatch(.*)", name: "404", component: Notfind },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  //重置密码
  {
    path: "/reset",
    name: "reset",
    component: Reset,
  },
  //找回密码（发邮件）
  {
    path: "/retrieve",
    name: "retrieve",
    component: Retrieve,
  },
  {
    path: "/news",
    name: "newsDetail",
    component: NewsDetail,
  },
  {
    path: "/comment",
    name: "commentDetail",
    component: CommentDetail,
  },
  {
    path: "/my",
    name: "my",
    component: My,
  },
  {
    path: "/setting",
    name: "setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
