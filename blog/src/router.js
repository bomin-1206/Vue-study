import { createWebHistory, createRouter } from "vue-router";
import List from './components/ThisList.vue';
import Home from './components/ThisHome.vue';
import Detail from './components/ThisDetail.vue';

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 