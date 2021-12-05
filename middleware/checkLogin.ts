import { Context } from "@nuxt/types";
import store from "@/controllers/store";

export default async function (context: Context) {
    try {
      if(!store.value.user) {
        const data = await context.$axios.$get("http://localhost:3000/api/v2/resource/users/me")
        store.value.user = data
        store.value.isLogin = true
      }
    
      if (context.route.path === '/confirm-email' && store.value.user?.state === 'pending') {
        return
      } 
      // else if (store.value.user?.state === 'pending') {
      //   context.redirect("/confirm-email")
      // }
    } catch (error) {
      store.value.user = null;
      return error;
    }
}