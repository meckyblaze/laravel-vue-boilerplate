import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import publicRoutes from "./public";
import protectedRoutes from "./protected";

Vue.use(VueRouter);

const routes = [...publicRoutes, ...protectedRoutes];

// noinspection JSUnusedGlobalSymbols
const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const nextFactory = (context, middleware, index) => {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);

    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
};

router.beforeEach((to, from, next) => {
  if (to.meta["middleware"]) {
    const middleware = to.meta["middleware"];

    const context = {
      to,
      from,
      next,
      store,
    };

    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({
      ...context,
      next: nextMiddleware,
    });
  } else {
    next();
  }
});

export default router;
