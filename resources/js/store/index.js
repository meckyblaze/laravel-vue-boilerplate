import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

// Import modules
import auth from "./modules/auth";

Vue.use(Vuex);
const ls = new SecureLS({ isCompression: false });

export default new vuex.Store({
  modules: {
    auth
  },
  plugins: [
    createPersistedState({
      Storage: {
        key: process.env.APP_NAME,
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});