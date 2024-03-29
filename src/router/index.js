import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home/index.vue";
import Login from "../views/login/index.vue";
import Register from "../views/register/index.vue";
import Reset from "../views/reset/index.vue";
import Retrieve from "../views/retrieve/index.vue";
import NewsDetail from "../views/news-detail/index.vue";
import CommentDetail from "../views/comment-detail/index.vue";
import My from "../views/my/index.vue";
import Setting from "../views/setting/index.vue";
import Notfind from "../views/notfind/index.vue";
import MyCollect from "../views/user-collect/index.vue";
import MyNewsLike from "../views/user-news-likes/index.vue";
import MyCommentsLike from "../views/user-comments-like/index.vue";

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
  {
    path: "/collect",
    name: "collect",
    component: MyCollect,
  },
  {
    path: "/comments-like",
    name: "commentsLike",
    component: MyCommentsLike,
  },
  {
    path: "/news-like",
    name: "newsLike",
    component: MyNewsLike,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
