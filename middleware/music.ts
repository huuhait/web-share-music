import { Context } from "@nuxt/types";
import store from "@/controllers/store";

export default async function (context: Context) {
  if(!store.value.music) {
    try {
      const data = await context.$axios.$get("http://localhost:3000/api/v2/public/musics")
      const dataAlbum = await context.$axios.$get("http://localhost:3000/api/v2/public/albums")
      const newSongs = await context.$axios.$get("http://localhost:3000/api/v2/public/musics?order_by=created_at&ordering=desc&limit=10")

      const filterPendingData = data.filter((music: any) => music.state !== "pending" )
      const filterPendingNewSongs = newSongs.filter((music: any) => music.state !== "pending" )

      store.value.music = filterPendingData
      store.value.albums = dataAlbum
      store.value.newSongs = filterPendingNewSongs

      const dataTrending = await context.$axios.$get("http://localhost:3000/api/v2/public/trending/musics/daily")
      
      const arrTrendingMusic: any = []
      const musics: any = store.value.music
      for(let i = 0; i < dataTrending.length; i++) {
        for (let x = 0; x < musics.length; x++) {
          if (dataTrending[i].music_id === musics[x].id) {
            const music = musics[x]
            music.today_view_count = dataTrending[i].today_view_count
            arrTrendingMusic.push(music)
          }
        }
      }
      store.value.trending = arrTrendingMusic
    } catch (error) {
      console.log(error);
      return error;
    }
  }

 
}
