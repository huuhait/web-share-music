<template>
    <div class="new-song-list">
        <div v-for="song in listSong" :key="song.id" class="new-song-list-item">
            <AlbumItem :song="song"/>
        </div>
    </div>
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop
} from 'vue-property-decorator';
import AlbumItem from './AlbumItem.vue';

@Component({
    components: {
        AlbumItem
    }
})
export default class ListAlbums extends Vue {
    @Prop() listSong: any
}
</script>

<style lang="less">
.new-song-list {
    display: flex;
    flex-wrap: wrap;
}
</style>
