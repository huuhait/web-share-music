<template>
<footer class="footer">
    <!-- <div id="hoang" style="display: none"></div> -->
    <div class="footer-avatar">
        <img src="../static/a0.png" alt="" />
    </div>
    <div class="footer-control">
        <div class="footer-control-item">
            <div class="jp-previous" @click="pre_song">
                <fa icon="backward"></fa>
            </div>
        </div>
        <div class="footer-control-item">
            <a class="jp-play" style="display: inline-block">
                <div v-if="isloading" style="color: #999">
                    <fa icon="play"></fa>
                </div>
                <div v-else>
                    <div v-if="isPlay" @click='play'>
                        <fa icon="pause"></fa>
                    </div>
                    <div v-else @click='play'>
                        <fa icon="play"></fa>
                    </div>
                </div>
            </a>
        </div>
        <div class="footer-control-item">
            <div class="jp-next" @click="next_song">
                <fa icon="forward"></fa>
            </div>
        </div>
        <div class="footer-control-item">
            <a class="" data-toggle="dropdown" data-target="#playlist">
                <fa icon="list"></fa>
            </a>
        </div>
    </div>
    <div class="footer-progress">
        <div class="footer-progress-start">
            <span>{{(convertSecondToMinute(this.data2.currentTime/60))}}</span>:<span>{{convertSecondToMinute(this.data2.currentTime%60)}}</span>
        </div>
        <div class="footer-progress-timeLine">
            <input v-model="data2.progressTimeLine" @input="progress" class="footer-progress-timeLine-detail" type="range" name="" id="hoang" min='0' max="100" step="1" />
        </div>
        <div class="footer-progress-end">
            <span>{{(convertSecondToMinute(this.data2.totalTime/60))}}</span>:<span>{{convertSecondToMinute(this.data2.totalTime%60)}}</span>
        </div>
    </div>
    <div class="footer-end">
        <div class="footer-end-song">
            <SongItem2 :currentSong="this.myList[this.data2.currentTrack]" />
        </div>
        <div class="footer-end-volume" @click="mute">
            <div class='footer-end-volume-icon' v-if="this.muted">
                <fa icon="volume-up"></fa>
            </div>
            <div class='footer-end-volume-icon' v-else>
                <fa icon="volume-mute"></fa>
            </div>
            <!-- <div class="footer-volume-value">
            </div> -->
        </div>
        <div class="footer-end-shuffle">
            <div class="active" @click="shuffle" v-if="this.isShuffle">
                <fa icon="random"></fa>
            </div>
            <div @click="shuffle" v-else>
                <fa icon="random"></fa>
            </div>
        </div>
        <div class="footer-end-replay">
            <div class="active" @click="rePlay" v-if="this.isReplay">
                <fa icon="undo"></fa>
            </div>
            <div class="" @click="rePlay" v-else>
                <fa icon="undo"></fa>
            </div>
        </div>
    </div>
</footer>
</template>

<script lang="ts">
import {
    Vue,
    Component,
} from 'vue-property-decorator';
import SongItem2 from './Song2/SongItem2.vue';

@Component({
    components: {
        SongItem2
    }
})
export default class Footer extends Vue {
    data2 = {
        currentTime: 0,
        totalTime: 0,
        isloading: true,
        progressTimeLine: 0,
        currentTrack: 0
    }
    // get progressTimeLine2() {
    //     return this.data2.progressTimeLine
    // }
    get totalTime() {
        return this.data2.totalTime 
    }
    get isloading() {
        return this.data2.isloading
    }
    Wavesurfer: any
    wavesurfer: any
    isPlay: boolean = false
    muted: boolean = true
    isReplay: boolean = false
    isShuffle: boolean = false
    myList: any[] = [{
            id: 0,
            name: "Sài Gòn Đâu Có Lạnh",
            image: "artworks-3Tvthj5szuGw9XFz-g8FzrA-t500x500.jpg",
            url: '../TaiNhacHay.Biz - Sài Gòn Đâu Có Lạnh.mp3'
        },
        {
            id: 1,
            name: "IroKousuiHorimiyaOpening",
            image: "artworks-ipuUfyuMU4hdtXgz-xH27SQ-t500x500.jpg",
            url: '../IroKousuiHorimiyaOpening-YohKamiyama-7026438.mp3'
        },
        {
            id: 2,
            name: "CryBabyTokyoRevengersOpening",
            image: "artworks-Mlg3wB4sTkBztUs8-JrTmFQ-t200x200.jpg",
            url: '../CryBabyTokyoRevengersOpening-OfficialHigeDandism-7014853.mp3'
        },
    ]
    // '../KawakiWoAmeku-Minami-5862585.mp3',
    // '../KaikaiKitan-Eve.mp3',
    // '../Lost In Paradise (Jujutsu Kaisen Ending) - ALI, AKLO.mp3'

    mounted() {
        if (process.browser) {
            this.Wavesurfer = require('wavesurfer.js');
        }
        this.createWavesuffer()
        this.loadNextSong()
    }

    progress() {
        this.wavesurfer.seekAndCenter(this.data2.progressTimeLine / 100)
    }
    createWavesuffer() {
        this.data2.isloading = true
        this.wavesurfer = this.Wavesurfer.create({
            container: '#hoang',
            waveColor: "#eee",
            progressColor: "#4cb6cb",
            cursorColor: "#4cb6cb",
            cursorWidth: 0,
            barWidth: 4,
            barRadius: 3,
        });
    }

    play() {
        this.isPlay = !this.isPlay
        this.wavesurfer.playPause()
    }
    rePlay() {
        this.isReplay = !this.isReplay
    }
    shuffle() {
        this.isShuffle = !this.isShuffle
    }
    pre_skip() {
        this.wavesurfer.skipBackward(5)
    }
    next_skip() {
        this.wavesurfer.skipForward(5)
    }
    pre_song() {
        if (this.data2.currentTrack > 0) {
            this.data2.currentTrack = this.data2.currentTrack - 1
            this.loadNextSong();
        } else {
            this.wavesurfer.seekAndCenter(0)
        }
    }
    next_song() {
        this.data2.currentTrack = this.data2.currentTrack + 1
        this.loadNextSong();
    }
    mute() {
        this.wavesurfer.setMute(this.muted)
        this.muted = !this.muted;
    }
    convertSecondToMinute(time: number) {
        const second = Math.round(time)
        return second < 10 ? `0${second}` : second
    }

    loadNextSong() {
        this.wavesurfer.destroy()
        this.createWavesuffer()

        const that = this
        const wave = this.wavesurfer
        let currentSong = this.data2.currentTrack

        this.wavesurfer.load(this.myList[currentSong].url);

        wave.on('ready', function () {
            that.data2.currentTime = 0
            that.data2.totalTime = wave.getDuration()
            that.data2.isloading = false

            that.isPlay = true

            // if (this.isPlay) {
            // wave.play();
            // }
        });

        wave.on('error', function (e: any) {
            console.warn(e);
        });

        wave.on('audioprocess', function () {
            if (wave.isPlaying()) {
                that.data2.currentTime = wave.getCurrentTime()
                that.data2.progressTimeLine = that.data2.currentTime / that.data2.totalTime * 100
            }
        });

        this.wavesurfer.on('finish', () => {
            if (that.isReplay) {
                this.loadNextSong();
            } else {
                this.data2.currentTrack = this.data2.currentTrack + 1
                this.loadNextSong();
            }
        });
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
                zoom: 1.4;
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
        padding: 0 30px;

        &-start,
        &-end {
            font-size: 14px;
        }

        &-timeLine {
            height: 20px;
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            margin: 0 20px;
            align-items: center;
            display: flex;

            &-detail {
                color: #4cb6cb;
                width: 500px;
                height: 2px;
            }
        }
    }

    &-end {
        background-color: #5a6a7a;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 450px;
        color: #fff;

        &-volume {
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

        &-replay,
        &-shuffle {
            .active {
                color: orangered !important;
            }
        }
    }
}
</style>
