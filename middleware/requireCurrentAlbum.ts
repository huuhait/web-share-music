import { Context } from "@nuxt/types";
import store from "@/controllers/store";

export default function (context: Context) {
    if (!store.value.currentAlbum) {
        context.redirect("/");
    }
}
