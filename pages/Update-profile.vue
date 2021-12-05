<template>
<div class="container">
    <form 
        class="update-profile-container" 
        style="display: flex"
        @submit.prevent="updatedProfile"
    >   
        <div class="update-profile-container-left">
            <div class="update-profile-container-left-img2">
                <div>
                    <div class="overlay"></div>
                    <label for="input-file">
                        <img v-if="url !== ''" :src="url" />
                        <img v-else :src="'api/v2/public/users/' + user.uid + '/avatar'" alt="" />
                        <!-- <Icon icon="camera"></Icon> -->
                        <!-- Upload your avatar -->
                    </label>
                    <input 
                        id="input-file" 
                        label="Avatar" 
                        type="file"
                        style="width: 200px"
                        @change="onImageChanged"
                    />
                </div>
            </div>
        </div>
        <div class="update-profile-container-right">
            <div class="update-profile-container-right-form" >
                <AuthInput v-model="first_name" label="First name" :required="true" :error="first_name_error"/>
                <AuthInput v-model="last_name" label="Last name" :required="true" :error="last_name_error"/>
                <AuthInput v-model="bio" label="Bio" :required="true" />
                <div class="update-profile-container-right-form-btn">
                    <button type="submit">Cập nhật</button>
                </div> 
            </div>
        </div>
    </form>
</div>
</template>

<script lang="ts">
import {
    Component,
    Mixins
} from 'vue-property-decorator'
import {
    AuthMixin
} from '../mixins';

@Component({
    middleware: "auth",
    components: {},
})

export default class Update_Profile extends Mixins(AuthMixin) {
	head() {
		return {
			title:  "Update profile"
		}
	}

	layout() {
		return 'music'
	}
}
</script>

<style lang="less">
.container {
    background-color: #f2f4f8;
    display: flex;
    justify-content: center;
    padding: 30px;

    .update-profile-container {
        width: 80%;
        display: flex;
        margin: auto;
        background-color: #fff;
        padding: 40px 20px;

        &-left {
            width: 30%;
            border-right: 1px solid #f2f2f2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &-img2 {
                text-align: center;

                img {
                    width: 240px;
                    height: 240px;
                    object-fit: cover;
                    margin-bottom: 20px;
                    border-radius: 50%;
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 2;
                    align-items: center;
                    justify-content: center;
                    display: none;
                }

                label {
                    padding: 10px;
                    background-color: #fff;
                    color: #000;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    border: none;
                    position: relative;

                    svg {
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
                        background-color: #fff;
                        outline: none;
                        border: 1px solid #4cb6cb;
                        border-radius: 20px;
                        color: #4cb6cb;
                        min-width: 60px;
                    }
                    button:hover {
                        color: #fff;
                        background-color: #4cb6cb;
                    }
                }
            }
        }
    }
}
</style>
