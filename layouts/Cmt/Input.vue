<template>
<div class="form-block-cmt">
    <input
        :value="value" 
        :type="type" 
        :placeholder="placeholder" 
        class="form-control" 
        @input="event => $emit('input',  event.target.value)" 
    />
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component,
    Prop
} from 'vue-property-decorator';

@Component({})
export default class Input_cmt extends Vue {
    @Prop() readonly value!: string;
    @Prop() readonly type!: string;
    @Prop() readonly label!: string;
    @Prop() readonly placeholder!: string;
    @Prop() readonly required!: boolean;
    @Prop() readonly error!: string;
}
</script>

<style lang="less">
.form-block-cmt {
    flex: 1;
    &-label {
        margin-bottom: 8px;
        display: inline-block;
        font-size: 16px;
    }
    .error {
        color: red;
        margin-top: 8px;
    }

    .form-control {
        margin: 6px 10px 6px 1px;
        padding: 0 12px;
        width: 100%;
        height: 36px;
        display: block;
        background-color: #f5f7f9;
        border: 1px solid #fff;
        border-radius: 5px;
        transition: all 0.3s;
        margin-right: 10px;
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
