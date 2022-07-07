export default function auth({ next, store }) {
  if (!store.state.auth.token) {
    return next({
      name: "Login",
      query: { redirect: document.location.pathname },
    });
  }
  return next();
}
