<template>
<div class="container">
    <div class="update-profile-container" style="display: flex">
        <div class="update-profile-container-right">
            <AuthForm title="Upload your music and audio" class="update-profile-container-right-form" @submit.prevent="createMusic">
                <AuthInput v-model="name" label="Name" :required="true" />
                <AuthInput v-model="author" label="Author" :required="true" />
                <div class="form-block">
                    <div class="form-block-label">
                        Image
                    </div>
                    <label for="input-file-avatar" style="margin-top: 10px;">
                        <img v-if="url_image !== ''" :src="url_image" />
                        <img v-else src='https://i.pinimg.com/originals/03/2b/08/032b0870b9053a191b67dc8c3f340345.gif' alt="" />
                    </label>
                    <input id="input-file-avatar" class="input-file" type="file" style="width: 200px" @change="onImageChanged" />
                    <div v-if="error" class="error">{{ error }}</div>
                </div>
                <div class="form-block">
                    <div class="form-block-label">
                        File music mp3
                    </div>
                    <label for="input-file-music" style="margin-top: 10px;">
                        <div v-if="url_music !== ''">
                            <audio controls>
                                <source :src="url_music" type="audio/ogg">
                            </audio>
                        </div>
                        <div v-else class="input-file-music-button">Choose files to upload</div>
                    </label>
                    <input id="input-file-music" class="input-file" type="file" style="width: 200px" @change="onFileChanged" />
                    <div v-if="error" class="error">{{ error }}</div>
                </div>
                <AuthInput v-model="description" label="Description" :required="true" />
                <div class="update-profile-container-right-form-btn">
                    <button type="submit">Submit</button>
                </div>
            </AuthForm>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Component,
    Mixins
} from 'vue-property-decorator'
import MusicMixin from '~/mixins/music';

@Component({
    middleware: "auth",
    components: {},
})
export default class Upload_music extends Mixins(MusicMixin) {
    layout() {
        return 'music'
    }

    head() {
        return {
            title: "Upload music"
        }
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

        &-right {
            flex: 1;
            padding: 20px 60px;

            &-form {

                .form-block {

                    .input-file {
                        display: none;
                    }

                    label {
                        display: flex;
                        justify-content: center;

                        img {
                            width: 220px;
                            height: 220px;
                            object-fit: cover;
                        }

                    }

                    .input-file-music {
                        &-button {
                            padding: 10px;
                            color: #fff;
                            background-color: #4cb6cb;
                            border-radius: 10px;
                        }
                    }
                }

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
                        background-color: #4cb6cb;
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
