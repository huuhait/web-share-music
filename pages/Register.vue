<template>
<div class="login-block">
    <div class="login-img"><img src="/background_login.jpg" alt=""></div>
    <div class="login-main">
        <AuthForm title="Register" @submit.prevent="register">
            <AuthInput v-model="first_name" label="First name" type="text" :required="true" />
            <AuthInput v-model="last_name" label="Last name" type="text" :required="true" />
            <AuthInput v-model="email" label="Email" type="email" :required="true" :error="email_error"/>
            <AuthInput v-model="password" label="Password" type="password" :required="true" />
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
    Mixins
} from 'vue-property-decorator'

import {
    AuthMixin
} from '../mixins/auth'

@Component({
    middleware: "guest",
    components: {},
})
export default class Register extends Mixins(AuthMixin) {}
</script>

<style lang="less">

.login-block {
    position: fixed;
    inset: 0;
    background-color: #fff;
    display: flex;

    .login-img {
        width: 50%;    
        height: 100%;
        .img {
            height: 100%;
        }
    }

    a {
        text-decoration: none;
        color: rgb(119, 85, 229);
    }

    a:hover {
        text-decoration: underline;
    }

    .login-main {
        z-index: 2;
        flex: 1;
        background-color: #fff;
        padding: 20px;
        display: flex;
        align-items: center;

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
