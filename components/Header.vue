<template>
<header class="header">
    <div class="header-logo">
        <NuxtLink to="./" class="header-logo-link">
            <i class="fas fa-headphones-alt"></i>
            <fa icon="headphones"></fa>
        </NuxtLink>
    </div>
    <form class="header-form" role="search">
        <div class="header-form-search">
            <div class="header-form-search-input">
                <span class="header-form-search-icon">
                    <button type="submit" class="">
                        <fa icon="search"></fa>
                    </button>
                </span>
                <input type="text" class="" placeholder="Search songs, albums..." />
            </div>
        </div>
    </form>
    <div class="header-right">
        <ul class="header-right-list">
            <li class="header-right-bell">
                <a href="#" class="header-right-bell-link" data-toggle="dropdown">
                    <fa icon="bell"></fa>
                    <span class="header-right-bell-count" style="display: inline-block">3</span>
                </a>
            </li>
            <li class="header-right-user">
                <div class="header-right-user-link" data-toggle="dropdown">
                    {{user && user.first_name + '' + user.last_name}}
                    <!-- <b class="caret"></b> -->
                    <span>
                        <img src="../static/a2.png" alt="..." v-if="user" />
                        <img src="../static/Placeholder.jpg" alt="..." v-else />
                    </span>
                    <ul class="header__navbar-user-menu" v-if="!user">
                        <li class="header__navbar-user-item">
                            <!-- <NuxtLink to="/profile">Tài khoản của tôi</NuxtLink> -->
                        </li>
                        <li class="header__navbar-user-item header__navbar-user-item--separate">
                            <NuxtLink to="/login" class="header__navbar-user-item-link">Đăng nhập</NuxtLink>
                        </li>
                        <li class="header__navbar-user-item header__navbar-user-item--separate">
                            <NuxtLink to="/register" class="header__navbar-user-item-link">Đăng ký</NuxtLink>

                        </li>
                    </ul>
                    <ul class="header__navbar-user-menu" v-else>
                        <li class="header__navbar-user-item">
                            <!-- <NuxtLink to="/profile">Tài khoản của tôi</NuxtLink> -->
                        </li>
                        <li class="header__navbar-user-item header__navbar-user-item--separate">
                            <NuxtLink to="/profile" class="header__navbar-user-item-link">Tài khoản của tôi</NuxtLink>
                        </li>
                        <li class="header__navbar-user-item header__navbar-user-item--separate">
                            <div class="header__navbar-user-item-link" @click="logout">Đăng xuất</div>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</header>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator';
import store from "../controllers/store";

@Component
export default class Header extends Vue {
    user: any = '';
    $axios: any;

    data() {
        this.user = store.value.user
        return {
            user: this.user
        }
    }

    async logout() {    
        await this.$axios.delete('http://localhost:3000/api/v2/identity/session');
        store.value.user = ""
        this.user = store.value.user
    }
}
</script>

<style lang="less">
.header {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    height: 60px;

    .header-logo {
        background-color: #4cb6cb;
        width: 70px;

        .header-logo-link {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;

            svg {
                height: 10px;
                color: #fff;
                zoom: 2;
            }
        }
    }

    .header-right {
        display: flex;
        align-items: center;

        .header-right-list {
            display: flex;
            list-style: none;

            .header-right-bell {
                width: 60px;
                display: flex;
                align-items: center;

                &-link {
                    text-decoration: none;

                    svg {
                        color: #545a5f;
                    }

                    .header-right-bell-count {
                        position: relative;
                        top: -10px;
                        padding: 3px 6px;
                        margin-left: -10px;
                        background-color: #f05050;
                        border-radius: 100px;
                        color: #fff;
                        line-height: 0.8;
                        font-size: 14px;
                    }
                }
            }

            .header-right-user {
                width: 180px;
                padding: 4px 20px;

                &-link {
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    color: #545a5f;
                    font-size: 14px;
                    position: relative;
                    justify-content: flex-end;

                    .header__navbar-user-menu {
                        position: absolute;
                        padding-left: 0;
                        top: calc(100% + 6px);
                        border-radius: 2px;
                        width: 160px;
                        background-color: #fff;
                        list-style: none;
                        box-shadow: 0 1px 2px #e0e0e0;
                        z-index: 4;
                        font-size: 14px;
                        display: none;

                        .header__navbar-user-item--separate {
                            border-top: 1px solid rgba(0, 0, 0, 0.05);
                        }

                        .header__navbar-user-item {
                            z-index: 5;

                            &-link {
                                text-decoration: none;
                                color: #000;
                                font-size: 14px;
                                padding: 4px 16px;
                                display: block;
                                cursor: pointer;
                            }

                            &-link:first-child {
                                border-bottom-left-radius: 2px;
                                border-bottom-right-radius: 2px;
                            }

                            &-link:last-child {
                                border-top-left-radius: 2px;
                                border-top-right-radius: 2px;
                            }

                            &-link:last-child:hover {
                                background-color: #f8f8f8;
                            }
                        }
                    }

                    .header__navbar-user-menu::before {
                        content: "";
                        border-width: 20px 25px;
                        border-style: solid;
                        border-color: transparent transparent #fff transparent;
                        position: absolute;
                        top: -30px;
                        right: 0;
                        z-index: -1;
                    }

                    .header__navbar-user-menu::after {
                        content: "";
                        display: block;
                        position: absolute;
                        top: -8px;
                        right: 0;
                        width: 56%;
                        height: 8px;
                    }

                    // .caret {
                    //     display: block;
                    //     width: 0;
                    //     height: 0;
                    //     margin-left: 2px;
                    //     border-top: 4px solid;
                    //     border-right: 4px solid transparent;
                    //     border-left: 4px solid transparent;
                    // }

                    b {
                        font-weight: bold;
                        margin-left: 6px;
                    }

                    span {
                        margin-left: 14px;

                        img {
                            border-radius: 500px;
                            height: 40px;
                        }
                    }
                }

                &-link:hover .header__navbar-user-menu {
                    display: block;
                }
            }

        }
    }

    .header-form {
        display: flex;
        align-items: center;
        flex: 1;
        padding: 0 15px;

        .header-form-search {
            &-input {
                display: flex;

                .header-form-search-icon {
                    display: flex;
                    align-items: center;

                    button {
                        background-color: #fff;
                        border: none;
                        color: #788188;
                        padding: 15px 10px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                    }
                }

                input {
                    margin: 15px 0;
                    height: 30px;
                    padding: 5px 10px;
                    font-size: 13px;
                    line-height: 1.5;
                    border-radius: 3px;
                    outline: none;
                    border: none;
                }
            }
        }
    }

}
</style>
