<template>
<div class="top-song-list-item">
    <div class="top-song-list-item-left">
        <div class="top-song-list-item-avatar">
            <img src="../../static/a2.png" alt="" />
        </div>
        <div class="top-song-list-item-title">
            <div class="item-title-top">Spring rain</div>
            <div class="item-title-bot">Miaow</div>
        </div>
    </div>
    <div class="top-song-list-item-right">1</div>
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator';

@Component
export default class AlbumItem2 extends Vue {}
</script>

<style lang="css">
.top-song {
    /* padding: 0 15px; */
    flex: 1;
}

.top-song-list-item {
    padding: 15px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
}

.top-song-list-item-title {
    margin-left: 14px;
}

.top-song-list-item-left {
    display: flex;
    align-items: center;
}

.top-song-list-item-right {
    color: #939aa0;
    display: flex;
    align-items: center;
    font-size: 30px;
}

.top-song-list-item-avatar img {
    border-radius: 500px;
    width: 40px;
}

.top-song-list {
    margin-right: -10px;
}
</style>
