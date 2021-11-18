<template>
<div>
    <Header />
    <!-- <div>
        <div>
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
                            </div>
                        </div>
                        <div class="container-listen-main-right">
                            <img src="https://i1.sndcdn.com/artworks-cvw9KDLdyuKyMj8N-W8QGtA-t500x500.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <Nuxt/>
    <Footer />
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'nuxt-property-decorator'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import store from "../controllers/store";

@Component({
    components: {
        Header,
        Footer
    },
})

export default class Music extends Vue {
   
    data2: {
        isMusicDetailPage: false
    }
    head() {
        return {
            title: 'Trang chủ',
        }
    }
    isPlay() {

    }
    rePlay() {

    }
    add(bool: any) {
        this.data2.isMusicDetailPage = bool
        console.log(this.data2.isMusicDetailPage)
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
