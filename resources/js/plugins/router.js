import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },

  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact')
  },
];

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes
});
