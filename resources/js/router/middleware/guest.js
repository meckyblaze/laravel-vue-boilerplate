export default function guest({ next, store }) {
  if (store.state.auth.token) {
    return next({
      name: "Dashboard",
    });
  }
  return next();
}
