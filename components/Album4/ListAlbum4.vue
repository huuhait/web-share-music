<template>
    <div class="new-song-list">
        <div v-for="song in listSong" :key="song.id" class="new-song-list-item">
            <AlbumItem4 :album="song"/>
        </div>
    </div>
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop
} from 'vue-property-decorator';
import AlbumItem4 from './AlbumItem4.vue';

@Component({
    components: {
        AlbumItem4
    }
})
export default class ListAlbums4 extends Vue {
    @Prop() listSong: any
}
</script>

<style lang="less">
.new-song-list {
    display: flex;
    flex-wrap: wrap;
}
</style>
