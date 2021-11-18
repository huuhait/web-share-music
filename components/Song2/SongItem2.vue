<template>
<div class="profile-container-content-right-info-song">
    <div class="profile-container-content-right-info-song-avatar">
        <img :src="image" alt="">
    </div>
    <div class="profile-container-content-right-info-song-text">
        <div class="profile-container-content-right-info-song-text-name">{{SongName}}</div>
        <div class="profile-container-content-right-info-song-text-author">HoangDang</div>
        <div class="profile-container-content-right-info-song-text-list">
            <div class="profile-container-content-right-info-song-text-list-item">
                <fa icon="play"></fa>9,950
            </div>
            <div class="profile-container-content-right-info-song-text-list-item">
                <fa icon="heart"></fa>390
            </div>
            <div class="profile-container-content-right-info-song-text-list-item">
                <fa icon="comment-alt"></fa>200
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop
} from 'vue-property-decorator';
import Song from '../../type';

@Component
export default class AlbumItem2 extends Vue {
    @Prop() currentSong: Song
    get SongName() {
        return this.currentSong?.name
    }
    get image() {
        return this.currentSong?.image
    }
    // name: string = ''
    // image: string = ''
    // mounted() {
    //     if (this.currentSong == undefined) return
    //     this.name = this.currentSong.name
    //     this.image = this.currentSong.image
    // }
}
</script>

<style lang="less">
.profile-container-content-right-info-song {
    padding: 7px 0;
    display: flex;

    &-avatar {
        padding-right: 10px;
        
        img {
            width: 48px;
        }
    }

    &-text {
        color: #999;

        &-name {
            font-size: 12px;
        }

        &-author {
            color: #000;
            font-size: 10px;
            line-height: 16px;
        }

        &-list {
            display: flex;
            justify-content: space-between;
            padding: 4px 0;

            &-item {
                margin-right: 20px;
                font-size: 13px;
                display: flex;
                align-items: center;

                svg {
                    margin-right: 6px;
                    zoom: 0.8;
                }
            }
        }
    }
}
</style>
