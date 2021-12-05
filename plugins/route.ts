import store from "../controllers/store";

export default ({ app }: {app: any}) => {
    // Every time the route changes (fired on initialization too)
    app.router.afterEach((to: any, from: any) => {
        if(to.path === '/login') {
            store.value.destroyWavesuffer = true
            store.value.isPlaying = false
        }
        if(from.path === '/listen-music-detail') {
            store.value.isMusicDetail = ""
        } 
    })
 }