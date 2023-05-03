import { createWebHistory, createRouter } from "vue-router";
import List from "./components/ThisList.vue";
import Home from "./components/ThisHome.vue";
import Detail from "./components/ThisDetail.vue";
import Author from "./components/ThisAuthor.vue";
import Comment from "./components/ThisComment.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
