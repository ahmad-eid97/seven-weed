<template>
    <section class="intro">
        <VueSlickCarousel :slidesToShow = "1" :slidesToScroll = "1" :arrows="true" :fade="true" :dots="false">
            <div class="item item-1" >
                <div class="overlay">
                </div>
                <div class="row m-0 justify-content-center align-items-center h-100">
                    <div class="content">
                        <h2>
                            get your cannbis 
                            <br>
                            delivered - it's free
                        </h2>
                        <p>
                            Check out Seven Weed online store, fill your cart
                            <br>
                            and let us know where to deliver!
                        </p>
                        <a href="#" class="btn">
                            Browse online store
                        </a>
                        
                    </div>
                </div>
            </div>

            <div class="item item-2">
                <div class="overlay">
                </div>
                <div class="row m-0 justify-content-center align-items-center h-100">
                    <div class="content">
                        <h1>
                            seven weed 
                        </h1>
                        <p>
                            High quality cannbis products
                        </p>
                    </div>
                </div>
            </div>
            <div class="item item-3">
                <div class="overlay">
                </div>
                <div class="row m-0 justify-content-center align-items-center h-100">
                    <div class="content">
                        <h2>
                            visit seven weed Dispensary
                            <br>
                            in los angeles, california 
                        </h2>
                        <p>
                            We offer a wide selection of premium cannabis products.
                            <br>
                            Come by for a visit to one of our brand stores!
                        </p>
                        <a href="#" class="btn">
                            Get directions
                        </a>
                    </div>
                </div>
            </div>
        </VueSlickCarousel>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel },
    name: 'AppHomeSlider',
}
</script>

<style lang="scss">
    .intro {
        margin-top: 150px;
    }
    .intro .item {
        min-height: 500px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
    }
    .intro .item-1 {
        background-image: url(//the7.io/weed/wp-content/uploads/sites/51/2019/01/weed003.jpg);
    }
    .intro .item-2 {
        background-image: url(//the7.io/weed/wp-content/uploads/sites/51/2019/01/w002.jpg);
    }
    .intro .item-3 {
        background-image: url(//the7.io/weed/wp-content/uploads/sites/51/2019/01/weed031.jpg);
    }
    .intro .item .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background-color: rgba(0, 0, 0, 0.51);
    }
    .intro .item .row {
        min-height: 500px;
    }
    .intro .item .content {
        position: relative;
        z-index: 1;
        text-align: center;
        max-width: 800px;
    }
    .intro .item .content h1{
        color: rgb(255, 255, 255);
        font-size: 100px;
        font-weight: 700;
        line-height: 150px;
    }
    .intro .item .content h2{
        color: rgb(255, 255, 255);
        font-size: 50px;
        font-weight: 700;
        line-height: 60px;
        text-transform: uppercase;
        visibility: visible;
        z-index: 1;
        text-align: center;
    }
    .intro .item .content p{
        color: rgb(255, 255, 255);
        font-size: 24px;
        font-weight: 500;
        height: 68px;
        line-height: 34px;
        position: relative;
        text-align: center;
    }
    @include sm {
        .intro .item .content h2{
            font-size: 35px;
            line-height: 50px;
        }
        .intro .item .content p{
            font-size: 18px;
            line-height: 24px;
        }
    }
    .intro .item .content .btn{
        background-color: rgb(117, 179, 37);
        border-radius: 3px;
        border: none;
        color: rgb(255, 255, 255);
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;
        height: 50px;
        line-height: 20px;
        padding-bottom: 15px;
        padding-left: 35px;
        padding-right: 35px;
        padding-top: 15px;
    }
    .intro .content .btn:hover{
        color: rgb(117, 179, 37);
        background-color: rgb(255, 255, 255);
    }
    .intro .slick-prev {
        left: 25px;
    }
    .intro .slick-next {
        right: 25px;
    }
    .intro .slick-prev, .intro .slick-next {
        width: 40px;
        height: 40px;
        z-index: 2;
    }
    .intro .slick-prev::before, .intro .slick-next::before {
        font-family: 'slick';
        font-size: 40px;
        line-height: 1;
        opacity: 0.75;
        color: #020606;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>