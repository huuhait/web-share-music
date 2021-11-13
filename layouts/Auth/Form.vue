<template>
<div class="login-form">
    <div class="title">
        {{ title }}
    </div>
    <form @submit="event => $emit('submit', event)">
        <slot />
    </form>
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop
} from 'vue-property-decorator';

@Component({})
export default class Form extends Vue {
    @Prop() readonly title!: string;
}
</script>

<style lang="less">
.login-form {
    margin: 0 auto;
    width: 450px;

    .title {
        margin-bottom: 30px;
        display: inline-block;
        line-height: 36px;
        font-size: 24px;
        font-weight: 500;
        color: #6039de;
        border-bottom: solid 2px #6039de;
    }

    .forgot {
        font-size: 14px;
    }
}
</style>
