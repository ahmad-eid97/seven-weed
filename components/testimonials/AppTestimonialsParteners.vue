<template>
    <section class="about-partners">

        <swiper :options="swiperOption" class="owl-carousel">
            <swiper-slide>
            <div class="item">
                <img class="" src="/assets/images/brand-style1.png" width="150" height="150">
            </div>
            </swiper-slide>

            <swiper-slide>
            <div class="item">
                <img class="" src="/assets/images/brand-style2.png" width="150" height="150">
            </div>
            </swiper-slide>

            <swiper-slide>
            <div class="item">
                <img class="" src="/assets/images/brand-style3.png" width="150" height="150">
            </div>
            </swiper-slide>

            <swiper-slide>
            <div class="item">
                <img class="" src="/assets/images/brand-style4.png" width="150" height="150">
            </div>
            </swiper-slide>

            <swiper-slide>
            <div class="item">
                <img class="" src="/assets/images/brand-style5.png" width="150" height="150">
            </div>
            </swiper-slide>
        </swiper>
        
    </section>
</template>

<script>
export default {
    name: 'AppTestimonialsParteners',
    data() {
        return {
        swiperOption: {
            loop: true,
            slidesPerView: 5,
            spaceBetween: 50,
            breakpoints: {
            // when window width is >= 320px
            100: {
                slidesPerView: 1,
                spaceBetween: 5,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 5,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 5,
            },
            },
        },
        }
    }
}
</script>
<style>
    .about-partners {
        padding: 45px 100px 0;
        background-color: var(--main-color);
    }
    .about-partners::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(/assets/images/brand-bg.png);
    }
    .about-partners .owl-carousel {
        margin-bottom: 40px;
    }
    .about-partners .owl-carousel .item  {
        text-align: center;
    }
    .about-partners .owl-carousel .item img {
        max-height: 115px;
        width: auto;
        display: inline;
        max-width: 100%;
        height: auto;
    }
    .about-partners .owl-carousel .owl-nav.disabled {
        display: none !important;
    }

</style>