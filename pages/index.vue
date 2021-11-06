<template>
<div>
    <Header />
    <div class="container">
        <div class="container-title">
            <h2 class="container-title-left">
                Discover
                <span class="musicbar" style="width: 20px; height: 20px">
                    <span class="bar1 a1 bg-primary lter"></span>
                    <span class="bar2 a2 bg-info lt"></span>
                    <span class="bar3 a3 bg-success"></span>
                    <span class="bar4 a4 bg-warning dk"></span>
                    <span class="bar5 a5 bg-danger dker"></span>
                </span>
            </h2>
            <a href="#" class="container-title-right btn-sync" data-toggle="class:fa-spin"><i class="fas fa-sync i-lg inline" id="refresh"> </i></a>
        </div>
        <list-songs />
        <div class="container-new-top">
    <div class="new-song">
     <div class="container-title">
      <h2 class="container-title-left">New Songs</h2>
     </div>
     <list-album />

    </div>
    <div class="top-song">
     <div class="container-title">
      <h2 class="container-title-left">Top Songs</h2>
     </div>
     <list-album-2/>
    </div>
   </div>
    </div>
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
import ListSongs from '../components/Song/ListSongs.vue'
import ListAlbum from '../components/Album/ListAlbum.vue'
import ListAlbum2 from '../components/Album2/ListAlbum2.vue'

@Component({
    components: {
        ListSongs,
        Header,
        ListAlbum,
        ListAlbum2
    },
})
export default class Index extends Vue {

    head() {
        return {
            title: "Trang chủ"
        };
        
    }
}
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;

    .container {
        padding: 0 30px;
        background-color: #f2f4f8;
        margin-bottom: 64px;

        .container-title {
            display: flex;
            justify-content: space-between;
            position: relative;

            &-left {
                font-weight: 300;
                font-size: 24px;
                color: #788188;
                display: block;
                margin: 20px 0 15px 0;

                h2 {
                    font-family: inherit;

                    .musicbar {
                        position: absolute;
                        width: 20px;
                        height: 20px;
                        margin-left: 20px;

                        span {
                            position: absolute;
                            bottom: 0;
                            width: 15%;
                            text-indent: -9999px;
                        }

                        .bar1 {
                            left: 0%;
                            height: 60%;
                            background-color: #797fb4;
                        }

                        .bar2 {
                            left: 20%;
                            height: 45%;
                            background-color: #62bcce;
                        }

                        .bar3 {
                            left: 40%;
                            height: 90%;
                            background-color: #1ab667;
                        }

                        .bar4 {
                            left: 60%;
                            height: 60%;
                            background-color: #fcd417;
                        }

                        .bar5 {
                            left: 80%;
                            height: 40%;
                            background-color: #f21b1b;
                        }

                        .a1 {
                            -webkit-animation: movingbar1 1s infinite alternate both;
                            -moz-animation: movingbar1 1s infinite alternate both;
                            animation: movingbar1 1s infinite alternate both;
                        }

                        .a2 {
                            -webkit-animation: movingbar2 1.5s infinite alternate both;
                            -moz-animation: movingbar2 1.5s infinite alternate both;
                            animation: movingbar2 1.5s infinite alternate both;
                        }

                        .a3 {
                            -webkit-animation: movingbar3 1.2s infinite alternate both;
                            -moz-animation: movingbar3 1.2s infinite alternate both;
                            animation: movingbar3 1.2s infinite alternate both;
                        }

                        .a4 {
                            -webkit-animation: movingbar4 1.1s infinite alternate both;
                            -moz-animation: movingbar4 1.1s infinite alternate both;
                            animation: movingbar4 1.1s infinite alternate both;
                        }

                        .a5 {
                            -webkit-animation: movingbar5 1.2s infinite alternate both;
                            -moz-animation: movingbar5 1.2s infinite alternate both;
                            animation: movingbar5 1.2s infinite alternate both;
                        }

                        @-webkit-keyframes movingbar1 {
                            0% {
                                height: 32%;
                            }

                            25% {
                                height: 80%;
                            }

                            50% {
                                height: 56%;
                            }

                            75% {
                                height: 100%;
                            }

                            100% {
                                height: 84%;
                            }
                        }

                        @-moz-keyframes movingbar1 {
                            0% {
                                height: 32%;
                            }

                            25% {
                                height: 80%;
                            }

                            50% {
                                height: 56%;
                            }

                            75% {
                                height: 100%;
                            }

                            100% {
                                height: 84%;
                            }
                        }

                        @keyframes movingbar1 {
                            0% {
                                height: 32%;
                            }

                            25% {
                                height: 80%;
                            }

                            50% {
                                height: 56%;
                            }

                            75% {
                                height: 100%;
                            }

                            100% {
                                height: 84%;
                            }
                        }

                        @-webkit-keyframes movingbar2 {
                            0% {
                                height: 20%;
                            }

                            25% {
                                height: 58%;
                            }

                            50% {
                                height: 90%;
                            }

                            75% {
                                height: 74%;
                            }

                            100% {
                                height: 53%;
                            }
                        }

                        @-moz-keyframes movingbar2 {
                            0% {
                                height: 20%;
                            }

                            25% {
                                height: 58%;
                            }

                            50% {
                                height: 90%;
                            }

                            75% {
                                height: 74%;
                            }

                            100% {
                                height: 53%;
                            }
                        }

                        @keyframes movingbar2 {
                            0% {
                                height: 20%;
                            }

                            25% {
                                height: 58%;
                            }

                            50% {
                                height: 90%;
                            }

                            75% {
                                height: 74%;
                            }

                            100% {
                                height: 53%;
                            }
                        }

                        @-webkit-keyframes movingbar3 {
                            0% {
                                height: 34%;
                            }

                            25% {
                                height: 69%;
                            }

                            50% {
                                height: 100%;
                            }

                            75% {
                                height: 82%;
                            }

                            100% {
                                height: 41%;
                            }
                        }

                        @-moz-keyframes movingbar3 {
                            0% {
                                height: 34%;
                            }

                            25% {
                                height: 69%;
                            }

                            50% {
                                height: 100%;
                            }

                            75% {
                                height: 82%;
                            }

                            100% {
                                height: 41%;
                            }
                        }

                        @keyframes movingbar3 {
                            0% {
                                height: 34%;
                            }

                            25% {
                                height: 69%;
                            }

                            50% {
                                height: 100%;
                            }

                            75% {
                                height: 82%;
                            }

                            100% {
                                height: 41%;
                            }
                        }

                        @-webkit-keyframes movingbar4 {
                            0% {
                                height: 80%;
                            }

                            25% {
                                height: 49%;
                            }

                            50% {
                                height: 59%;
                            }

                            75% {
                                height: 82%;
                            }

                            100% {
                                height: 65%;
                            }
                        }

                        @-moz-keyframes movingbar4 {
                            0% {
                                height: 80%;
                            }

                            25% {
                                height: 49%;
                            }

                            50% {
                                height: 59%;
                            }

                            75% {
                                height: 82%;
                            }

                            100% {
                                height: 65%;
                            }
                        }

                        @keyframes movingbar4 {
                            0% {
                                height: 80%;
                            }

                            25% {
                                height: 49%;
                            }

                            50% {
                                height: 59%;
                            }

                            75% {
                                height: 82%;
                            }

                            100% {
                                height: 65%;
                            }
                        }

                        @-webkit-keyframes movingbar5 {
                            0% {
                                height: 50%;
                            }

                            25% {
                                height: 30%;
                            }

                            50% {
                                height: 90%;
                            }

                            75% {
                                height: 50%;
                            }

                            100% {
                                height: 65%;
                            }
                        }

                        @-moz-keyframes movingbar5 {
                            0% {
                                height: 50%;
                            }

                            25% {
                                height: 30%;
                            }

                            50% {
                                height: 90%;
                            }

                            75% {
                                height: 50%;
                            }

                            100% {
                                height: 65%;
                            }
                        }

                        @keyframes movingbar5 {
                            0% {
                                height: 50%;
                            }

                            25% {
                                height: 30%;
                            }

                            50% {
                                height: 90%;
                            }

                            75% {
                                height: 50%;
                            }

                            100% {
                                height: 65%;
                            }
                        }
                    }
                }
            }

            &-right {
                color: #939aa0;
                display: flex;
                align-items: center;
                text-decoration: none;

                svg {
                    zoom: 1.2;
                }
            }
        }
    }
}
</style>
