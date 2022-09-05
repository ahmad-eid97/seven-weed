<template>
    <section class="testimonials">
        <div class="row m-0">
            <h2>
                What our customers say
            </h2>
        </div>
        <VueSlickCarousel :slidesToShow = "1" :slidesToScroll = "1" :arrows="true" :dots="false">
            <div>
                <div class="item">
                    <div class="row m-0">
                        <div class="col-auto">
                            <img src="https://the7.io/weed/wp-content/uploads/sites/51/2019/01/weed022-150x150.jpg" alt="">
                        </div>
                        <div class="col">
                            <p>
                                Donec at pharetra erat. Suspendisse vitae varius ipsum. Nam elementum lectus eu enim rutrum, id ultrices mauris viverra. Vivamus sodales condimentum eros, in tempus magna facilisis sit amet. Aliquam est ligula, porta sit amet ornare id, posuere vel urna. Mauris ut nulla ut dolor dapibus luctus.
                            </p>
                            <h3>
                                Jerremy M.
                            </h3>
                            <h4>
                                regular customer
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="item">
                    <div class="row m-0">
                        <div class="col-auto">
                            <img src="https://the7.io/weed/wp-content/uploads/sites/51/2019/01/weed004-150x150.jpg" alt="">
                        </div>
                        <div class="col">
                            <p>
                                Phasellus nec volutpat eros. Morbi dignissim nulla eget ipsum porta, a pellentesque odio sodales. Integer at lacinia dolor. Donec varius, sem id molestie feugiat, tellus risus egestas nibh, convallis semper lacus lorem ac augue.
                            </p>
                            <h3>
                                Alex T.
                            </h3>
                            <h4>
                                regular customer
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="item">
                    <div class="row m-0">
                        <div class="col-auto">
                            <img src="https://the7.io/weed/wp-content/uploads/sites/51/2019/01/weed002-150x150.jpg" alt="">
                        </div>
                        <div class="col">
                            <p>
                                Suspendisse vitae varius ipsum. Nam elementum lectus eu enim rutrum, id ultrices mauris viverra. Vivamus sodales condimentum eros, in tempus magna facilisis sit amet. Aliquam est ligula, porta sit amet ornare id, posuere vel urna.
                            </p>
                            <h3>
                                Miriam G.
                            </h3>
                            <h4>
                                regular customer
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="item">
                    <div class="row m-0">
                        <div class="col-auto">
                            <img src="https://the7.io/weed/wp-content/uploads/sites/51/2019/01/weed016-150x150.jpg" alt="">
                        </div>
                        <div class="col">
                            <p>
                                Nam elementum lectus eu enim rutrum, id ultrices mauris viverra. Vivamus sodales condimentum eros, in tempus magna facilisis sit amet. Aliquam est ligula, porta sit amet ornare id, posuere vel urna. Mauris ut nulla ut dolor dapibus luctus.
                            </p>
                            <h3>
                                Tiffany M.
                            </h3>
                            <h4>
                                regular customer
                            </h4>
                        </div>
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
    name: 'AppHomeTestimonials'
}
</script>

<style lang="scss">
    .testimonials {
        padding: 80px 50px 70px;
        background-color: rgb(117, 179, 37);
    }
    .testimonials h2 {
        color: rgb(255, 255, 255);
        font-size: 34px;
        font-weight: 700;
        line-height: 44px;
        text-align: center;
        margin-bottom: 70px;
    }
    .testimonials .item {
        max-width: 770px;
        border: 4px dashed #9fca67;
        padding: 40px;
        margin: 0 auto;
    }
    @include xs {
        .testimonials .item {
            padding: 10px;
        }
    }
    @include sm {
        .testimonials .item .row {
            display: block;
        }
    }
    .testimonials .item img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
    .testimonials .item p {
        color: rgb(255, 255, 255);
        font-size: 17px;
        font-style: italic;
        line-height: 30px;
        margin-bottom: 10px;
    }
    .testimonials .item h3 {
        color: rgb(255, 255, 255);
        font-size: 24px;
        font-weight: 700;
        line-height: 34px;
    }
    .testimonials .item h4 {
        color: rgb(255, 255, 255);
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
    }
    .testimonials .slick-prev {
        left: -25px;
    }
    .testimonials .slick-next {
        right: -25px;
    }
    .testimonials .slick-prev, .testimonials .slick-next {
        width: 40px;
        height: 40px;
        z-index: 2;
    }
    .testimonials .slick-prev::before, .testimonials .slick-next::before {
        font-family: 'slick';
        font-size: 40px;
        line-height: 1;
        opacity: 0.75;
        color: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>