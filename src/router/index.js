import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/character/:id",
    name: "Character",
    component: () => import("../views/Character.vue"),
    props:true
  },
  {
    path:'/create/character',
    name:'Create',
    component: () => import("../views/CreateCharacter.vue")
  },
  {
    path:'/test',
    component: () => import("../views/Counter.vue")
  },
  {
    path: "*",
    redirect: { name: "Home" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
