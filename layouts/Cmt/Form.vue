<template>
<div v-if="type === 'reply'">
    <form v-if="indexCmt === indexReply " class="comment-form-cmt reply" @submit="event => $emit('submit', event)">
        <slot />
    </form>
</div>
<div v-else style="width: 100%; display: flex;">
    <form class="comment-form-cmt" @submit="event => $emit('submit', event)">
        <slot />
    </form>
</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Mixins
} from 'vue-property-decorator';
import MusicMixin from '~/mixins/music';

@Component({})
export default class Form_cmt extends Mixins(MusicMixin) {
    @Prop() type: string
    @Prop() replyCmt: any
    @Prop() indexCmt: number
    @Prop() indexReply: number
}
</script>

<style lang="less">
.comment-form-cmt {
    display: flex;
    // padding: 10px 0;
    width: 100%;

    .comment-form-avatar {
        margin-right: 10px;
        display: flex;
        align-items: center;

        img {
            border-radius: 500px;
            width: 40px;
            height: 40px;
            object-fit: cover;
        }
    }

    .comment-form-detail {
        flex: 1;
        display: flex;
        margin: auto;

        &-top {
            padding-bottom: 1px;

            &-username {
                font-size: 16px;
                color: rgb(22, 24, 35);
                font-weight: 500;
            }
        }

        &-center {
            font-size: 16px;
            line-height: 22px;
            color: rgb(18, 18, 18);
            padding-right: 30px;
        }

        &-bot {
            display: flex;
            margin-top: 6px;

            &-time {
                font-size: 14px;
            }

            &-reply {
                margin-left: 24px;
                font-size: 15px;
                cursor: pointer;
            }
        }

        &-react {
            font-size: 12px;
            min-width: 20px;
            text-align: center;

            &-number {
                padding-bottom: 20px;
                margin-top: -18px;
            }
        }

    }

    button {
        background-color: #4cb6cb;
        color: #fff;
        outline: none;
        padding: 4px 14px;
        border: none;
        border-radius: 10px;
        margin: 6px 10px;
    }
}

.reply {
    padding-left: 50px;

    .comment-form-avatar {
        margin-right: 10px;

        img {
            border-radius: 500px;
            width: 30px;
            height: 30px;
            object-fit: cover;
        }
    }
}
</style>
