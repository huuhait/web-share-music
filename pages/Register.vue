<template>
<div class="login-block">
    <div class="login-main">
        <div class="login-another">
            <p class="register">
                Don't have an account yet? <a href="">Create one</a>
            </p>
        </div>
        <AuthForm title="Đăng ký" @submit.prevent="register">
            <AuthInput v-model="first_name" label="First name" type="text" :required="true" />
            <AuthInput v-model="last_name" label="Last name" type="text" :required="true" />
            <AuthInput v-model="email" label="Email" type="email" :required="true" />
            <AuthInput v-model="password" label="Password" type="password" :required="true" />
            <div class="auth-form-footer">
                <div class="form-block">
                    <input class="form-control btn" type="submit" name="submit" value="Sign In" />
                </div>
            </div>
        </AuthForm>
        <AuthForm title="Xác nhậm email" @submit.prevent="confirmEmail">
            <AuthInput v-model="email" label="Email" type="email" :required="true" />
            <AuthInput v-model="code" label="Code" :required="true" />
            <div class="auth-form-footer">
                <div class="form-block">
                    <input class="form-control btn" type="submit" name="submit" value="Sign In" />
                </div>
            </div>
        </AuthForm>
    </div>
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
export default class Register extends Mixins(AuthMixin) {}
</script>

<style lang="less">
html {
    background: url('../static/background_login.jpg') no-repeat;
    background-size: cover;
    font-family: Arial, Helvetica, sans-serif;
}

.login-block {
    position: absolute;
    right: 0;
    padding: 60px;
    width: 50%;
    height: 100%;
    background-color: #fff;

    a {
        text-decoration: none;
        color: rgb(119, 85, 229);
    }

    a:hover {
        text-decoration: underline;
    }

    .login-main {
        z-index: 2;

        .login-another {
            .register {
                margin-bottom: 80px;
                text-align: right;
                font-size: 14px;
            }
        }
    }
}
</style>
