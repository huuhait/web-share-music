<template>
<div class="profile-container-content-right-info-song">
    <div class="profile-container-content-right-info-song-avatar">
        <img src="https://i1.sndcdn.com/artworks-000484267635-ttdf7e-t50x50.jpg" alt="">
    </div>
    <div class="profile-container-content-right-info-song-text">
        <div class="profile-container-content-right-info-song-text-name">MU</div>
        <div class="profile-container-content-right-info-song-text-author">Lullaby</div>
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
    Component
} from 'vue-property-decorator';

@Component
export default class AlbumItem2 extends Vue {}
</script>

<style lang="less">
.profile-container-content-right-info-song {
    padding: 10px 0;
    display: flex;

    &-avatar {
        padding-right: 10px;
    }

    &-text {
        color: #999;

        &-name {
            font-size: 14px;
        }

        &-author {
            color: #000;
            font-size: 12px;
        }

        &-list {
            display: flex;
            justify-content: space-between;
            padding: 4px 0;
            margin-left: -2px;

            &-item {
                margin-right: 20px;
                font-size: 14px;    
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
