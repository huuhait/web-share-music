<template>
<div>
    <div class="container block">
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
                <list-song-2 />
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Prop
} from 'nuxt-property-decorator'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ListSongs from '../components/Song/ListSongs.vue'
import ListAlbum from '../components/Album/ListAlbum.vue'
import ListSong2 from '../components/Song2/ListSong2.vue'

@Component({
    components: {
        ListSongs,
        Header,
        ListAlbum,
        ListSong2,
        Footer
    },
})

export default class Index extends Vue {
    layout(context) {
        return 'music'
    }
    @Prop() isMusicDetailPage: any
    head() {
        return {
            title: 'Trang chu',
        }
    }
    add2() {
        this.$nuxt.$emit('add', true);
    }

}
</script>

<style lang="less" scoped>
.container {
    padding: 0 30px;
    background-color: #f2f4f8;
    margin-bottom: 64px;
}

.container-listen-main {
    display: none !important;
}

.container-title {
    display: flex;
    justify-content: space-between;
    position: relative;
}

.container-title-left {
    font-weight: 300;
    font-size: 24px;
    color: #788188;
    display: block;
    margin: 20px 0 15px 0;

}

.container-title-right {
    color: #939aa0;
    display: flex;
    align-items: center;
    text-decoration: none;
}

.container-title-right i {
    zoom: 1.2;
}

h2 {
    font-family: inherit;
}

.active1 {
    background-color: #62bcce;
}
</style>
