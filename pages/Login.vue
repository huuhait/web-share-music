<template>
<div class="container mt-px">
    <AuthForm title="Đăng nhập" @submit.prevent="login">
        <AuthInput label="Email" v-model="email" :required="true" />
        <AuthInput v-model="password" label="Password" type="password" :required="true" />
        <div class="auth-form-remember">
            <div class="auth-form-remember-input">
                <input type='checkbox' class="mr-2" /> Remember me
            </div>
            <router-link to="/forgot_password" class="no-underline">Quên mật khẩu?</router-link>
        </div>
        <div class="auth-form-footer">
            <button class="flex m-auto auth-form-footer-button ">Đăng nhập</button>
        </div>
    </AuthForm>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Mixins
} from 'vue-property-decorator'

import {
    AuthMixin
} from '../mixins/auth'

@Component({
    components: {},
})
export default class Login extends Mixins(AuthMixin) {}
</script>

<style lang="less">
.auth-form-remember {
    display: flex;
    justify-content: space-between;

    &-input {
        display: flex;
        align-items: center;
    }

    a {
        color: rgb(82, 144, 238);
        text-decoration: none;
        cursor: pointer;
    }
}
.auth-form-footer {
    &-button {
        background-color: rgb(82, 144, 238);
        color: #fff;
        padding: 8px auto;
        width: 100%;
        border-radius: 10px;
        line-height: 40px;
        text-align: center;
    }
}

</style>
