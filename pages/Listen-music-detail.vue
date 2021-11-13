<template>
<div>
    <Header />
    <div class="container">
        <div class="container-listen">
            <div class="container-listen-main">
                <div class="container-listen-main-left">
                    <div class="container-listen-main-left-top">
                        <div class="container-listen-main-left-top-play">
                            <fa @click='rePlay' icon="pause" v-if="isPlay"></fa>
                            <fa @click='rePlay' icon="play" v-else></fa>
                        </div>
                        <div class="container-listen-main-left-top-name">
                            <div class="container-listen-main-left-top-name-song">『Eve - 呪術廻戦 / Kaikai Kitan』Jujutsu Kaisen OP full</div>
                            <div class="container-listen-main-left-top-name-author">unDer</div>
                        </div>
                        <div class="container-listen-main-left-top-info">
                            <div class="container-listen-main-left-top-info-time">1 year ago</div>
                            <div class="container-listen-main-left-top-info-tag"># Rock</div>
                        </div>
                    </div>
                    <div class="container-listen-main-left-bot">
                        <div v-if="isloading" style="color: #fff; font-size: 40px;">Loading ... </div>
                        <div id="hoang">
                        </div>
                        <!-- <button @click="pre_skip" style="padding: 20px">pre_skip</button>
                        <button @click="next_skip" style="padding: 20px">next_skip</button>
                        <button @click="mute" style="padding: 20px">mute</button> -->
                    </div>
                </div>
                <div class="container-listen-main-right">
                    <img src="https://i1.sndcdn.com/artworks-cvw9KDLdyuKyMj8N-W8QGtA-t500x500.jpg" alt="">
                </div>
            </div>
            <div class="container-listen-content">
                <div class="container-listen-content-left">
                    <div class="comment-form">
                        <div class="comment-form-avatar">
                            <img src="https://i1.sndcdn.com/avatars-000644511069-jpvo3k-t200x200.jpg" alt="">
                        </div>
                        <div class="comment-form-input">
                            <input type="text" placeholder="Write a comment">
                        </div>
                    </div>
                    <div class="comment-form-react">
                        <div class="comment-form-react-left">
                            <div class="comment-form-item-left"><a href="">
                                    <fa icon="heart"></fa>Like
                                </a></div>
                            <div class="comment-form-item-left"><a href="">
                                    <fa icon="retweet"></fa>Report
                                </a></div>
                            <div class="comment-form-item-left"><a href="">
                                    <fa icon="share-square"></fa>Share
                                </a></div>
                            <!-- <div class="comment-form-item-left"><a href="">
                                    <i class="fas fa-link"></i> Copy link
                                </a></div>
                            <div class="comment-form-item-left"><a href="">
                                    <i class="fas fa-ellipsis-h"></i>More
                                </a></div> -->
                        </div>
                        <div class="comment-form-react-right">
                            <div class="comment-form-item-right">
                                <fa icon="play"></fa>9,950
                            </div>
                            <div class="comment-form-item-right">
                                <fa icon="heart"></fa>390
                            </div>
                            <div class="comment-form-item-right">
                                <fa icon="retweet"></fa>99999
                            </div>
                        </div>

                    </div>
                    <div class="comment-detail">
                        <div class="comment-detail-left">
                            <div class="comment-detail-left-author">
                                <div class="comment-detail-left-author-img">
                                    <img src="https://i1.sndcdn.com/avatars-rXY5Cp0AzT6vHEcF-4i0vBA-t120x120.jpg" alt="">
                                </div>
                                <div class="comment-detail-left-author-name">
                                    Eva
                                </div>
                                <div class="comment-detail-left-author-follow">
                                    <div class="comment-detail-left-author-follow-user">
                                        <fa icon="users"></fa> 99.999
                                    </div>
                                    <div class="comment-detail-left-author-follow-button">
                                        <fa icon="user-plus"></fa> Follow
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="comment-detail-right">
                            <div class="comment">
                                <div class="comment-count">
                                    <fa icon="comment-alt"></fa>3.420 comments
                                </div>
                                <div class="comment-list">
                                    <div class="comment-list-item">
                                        <div class="comment-list-item-avatar">
                                            <img src="https://i1.sndcdn.com/avatars-28i9bpl5bABTzuP4-R5RPIQ-t500x500.jpg" alt="">
                                        </div>
                                        <div class="comment-list-item-detail">
                                            <div class="comment-list-item-detail-top">
                                                <div class="comment-list-item-detail-top-username">Hoang Dang</div>
                                            </div>
                                            <div class="comment-list-item-detail-bot">
                                                Hoang dep trai vl
                                            </div>
                                        </div>
                                        <div class="comment-list-item-detail-time">1 hours ago</div>
                                    </div>
                                    <div class="comment-list-item">
                                        <div class="comment-list-item-avatar">
                                            <img src="https://i1.sndcdn.com/avatars-28i9bpl5bABTzuP4-R5RPIQ-t500x500.jpg" alt="">
                                        </div>
                                        <div class="comment-list-item-detail">
                                            <div class="comment-list-item-detail-top">
                                                <div class="comment-list-item-detail-top-username">Hoang Dang</div>
                                            </div>
                                            <div class="comment-list-item-detail-bot">
                                                Hoang dep trai vl
                                            </div>
                                        </div>
                                        <div class="comment-list-item-detail-time">1 hours ago</div>
                                    </div>
                                    <div class="comment-list-item">
                                        <div class="comment-list-item-avatar">
                                            <img src="https://i1.sndcdn.com/avatars-28i9bpl5bABTzuP4-R5RPIQ-t500x500.jpg" alt="">
                                        </div>
                                        <div class="comment-list-item-detail">
                                            <div class="comment-list-item-detail-top">
                                                <div class="comment-list-item-detail-top-username">Hoang Dang</div>
                                            </div>
                                            <div class="comment-list-item-detail-bot">
                                                Hoang dep trai vl
                                            </div>
                                        </div>
                                        <div class="comment-list-item-detail-time">1 hours ago</div>
                                    </div>
                                    <div class="comment-list-item">
                                        <div class="comment-list-item-avatar">
                                            <img src="https://i1.sndcdn.com/avatars-28i9bpl5bABTzuP4-R5RPIQ-t500x500.jpg" alt="">
                                        </div>
                                        <div class="comment-list-item-detail">
                                            <div class="comment-list-item-detail-top">
                                                <div class="comment-list-item-detail-top-username">Hoang Dang</div>
                                            </div>
                                            <div class="comment-list-item-detail-bot">
                                                Hoang dep trai vl
                                            </div>
                                        </div>
                                        <div class="comment-list-item-detail-time">1 hours ago</div>
                                    </div>
                                    <div class="comment-list-item">
                                        <div class="comment-list-item-avatar">
                                            <img src="https://i1.sndcdn.com/avatars-28i9bpl5bABTzuP4-R5RPIQ-t500x500.jpg" alt="">
                                        </div>
                                        <div class="comment-list-item-detail">
                                            <div class="comment-list-item-detail-top">
                                                <div class="comment-list-item-detail-top-username">Hoang Dang</div>
                                            </div>
                                            <div class="comment-list-item-detail-bot">
                                                Hoang dep trai vl
                                            </div>
                                        </div>
                                        <div class="comment-list-item-detail-time">1 hours ago</div>
                                    </div>
                                    <div class="comment-list-item">
                                        <div class="comment-list-item-avatar">
                                            <img src="https://i1.sndcdn.com/avatars-28i9bpl5bABTzuP4-R5RPIQ-t500x500.jpg" alt="">
                                        </div>
                                        <div class="comment-list-item-detail">
                                            <div class="comment-list-item-detail-top">
                                                <div class="comment-list-item-detail-top-username">Hoang Dang</div>
                                            </div>
                                            <div class="comment-list-item-detail-bot">
                                                Hoang dep trai vl
                                            </div>
                                        </div>
                                        <div class="comment-list-item-detail-time">1 hours ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-listen-content-right">
                    <div class="container-listen-content-right-title">
                        <fa icon="soundcloud"></fa> Related song
                    </div>
                   <list-song2/>
                </div>
            </div>
        </div>
    </div>
    <Footer :totalTime='this._data.totalTime' :currentTime='this._data.currentTime' :play='play' :mute='mute' muted='muted' />
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ListSong2 from '../components/Song2/ListSong2.vue'

@Component({
    components: {
        Header,
        Footer,
        ListSong2,
    },
})

export default class Listen_music_detail extends Vue {
    private _data: any
    Wavesurfer: any
    wavesurfer: any
    muted: boolean = true
    currentTrack: number = 0
    isPlay: boolean = true
    isReplay: boolean = true
    myList: String[] = [
        '../KawakiWoAmeku-Minami-5862585.mp3',
        '../KaikaiKitan-Eve.mp3',
        '../IroKousuiHorimiyaOpening-YohKamiyama-7026438.mp3',
        '../CryBabyTokyoRevengersOpening-OfficialHigeDandism-7014853.mp3',
        '../Lost In Paradise (Jujutsu Kaisen Ending) - ALI, AKLO.mp3'
    ]
    data() {
        return {
            totalTime: 0,
            currentTime: 0,
            isloading: true
        }
    }
    mounted() {
        if (process.browser) {
            this.Wavesurfer = require('wavesurfer.js');
        }
        this.createWavesuffer()
        this.loadNextSong()
    }

    createWavesuffer() {
        this.wavesurfer = this.Wavesurfer.create({
            container: '#hoang',
            waveColor: "#eee",
            progressColor: "#4cb6cb",
            cursorColor: "#4cb6cb",
            cursorWidth: 0,
            barWidth: 3,
            barRadius: 3,
            normalize: true,
            partialRender: true,
            responsive: true,
            hideCursor: true
        });
    }

    play() {
        this.wavesurfer.playPause()
        this.isPlay = !this.isPlay
    }
    rePlay() {
        const wave = this.wavesurfer
        wave.on('finish', () => {
            wave.play([0])
        });
    }

    pre_skip() {
        this.wavesurfer.skipBackward(5)
    }

    next_skip() {
        this.wavesurfer.skipForward(5)
    }

    mute() {
        this.wavesurfer.setMute(this.muted)
        this.muted = !this.muted;
    }

    loadNextSong() {
        this.wavesurfer.destroy()
        this.createWavesuffer()

        const currentSong = this.currentTrack
        const that = this
        this.wavesurfer.load(this.myList[currentSong]);
        this.wavesurfer.on('finish', () => {
            if (that.isReplay) {
                wave.play([0])
            } else {
                this.loadNextSong();
            }
        });

        const wave = this.wavesurfer

        // wave.on('loading', function (x) {
        //     console.log(x);
        // });
        wave.on('ready', function () {
            wave.play();
            console.log('aaa')
        });
        this._data.isloading = false
        wave.on('error', function (e: any) {
            console.warn(e);
        });

        wave.on('audioprocess', function () {
            if (wave.isPlaying()) {
                that._data.totalTime = Math.round(wave.getDuration())
                that._data.currentTime = Math.round(wave.getCurrentTime())
            }
        });

        this.currentTrack++
    }
}
</script>

<style lang="less">
.container {
    background-color: #f2f4f8;
    display: flex;
    justify-content: center;
    flex-direction: row;

    .container-listen {
        width: 1200px;
        background-color: #fff;

        &-main {
            padding: 30px 30px;
            width: 100%;
            display: flex;
            background-color: #625e51;

            &-left {
                width: 70%;
                display: flex;
                flex-direction: column;

                &-top {
                    display: flex;
                    height: 120px;

                    &-play {
                        border-radius: 50%;
                        border-color: #4cb6cb;
                        background-color: #4cb6cb;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        height: 60px;
                        width: 60px;

                        svg {
                            color: #fff;
                            zoom: 1.4;
                        }
                    }

                    &-name {
                        margin-left: 20px;
                        flex: 1;
                        color: #fff;

                        &-song {
                            font-size: 24px;
                            width: 70%;
                        }

                        &-author {
                            font-size: 16px;
                        }
                    }

                    &-info {
                        padding: 20px;
                        line-height: 30px;
                        color: #fff;
                        margin-right: 20px;

                        &-tag {
                            height: 30px;
                            line-height: 30px;
                            text-align: center;
                            border-radius: 20px;
                            background-color: #999;
                            margin-top: 20px;
                        }
                    }
                }

                &-bot {
                    padding-right: 40px;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    justify-content: center;

                    #hoang {
                        height: 128px;
                    }
                }
            }

            &-right {
                flex: 1;

                img {
                    width: 340px;
                    border-radius: 50%;
                }
            }
        }

        &-content {
            display: flex;
            padding: 30px;

            &-right {
                flex: 1;
                padding-left: 10px;

                &-title {
                    color: #999;
                    margin-bottom: 10px;

                    svg {
                        margin-right: 6px;
                        padding-left: 10px;
                    }
                }

                .profile-container-content-right-info-song {
                    padding: 10px 0;
                    display: flex;

                    &-avatar {
                        padding: 0 10px;
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

                                svg {
                                    margin-right: 6px;
                                    zoom: 0.8;
                                }
                            }
                        }
                    }
                }
            }

            &-left {
                width: 70%;
                padding-right: 30px;
                border-right: 1px solid #f2f2f2;

                .comment-form {
                    border: 1px solid #e5e5e5;
                    display: flex;
                    height: 40px;
                    margin-bottom: 16px;
                    border-radius: 4px;

                    &-avatar {
                        img {
                            width: 40px;
                        }
                    }

                    &-input {
                        background-color: #f2f4f8;
                        flex: 1;
                        display: flex;
                        align-items: center;
                        padding: 0 10px;
                        height: 40px;

                        input {
                            padding: 0 8px;
                            height: 30px;
                            border: 1px solid #e5e5e5;
                            outline: none;
                            border-radius: 4px;
                            width: 100%;
                        }
                    }
                }

                .comment-detail {
                    margin-top: 20px;
                    display: flex;

                    &-left {
                        width: 200px;
                        padding-right: 20px;

                        &-author {
                            &-img {
                                img {
                                    width: 120px;
                                    border-radius: 500px;
                                }
                            }

                            &-name {
                                font-size: 16px;
                                color: #333 !important;
                                line-height: 30px;
                            }

                            &-follow {
                                line-height: 30px;
                                color: #999;

                                &-user {
                                    font-size: 14px;

                                    svg {
                                        margin-right: 10px;
                                    }
                                }

                                &-button {
                                    background-color: #4cb6cb;
                                    padding: 0 10px;
                                    border-radius: 8px;
                                    width: 80px;
                                    font-size: 12px;
                                    color: #fff;

                                    svg {
                                        margin-right: 6px;
                                    }
                                }
                            }
                        }
                    }

                    &-right {
                        flex: 1;
                        color: #999;

                        .comment {
                            &-count {
                                margin-bottom: 20px;

                                svg {
                                    margin-right: 10px;
                                }
                            }

                            &-list {
                                &-item {
                                    display: flex;
                                    padding: 10px 0;

                                    &-avatar {
                                        margin-right: 10px;

                                        img {
                                            border-radius: 500px;
                                            width: 50px;
                                        }
                                    }

                                    &-detail {
                                        flex: 1;

                                        &-top {
                                            padding-bottom: 8px;

                                            &-username {
                                                font-size: 16px;
                                            }
                                        }

                                        &-time {
                                            font-size: 12px;
                                            margin-right: 20px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .comment-form-react {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #f2f2f2;
                    padding-bottom: 10px;

                    &-left,
                    &-right {
                        display: flex;
                        align-items: center;
                        color: #333 !important;

                        .comment-form-item-right {
                            margin-left: 16px;
                            color: #333 !important;

                            svg {
                                margin-right: 6px;
                            }
                        }

                        .comment-form-item-left {
                            padding: 4px 10px;
                            margin-right: 10px;
                            border: 1px solid #e5e5e5;
                            border-radius: 4px;

                            a {
                                text-decoration: none;
                                color: #000;

                                svg {
                                    margin-right: 6px;
                                }
                            }
                        }

                    }
                }
            }

        }
    }
}
</style>
