import { Context } from "@nuxt/types";
import store from "@/controllers/store";
import ApiClient from "~/library/ApiClient";

export default async function (context: Context) {
  if(store.value.user !== "") return
  try {
    const data = await new ApiClient().get("resource/users/me")
    store.value.user = data
    console.log(data.id)
    
  } catch (error) {
    return error;
  }
  try {
    const img = await new ApiClient().get(`public/users/:${store.value.user.id}/avatar`)
    console.log(img)
    store.value.img = img
  } catch (error) {
    console.log(error)
  }
  
  if(context.route.path == '/login' || '/register') {
    context.redirect('/')
  }
}
