<template>
    <section class="clients-area clients-area-two pt-100">
        <div class="container">
            <div class="section-title text-center">
                <span class="sp-color2">Our Clients</span>
                <h2>Our Clients Feedback</h2>
                
            </div>
            <div class="col-12">

                <swiper :options="swiperOption">
                    <swiper-slide>
                        <div class="item">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="clients-slider-img">
                                        <img src="/assets/images/client-1.png" alt="Images">
                                        <div class="clients-slider-circle"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="clients-slider-content">
                                        <div class="svg">
                                            <font-awesome-icon icon="fa-solid fa-quote-left" />
                                        </div>
                                        <p>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ligula eget lectus consequat volutpat. Donec elit libero, finibus eget scelerisque sed, tempor sit amet erat. Pellentesque tincidunt a purus sit amet ullamcorper. Vestibulum ultrices ligula in pharetra sagittis. Quisque lacinia magna dolor, at tempus sem consequat at.”
                                        </p>
                                        <h3>Jonthon Martin</h3>
                                        <span>App Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>

                    <swiper-slide>
                        <div class="item">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="clients-slider-img">
                                        <img src="/assets/images/client-2.png" alt="Images">
                                        <div class="clients-slider-circle"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="clients-slider-content">
                                        <div class="svg">
                                            <font-awesome-icon icon="fa-solid fa-quote-left" />
                                        </div>
                                        <p>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ligula eget lectus consequat volutpat. Donec elit libero, finibus eget scelerisque sed, tempor sit amet erat. Pellentesque tincidunt a purus sit amet ullamcorper. Vestibulum ultrices ligula in pharetra sagittis. Quisque lacinia magna dolor, at tempus sem consequat at.”
                                        </p>
                                        <h3>Jonthon Martin</h3>
                                        <span>App Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>

                </swiper>

            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'AppTestimonialsItems',
    data() {
        return {
            
        swiperOption: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 50,
        },
        }
    }
}
</script>

<style lang="scss">
.clients-area {
  position: relative;
  z-index: 1;
  background-color: #fff;
  padding-bottom: 0 !important;
}
@include md {
    .clients-slider-content {
        text-align: center;
        padding: 40px 0;
    }
}
.clients-area::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  background-image: url(/assets/images/client-bg.png);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.clients-area-two .section-title {
    margin-bottom: 0;
}
.clients-area .section-title span {
  margin-bottom: 8px;
  font-weight: 600;
  display: block;
  color: #fff;
}
.clients-area-two .section-title h2 {
    max-width: 600px;
    color: #212934;
    font-size: 35px;
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 42px;
    text-align: left;
    margin-top: 10px;
    margin-right: auto;
    margin-bottom: 15px;
    margin-left: auto;
    text-align: center;
}
.clients-area-two .seprator img {
  width: 70px;
  margin-top: 5px;
  margin-bottom: 20px;
}

.clients-area .owl-carousel {
    background-color: transparent;
}
.clients-area .owl-nav {
    margin: 0;
}
.clients-area .clients-slider-img {
  position: relative;
  z-index: 1;
  text-align: center;
}
.clients-area .clients-slider-img img {
  width: unset !important;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.clients-area .clients-slider-img .clients-slider-circle {
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: -35px;
  right: 0;
  margin: 0 auto;
  text-align: center;
  width: 90%;
  height: 90%;
  -webkit-animation: border-transform 15s infinite ease-in-out;
  animation: border-transform 15s infinite ease-in-out;
    background: var(--main-color);
}
.clients-area p {
    color: #000;
}
.clients-slider-content .svg {
  border-radius: 30px 8px;
  width: 80px;
  height: 80px;
  line-height: 82px;
  font-size: 40px;
  background-color: var(--main-color);
  color: #fff;
  text-align: center;
  display: inline-block;
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
}

.clients-slider-content .svg::after {

    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: .5px solid var(--main-color);
    border-radius: 30px 8px;
    -webkit-animation: ripple 2s infinite ease-in-out;
    animation: ripple 2s infinite ease-in-out;

}
.clients-area h3 {
    color: var(--main-color);
    margin: 15px 0 10px;
}
.clients-area span {
    color: var(--main-color);
}
.clients-area .owl-nav {
    position: absolute;
    bottom: 0;
    right: 50%;
}
.clients-area .owl-nav .owl-next,
.clients-area .owl-nav .owl-next:hover, 
.clients-area .owl-nav .owl-prev, 
.clients-area  .owl-nav .owl-prev:hover {
    background-color: transparent;
    display: inline-block;
    border-radius: 30px;
    bottom: 50px;
    text-align: center;
    line-height: 26px;
    font-size: 20px;
    position: absolute;
    padding: 4px 11px;
    border: 2px solid var(--main-color);
    color: var(--main-color);
}
.clients-area .owl-nav .owl-next:hover, 
.clients-area .owl-nav .owl-prev:hover {
    background: var(--main-color);
    color: #fff;
    transition: all 0.2s linear;
}
.clients-area .owl-nav .owl-next {
    right: -50px !important;
}
.clients-area .owl-nav .owl-prev {
    right: 0 !important;
}
@-webkit-keyframes ripple {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  75% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes ripple {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  75% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>