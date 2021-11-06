<template>
<div class="container-product-item col-xs-6 col-sm-4 col-md-3 col-lg-2">
    <div class="product-item">
        <div class="product-item-over" style="position: relative">
            <div class="item-overlay active">
                <div class="product-item-star">
                    <fa icon="star"></fa>
                    <fa icon="star"></fa>
                    <fa icon="star"></fa>
                    <fa icon="star" class="text-muted"></fa>
                    <fa icon="star" class="text-muted"></fa>
                </div>
                <div class="product-item-play">
                    <a href="#" data-toggle="class">
                        <fa icon="play-circle"></fa>
                        <fa icon="control-pause" class="text-active"></fa>
                    </a>
                </div>
                <div class="product-item-react">
                    <a href="#" class="item-react-heart active" data-toggle="class">
                        <fa icon="heart-o"></fa>
                        <fa icon="heart" class="text-active"></fa>
                    </a>
                    <a href="#" class="item-react-add" data-toggle="class">
                        <fa icon="plus-circle"></fa>
                        <fa icon="check-circle" class="no-active"></fa>
                    </a>
                </div>
            </div>
            <a href="#">
                <img src="../../static/p1.jpg" alt="" class="product-item-img" />
            </a>
        </div>
        <div class="product-item-title">
            <a href="#" class="item-title-top">Vivamus vel tincidunt libero</a>
            <a href="#" class="item-title-bot">Lauren Taylor</a>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator';

@Component
export default class SongItem extends Vue {}
</script>

<style lang="css">
/* .container-product-item {
    position: relative;
    width: 16.6666667%;
    padding: 0 10px;

    .product-item {
        .product-item-over {
            position: relative;

            .item-overlay {
                z-index: 2;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0);

                .product-item-star {
                    display: none;
                    color: #4cb6cb;
                    padding: 10px 15px 0 15px;

                    svg {
                        zoom: 0.8;
                    }
                }

                .product-item-play {
                    display: none;
                    position: absolute;
                    top: 44%;
                    left: 0;
                    right: 0;
                    text-align: center;

                    svg {
                        color: #9badb9;
                        zoom: 2;
                    }
                }

                .product-item-react {
                    padding: 0 15px;
                    margin-bottom: 10px;
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    color: #9badb9;
                    display: none;

                    .item-react-heart {
                        float: right;
                        color: #9badb9;
                    }

                    .item-react-heart:hover {
                        color: #f05050;
                    }

                    .item-react-add {
                        color: #9badb9;
                    }

                    .item-react-add:hover {
                        color: #fff;
                    }

                    .no-active {
                        display: none;
                    }
                }

                .container-product-item:hover .product-item-star,
                .container-product-item:hover .product-item-play,
                .container-product-item:hover .product-item-react {
                    display: block;
                }
            }

            .container-product-item:hover .item-overlay {
                background-color: rgba(0, 0, 0, 0.75);
            }

            a {
                .product-item-img {
                    position: relative;
                    width: 100%;
                    display: block;
                    border-radius: 4px;
                }
            }
        }
    }

    .product-item-title {
        padding: 15px 0;

        .item-title-top,
        .item-title-bot {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #545a5f;
            font-size: 15px;
            line-height: 19px;
        }

        .item-title-bot {
            color: #939aa0;
            font-size: 12px;
        }
    }
} */
.container-product-item {
    position: relative;
    width: 16.6666667%;
    padding: 0 10px;
}
a {
    text-decoration: none;
}

.item-overlay {
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
}

.container-product-item:hover .item-overlay {
    background-color: rgba(0, 0, 0, 0.75);
}

.product-item-img {
    position: relative;
    width: 100%;
    display: block;
    border-radius: 4px;
}

.product-item-star {
    display: none;
    color: #4cb6cb;
    padding: 10px 15px 0 15px;
}

.product-item-star svg {
    zoom: 0.8;
}

.text-muted {
    color: #627b8c !important;
}

.product-item-play {
    display: none;
    position: absolute;
    top: 44%;
    left: 0;
    right: 0;
    text-align: center;
}

.product-item-play svg {
    color: #9badb9;
    zoom: 2;
}

.product-item-play svg:hover {
    color: #fff;
}

.product-item-react {
    padding: 0 15px;
    margin-bottom: 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #9badb9;
    display: none;
}

.item-react-heart {
    float: right;
    color: #9badb9;

}

.item-react-heart:hover {
    color: #f05050;

}

.item-react-add {
    color: #9badb9;
}

.item-react-add:hover {
    color: #fff;
}

.container-product-item:hover .product-item-star,
.container-product-item:hover .product-item-play,
.container-product-item:hover .product-item-react {
    display: block;
}

.no-active {
    display: none;
}

.product-item-title {
    padding: 15px 0;
}

.item-title-top,
.item-title-bot {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #545a5f;
    font-size: 15px;
    line-height: 19px;
}

.item-title-bot {
    color: #939aa0;
    font-size: 12px;
}
</style>
