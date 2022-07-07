import guest from "../middleware/guest";

const routes = [
  {
    path: "/",
    redirect: "/sign_in",
  },

  {
    path: "/sign_in",
    name: "Login",
    component: () => import("../../views/public/LoginPage"),
    meta: {
      layout: () => import("../../layouts/public"),
      middleware: [guest],
    },
  },

  {
    path: "/sign_up",
    name: "Register",
    component: () => import("../../views/public/RegisterPage"),
    meta: {
      layout: () => import("../../layouts/public"),
      middleware: [guest],
    },
  },

  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../../views/public/ForgotPassword"),
    meta: {
      layout: () => import("../../layouts/public"),
      middleware: [guest],
    },
  },

  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("../../views/public/ResetPassword"),
    meta: {
      layout: () => import("../../layouts/public"),
      middleware: [guest],
    },
  },
];

export default routes;
