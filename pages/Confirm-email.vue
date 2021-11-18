<template>
<div class="login-block">
    <div class="login-main">
        <AuthForm title="Xác nhậm email" @submit.prevent="confirmEmail">
            <AuthInput v-model="email" label="Email" type="email" :required="true" value='email'/>
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
} from '@/mixins/auth'
import store from "@/controllers/store";

@Component({
    components: {},
})
export default class Confirm_Email extends Mixins(AuthMixin) {
    email: any = '';

    data() {
        this.email = store.value.email
        return {
            email: this.email
        }
    }
}
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
                margin-bottom: 40px;
                text-align: right;
                font-size: 14px;
            }
        }
    }
}
</style>
