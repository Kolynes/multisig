import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from "@/views/home/Home.vue";

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {path: "/", component: Home, props: route => route.query}
];

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
