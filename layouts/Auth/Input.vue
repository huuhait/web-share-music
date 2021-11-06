<template>
<div class="auth-input">
    <div v-if="label" class="h-8 leading-9">
        {{ label }} <span v-if="required" class="auth-input-label-required"></span>
    </div>
    <input v-if="type == 'password'" :value="value" :type="type" :placeholder="placeholder" @input="event => $emit('input', event.target.value)" class="min-w-full" />
    <input v-else :value="value" :type="type" :placeholder="placeholder" @input="event => $emit('input',  event.target.value)" class="min-w-full" />
    <div v-if="error" class="auth-input-error">{{ error }}</div>
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop
} from 'vue-property-decorator';

@Component({})
export default class Input extends Vue {
    @Prop() readonly value!: string;
    @Prop() readonly type!: string;
    @Prop() readonly label!: string;
    @Prop() readonly placeholder!: string;
    @Prop() readonly required!: boolean;
    @Prop() readonly error!: string;
}
</script>

<style lang="less">
.auth-input {
    &-label {
        &-required {
            color: rgb(235, 62, 62);
        }
    }

    &-error {
        height: 20px;
        line-height: 20px;
        margin-left: 8px;
        color: rgb(235, 62, 62);
    }

    input {
        padding: 6px 14px;
        background-color: #e8f0fe;
    }
}
</style>
