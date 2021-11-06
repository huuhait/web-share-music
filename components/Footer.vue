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
            <a class="jp-play" style="display: inline-block">
                <fa icon="play"></fa>

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
    <div class="footer-progress">Bubble</div>
    <div class="footer-time">
        <div class="footer-time-start">00:00</div>
        <div class="footer-time-end">00:00</div>
        <div class="footer-volume">
            <fa icon="volume-up"></fa>

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
    Component
} from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
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
