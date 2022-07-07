import auth from "../middleware/auth";
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../../views/protected/Dashboard"),
    meta: {
      layout: () => import("../../layouts/protected"),
      middleware: [auth],
    },
  },
];

export default routes;
