<template>
<header class="header">
    <div class="header-logo">
        <a href="" class="header-logo-link">
            <i class="fas fa-headphones-alt"></i>
            <fa icon="headphones"></fa>
        </a>
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
                <a href="#" class="header-right-user-link" data-toggle="dropdown">
                    John.Smith <b class="caret"></b>
                    <span class="">
                        <img src="../static/a2.png" alt="..." />
                    </span>
                </a>
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

@Component
export default class Header extends Vue {}
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

                    .caret {
                        display: block;
                        width: 0;
                        height: 0;
                        margin-left: 2px;
                        border-top: 4px solid;
                        border-right: 4px solid transparent;
                        border-left: 4px solid transparent;
                    }

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
            }

            .header-right-user:hover {
                background-color: #edf2f3;
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
