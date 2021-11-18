<template>
<div class="container">
    <AuthForm class="update-profile-container" style="display: flex">
        <div class="update-profile-container-left">
            <div class="update-profile-container-left-img">
                <img src="../static/Placeholder.jpg" alt="" />
                <div>
                    <label for="input-file">
                        <i class="fas fa-camera"></i>
                        Upload your profile
                    </label>
                    <input id="input-file" type="file" style="width: 200px" />
                </div>
            </div>
        </div>
        <div class="update-profile-container-right">
            <form class="update-profile-container-right-form">
                <div class="update-profile-container-right-form-input">
                    <span>First name</span>
                    <input type="text" :value="user.first_name" />
                </div>
                <div class="update-profile-container-right-form-input">
                    <span>Last name</span>
                    <input type="text" :value="user.last_name" />
                </div>
                <AuthInput v-model="email" :value="user.email" label="Email" :required="true" />
                <div class="update-profile-container-right-form-btn">
                    <button type="submit">Cập nhật</button>
                </div>
            </form>
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
import store from "../controllers/store";
import {
    AuthMixin
} from '../mixins';

@Component({
    components: {},
})

export default class Update_Profile extends Mixins(AuthMixin) {
    layout(context) {
        return 'music'
    }
    user = store.value.user;

}
</script>

<style lang="less">
.container {
    background-color: #f2f4f8;
    display: flex;
    justify-content: center;
    padding: 30px;

    .update-profile-container {
        // padding-top: 10px;
        width: 80%;
        display: flex;
        margin: auto;
        //   margin-bottom: 90px;
        background-color: #fff;
        padding: 40px 20px;

        &-left {
            width: 30%;
            border-right: 1px solid #f2f2f2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &-img {
                text-align: center;

                img {
                    width: 160px;
                    margin-bottom: 20px;
                }

                label {
                    border: 1px solid #f2f2f2;
                    padding: 10px;
                    background-color: #fff;
                    color: #000;
                    display: flex;
                    align-items: center;

                    i {
                        margin-right: 10px;
                        color: #4cb6cb;
                    }
                }

                input[type="file"] {
                    display: none;
                }
            }
        }

        &-right {
            flex: 1;
            padding: 20px 60px;

            &-form {
                &-input {
                    margin: 20px 0;
                    display: flex;
                    align-items: center;

                    span {
                        width: 160px;
                        display: block;
                    }

                    input {
                        flex: 1;
                        padding: 0 12px;
                        width: 100%;
                        height: 46px;
                        display: block;
                        background-color: #f5f7f9;
                        border: 1px solid #fff;
                        border-radius: 5px;
                        outline: none;
                    }
                }

                &-btn {
                    margin-top: 60px;
                    display: flex;
                    justify-content: center;

                    button {
                        padding: 10px 20px;
                        background-color: greenyellow;
                        outline: none;
                        border: none;
                        border-radius: 10px;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
