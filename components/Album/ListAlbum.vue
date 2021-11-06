<template>
<div class="new-song-list">
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
    <AlbumItem />
   
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator';
import AlbumItem from './AlbumItem.vue';
@Component({
    components: {
        AlbumItem
    }
})
export default class ListAlbums extends Vue {}
</script>

<style lang="less">
.new-song-list {
    display: flex;
    flex-wrap: wrap;
}
</style>
