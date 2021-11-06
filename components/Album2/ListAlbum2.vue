<template>
<div class="top-song-list">
    <AlbumItem2 />
    <AlbumItem2 />
    <AlbumItem2 />
    <AlbumItem2 />
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator';
import AlbumItem2 from './AlbumItem2.vue';
@Component({
    components: {
        AlbumItem2
    }
})
export default class ListAlbum2 extends Vue {}
</script>

<style lang="less">
.top-song-list {
    margin-right: -10px;
}
</style>
