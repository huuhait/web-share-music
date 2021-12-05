<template>
<div class="top-song-list">
    <div v-for="(item, index) in data" :key="index" class="playlist-list">
      <SongItem2 :song="item"/>
    </div>
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
    @Prop() data: any
}
</script>

<style lang="less">
.top-song-list {
    margin-right: -10px;
}
</style>
