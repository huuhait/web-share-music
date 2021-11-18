import { ssrRef } from "@nuxtjs/composition-api";

const store = ssrRef({
  user: "",
  isMusicDetailPage: false,
  img: ""
})

export default store;
