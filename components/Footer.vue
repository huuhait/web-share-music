<template>
<footer class="footer">
    <div class="footer-avatar">
        <img src="../static/a0.png" alt="" />
    </div>
    <div class="footer-control">
        <div class="footer-control-item">
            <a class="jp-previous">
                <fa icon="backward"></fa>
            </a>
        </div>
        <div class="footer-control-item">
            <a class="jp-play" style="display: inline-block" @click='setPlay'>
                <div v-if="isPlay">
                    <fa icon="pause"></fa>
                </div>
                <div v-else>
                    <fa icon="play"></fa>
                </div>
            </a>
        </div>
        <div class="footer-control-item">
            <a class="jp-next">
                <fa icon="forward"></fa>
            </a>
        </div>
        <div class="footer-control-item">
            <a class="" data-toggle="dropdown" data-target="#playlist">
                <fa icon="list"></fa>

            </a>
        </div>
    </div>
    <div class="footer-progress">
        <div class="footer-progress-timeLine">
            <div class="footer-progress-timeLine-bg"></div>
            <div :style="{'width': this.progressTimeLine() +'%'}" class="footer-progress-timeLine-detail">
            </div>
        </div>
    </div>
    <div class="footer-time">
        <div class="footer-time-start">
            <span>{{(Math.round(this.currentTime/60))}}</span>:<span>{{this.currentTime%60}}</span>
        </div>
        <span>/</span>
        <div class="footer-time-end">
            <span>{{(Math.round(this.totalTime/60))}}</span>:<span>{{this.totalTime%60}}</span>
        </div>
        <div class="footer-volume" @click="mute">
            <div class='footer-volume-icon' v-if="isMute">
                <fa icon="volume-up"></fa>
            </div>
            <div class='footer-volume-icon' v-else>
                <fa icon="volume-mute"></fa>
            </div>

            <div class="footer-volume-value"></div>
        </div>
        <div class="footer-shuffle">
            <fa icon="random"></fa>

        </div>
        <div class="footer-replay">
            <fa icon="undo"></fa>
        </div>
    </div>
</footer>
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop
} from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
    _data: any;
    @Prop() totalTime: number
    @Prop() currentTime: number
    @Prop() play: any
    @Prop() mute: any

    data() {
        return {
            isPlay: true,
            isMute: true
        }
    }
    mounted() {
        console.log();
    }
    setPlay() {
        this._data.isPlay = !this._data.isPlay
        console.log(this._data.isPlay);
        this.play()
    }
    setMute() {
        this._data.isMute = !this._data.isMute
        this.mute()
    }
    progressTimeLine() {
        return this.currentTime / this.totalTime * 100
    }
}
</script>

<style lang="less">
.footer {
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 999;

    &-avatar {
        background-color: #000;
        padding: 10px;

        img {
            width: 40px;
            border-radius: 500px;
        }
    }

    &-control {
        color: #fff;
        display: flex;
        align-items: center;
        background-color: #5a6a7a;
        justify-content: space-between;

        &-item {
            width: 60px;
            display: flex;
            justify-content: center;

            i {
                color: #fff;
                zoom: 1.1;
            }

            .fa-play {
                zoom: 1.6;
            }
        }
    }

    &-progress {
        flex: 1;
        background-color: #4d5d6e;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        &-timeLine {
            width: 600px;
            height: 2px;
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            display: block;

            &-bg {
                background-color: #eee;
                width: 100%;
                position: absolute;
                height: 4px;
                z-index: 1
            }

            &-detail {
                background-color: #4cb6cb;
                width: 0%;
                position: absolute;
                height: 4px;
                z-index: 2;
            }
        }
    }

    &-time {
        background-color: #5a6a7a;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 300px;
        color: #fff;

        &-start,
        &-end {
            font-size: 14px;
        }

        .footer-volume {
            display: flex;
            align-items: center;

            &-icon {
                min-width: 20px;
            }

            &-value {
                width: 40px;
                background-color: #fff;
                height: 3px;
                margin-left: 8px;
            }
        }
    }
}
</style>
