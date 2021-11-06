import { ssrRef } from "@nuxtjs/composition-api";

const store = ssrRef({
  user: "",
})

export default store;
