<template>
<div class="form-block">
    <div v-if="label">
        {{ label }} <span v-if="required"></span>
    </div>
    <input 
        v-if="type == 'password'"
        :value="value" :type="type"
        :placeholder="placeholder" 
        @input="event => $emit('input', event.target.value)" 
        class="form-control" 
    />
    <input v-else 
        :value="value" 
        :type="type" 
        :placeholder="placeholder" 
        @input="event => $emit('input',  event.target.value)" 
        class="form-control" />
    <div v-if="error" >{{ error }}</div>
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
.form-block {
    margin: 18px 0;

    label {
        margin-bottom: 8px;
        display: inline-block;
        font-size: 16px;
    }

    .form-control {
        padding: 0 12px;
        width: 100%;
        height: 46px;
        display: block;
        background-color: #f5f7f9;
        border: 1px solid #fff;
        border-radius: 5px;
        transition: all 0.3s;
    }

    .form-control:hover {
        border: 1px solid #6039de;
    }

    .form-control:focus {
        border: 1px solid #6039de;
        outline: none;
    }

    .btn {
        margin-top: 40px;
        background-color: #7755e5;
        border: none;
        color: #fff;
        transition: all 0.3s;
    }

    .btn:hover {
        border: none;
        cursor: pointer;
        background-color: rgba(119, 85, 229, 0.85);
    }
}
</style>
