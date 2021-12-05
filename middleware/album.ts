import { Context } from "@nuxt/types";
import store from "@/controllers/store";

export default async function (context: Context) {
  if(!store.value.albums) {
    try {
      const data = await context.$axios.$get("http://localhost:3000/api/v2/resource/albums")
      store.value.albums = data
    } catch (error) {
      return error;
    }
  }
}
