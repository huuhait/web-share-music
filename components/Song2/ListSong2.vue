<template>
<div class="top-song-list">
    <SongItem2 />
    <SongItem2 />
    <SongItem2 />
    <SongItem2 />
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop
} from 'vue-property-decorator';
import SongItem2 from './SongItem2.vue';
@Component({
    components: {
        SongItem2
    }
})
export default class ListSong2 extends Vue {
}
</script>

<style lang="less">
.top-song-list {
    margin-right: -10px;
}
</style>
