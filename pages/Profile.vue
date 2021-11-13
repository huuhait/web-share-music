<template>
<div>
    <Header />
    <div class="container">
        <div class="profile-container">
            <div class="profile-container-banner">
                <div class="profile-container-banner-background">
                    <div class="profile-container-banner-avatar">
                        <img src="https://i1.sndcdn.com/avatars-000644511069-jpvo3k-t200x200.jpg" alt="">
                    </div>
                    <div class="profile-container-banner-name">
                        {{user.first_name + '' + user.last_name}}
                    </div>
                    <div class="profile-container-banner-upload">
                        <label for="input-file">
                            <i class="fas fa-camera"></i>
                            Upload header image
                        </label>
                        <input id="input-file" type="file" style="width:200px">
                    </div>
                </div>
            </div>
            <div class="profile-container-nav">
                <div class="profile-container-nav-left">
                    <div class="profile-container-nav-item">
                        <a href="">
                            Popular Tracks
                        </a>
                    </div>
                    <div class="profile-container-nav-item">
                        <a href="">
                            Tracks
                        </a>
                    </div>
                    <div class="profile-container-nav-item">
                        <a href="">
                            Albums
                        </a>
                    </div>
                    <div class="profile-container-nav-item">
                        <a href="">
                            Playlists
                        </a>
                    </div>
                </div>
                <div class="profile-container-nav-right">
                    <div class="profile-container-nav-item">
                        <a href="">
                            <i class="fas fa-share-square"></i>
                            Share
                        </a>
                    </div>
                    <div class="profile-container-nav-item">
                        <a href="">
                            <i class="far fa-edit"></i>
                            Edit
                        </a>
                    </div>
                </div>
            </div>
            <div class="profile-container-content">
                <div class="profile-container-content-left">
                    <div class="profile-container-content-left-img">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACnBAMAAADd8MzuAAAAJ1BMVEUAAADt7e3v7+/u7u7u7u7v7+/V1dXu7u7v7+/v7+/u7u7u7u7t7e1+coy7AAAADXRSTlMAK4/V8v8GlP29LPOQA9OSagAAAOlJREFUeAHt3CVCBQEUBdCLdxIR3QEkIgvAXRuVRMatswESGVkC68It/jQPOfeP20mjf+Yl6R2dbzgTA0myfTzfeJZ2k+7L+YIsb6VnviQ76auBLzJSA89krAaezX0NvJqXbhrOiwkGg8FgMBgMBoP/E9zV+gpgMBgMBr9MmPq3MBgMBoPB3wb+Hvzd+1MwGAwGf+uDwWDwN/IlLcCfmQKDweDKIxcYDHbvBAaDwWB/hjQAg8FgMLjgfS4wGAwGg30LAwaDwWAwGFxW16euktFDDTyT6xp4v6w+V1lFsroabMnVeNPu7UDyBMXh8J9inpNdAAAAAElFTkSuQmCC" alt="">

                    </div>
                    <div class="profile-container-content-left-title">
                        <div>
                            Seems a little quiet over here
                        </div>
                        <a href="profile-container-content-left-title-link">
                            Upload a track to share it with your followers.
                        </a>
                    </div>
                    <div class="profile-container-content-left-button">
                        <a href="">
                            Upload now
                        </a>
                    </div>
                </div>
                <div class="profile-container-content-right">
                    <div class="profile-container-content-right-follow">
                        <div class="profile-container-content-right-follow-item">
                            <div>Folower</div>
                            <div>1</div>
                        </div>
                        <div class="profile-container-content-right-follow-item" style="border-right: 1px solid #f2f2f2; border-left: 1px solid #f2f2f2;">
                            <div>Folowing</div>
                            <div>0</div>
                        </div>
                        <div class="profile-container-content-right-follow-item">
                            <div>Tracks</div>
                            <div>0</div>
                        </div>
                    </div>
                    <div class="profile-container-content-right-info">
                        <div class="profile-container-content-right-info-like">
                            <i class="fas fa-heart"></i>1 like
                        </div>
                        <div class="profile-container-content-right-info-song">
                            <div class="profile-container-content-right-info-song-avatar">
                                <img src="https://i1.sndcdn.com/artworks-000484267635-ttdf7e-t50x50.jpg" alt="">
                            </div>
                            <div class="profile-container-content-right-info-song-text">
                                <div class="profile-container-content-right-info-song-text-name">MU</div>
                                <div class="profile-container-content-right-info-song-text-author">Lullaby</div>
                                <div class="profile-container-content-right-info-song-text-list">
                                    <div class="profile-container-content-right-info-song-text-list-item">
                                        <i class="fas fa-play"></i>9,950
                                    </div>
                                    <div class="profile-container-content-right-info-song-text-list-item">
                                        <i class="fas fa-heart"></i>390

                                    </div>
                                    <div class="profile-container-content-right-info-song-text-list-item">
                                        <i class="fas fa-comment-alt"></i>200
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-container-content-right-info-song">
                            <div class="profile-container-content-right-info-song-avatar">
                                <img src="https://i1.sndcdn.com/artworks-000484267635-ttdf7e-t50x50.jpg" alt="">
                            </div>
                            <div class="profile-container-content-right-info-song-text">
                                <div class="profile-container-content-right-info-song-text-name">MU</div>
                                <div class="profile-container-content-right-info-song-text-author">Lullaby</div>
                                <div class="profile-container-content-right-info-song-text-list">
                                    <div class="profile-container-content-right-info-song-text-list-item">
                                        <i class="fas fa-play"></i>9,950
                                    </div>
                                    <div class="profile-container-content-right-info-song-text-list-item">
                                        <i class="fas fa-heart"></i>390

                                    </div>
                                    <div class="profile-container-content-right-info-song-text-list-item">
                                        <i class="fas fa-comment-alt"></i>200
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer :totalTime='this._data.totalTime' :currentTime='this._data.currentTime' :play='play' :mute='mute' />
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'vue-property-decorator'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import store from "../controllers/store";

@Component({
    components: {
        Header,
        Footer
    },
})

export default class Profile extends Vue {
    user: any = '';

    data() {
      this.user = store.value.user  
      return {user: this.user}
    }
}
</script>

<style lang="less">
.container {
    background-color: #f2f4f8;
    display: flex;
    justify-content: center;

    .profile-container {
        // padding-top: 10px;
        width: 80%;
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-bottom: 90px;
        background-color: #fff;

        &-content {
            display: flex;

            &-left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 50px 30px;
                width: 70%;
                border-right: 1px solid #f2f2f2;

                &-button {
                    background-color: #4cb6cb;
                    border-color: #4cb6cb;
                    color: #fff;
                    padding: 10px;
                    border-radius: 6px;

                    a {
                        text-decoration: none;
                        color: #fff;
                    }
                }

                &-title {
                    text-align: center;
                    line-height: 40px;

                    a {
                        text-decoration: none;
                        color: #38d;
                    }

                    a:hover {
                        color: #000;
                    }
                }

            }

            &-right {
                flex: 1;
                color: #999;
                padding: 10px 30px;

                &-follow {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin: 0 -20px;
                    margin-bottom: 30px;

                    &-item {
                        flex: 1;
                        padding: 0 20px;
                    }
                }

                &-info {
                    &-like {
                        padding: 20px 0;

                        i {
                            margin-right: 10px;
                            color: red;
                        }
                    }

                    &-song {
                        padding: 20px 0;
                        display: flex;

                        &-avatar {
                            padding: 0 10px;
                        }

                        &-text {
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

                                    i {
                                        margin-right: 6px;
                                        zoom: 0.8;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        &-banner {
            &-background {
                width: 100%;
                height: 260px;
                padding: 30px;
                display: flex;
                background: linear-gradient(315deg, rgb(250, 250, 250) 0%, rgb(50, 166, 141) 100%);

                .profile-container-banner-avatar {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    margin-right: 50px;

                    img {
                        border-radius: 500px;
                    }
                }

                .profile-container-banner-name {
                    flex: 1;
                    color: #fff;
                    font-weight: 400;
                    font-size: 30px;
                    line-height: 37px;
                    padding: 4px 7px;
                    display: flex;
                    align-items: center;
                }

                .profile-container-banner-upload {
                    display: flex;
                    height: 30px;

                    label {
                        border: 1px solid #fff;
                        padding: 10px;
                        background-color: #fff;
                        color: #000;
                        display: flex;
                        align-items: center;

                        i {
                            margin-right: 10px;
                            color: #4cb6cb;
                        }
                    }

                    input[type="file"] {
                        display: none;
                    }

                    .custom-file-upload {
                        border: 1px solid #ccc;
                        display: inline-block;
                        padding: 6px 12px;
                        cursor: pointer;
                    }
                }
            }
        }

        &-nav {
            display: flex;
            margin: 0 20px;
            justify-content: space-between;
            border-bottom: 1px solid #f2f2f2;

            &-left,
            &-right {
                display: flex;

                .profile-container-nav-item {
                    padding: 14px 24px;
                    border: none;

                    a {
                        text-decoration: none;
                        color: #000;
                        display: flex;

                        i {
                            margin-right: 6px;
                        }
                    }
                }

                .profile-container-nav-item:hover {
                    border-bottom: 2px solid #000;
                    background-color: #f2f2f2;
                }
            }
        }

    }
}
</style>
