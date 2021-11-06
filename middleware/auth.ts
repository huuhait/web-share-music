import { Context } from "@nuxt/types";
import store from "@/controllers/store";
import Cookies from 'js-cookie'

export default async function (context: Context) {
  if(store.value.user !== "") return
  try {
    const  data = await context.$axios.$get("http://localhost:3000/api/v2/resource/users/me")
    store.value.user = data
  } catch (error) {
    return error;
  }
}
