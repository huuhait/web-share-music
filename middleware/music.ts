import { Context } from "@nuxt/types";
import store from "@/controllers/store";

export default async function (context: Context) {
  if(context.route.path == '/listen-music-detail') {
    store.value.isMusicDetailPage = true
  } else {
    store.value.isMusicDetailPage = false
  }
}
