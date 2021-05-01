import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Contracts from "@/views/home/contracts/Contracts.vue";
import Proposals from "@/views/home/proposals/Proposals.vue";
import Home from "@/views/home/Home.vue";

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {path: "/", component: Home, props: route => route.query, children: [
    {path: "/contracts", component: Contracts, props: route => route.query},
    {path: "/proposals", component: Proposals, props: route => route.query},
  ]}
];

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
