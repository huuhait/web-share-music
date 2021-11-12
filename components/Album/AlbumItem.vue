<template>
<div class="new-song-list-item">
    <div class="new-song-list-item-avatar">
        <div class="overlay">
            <i class="fa fa-play-circle i-2x"></i>
            <fa icon="play-circle"></fa>
        </div>
        <img src="../../static/a2.png" alt="" />
    </div>
    <div class="new-song-list-item-title">
        <div class="item-title-top">Spring rain</div>
        <div class="item-title-bot">Miaow</div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator';

@Component
export default class AlbumItem extends Vue {}
</script>

<style lang="css">
.container-new-top {
    display: flex;
}

.new-song {
    width: 58.33333333%;
}

.new-song-list-item {
    padding: 0 10px;
}

.new-song-list-item-avatar {
    position: relative;
}

.new-song-list-item-avatar img {
    width: 170px;
    border-radius: 4px;
    display: block;
    z-index: 1;
}

.new-song-list-item-title {
    padding: 10px 0;
}

.top-song {
    padding: 0 15px;
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

.new-song-list {
    margin: 0 -10px;
}

.top-song-list {
    margin-right: -10px;
}

.overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 2;
    align-items: center;
    justify-content: center;
    display: none;
}

.overlay svg {
    z-index: 3;
    color: #545a5f;
    zoom: 2;
}

.overlay svg:hover {
    color: #ffff;
}

.new-song-list-item:hover .overlay {
    display: flex;
}
</style>
