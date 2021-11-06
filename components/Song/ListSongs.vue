<template>
<div class="container-product">
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
    <SongItem />
    <SogItem />
    <SongItem />
    <SongItem />
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator';
import SongItem from './SongItem.vue';
@Component({
    components: {
        SongItem
    }
})
export default class ListSongs extends Vue {}
</script>

<style lang="less">
.container-product {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
}
</style>
