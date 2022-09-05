<template>
  <div class="home">
    <app-home-slider></app-home-slider>
    <app-home-welcome></app-home-welcome>
    <app-home-services></app-home-services>
    <app-home-offers></app-home-offers>
    <app-home-facts></app-home-facts>
    <app-home-news></app-home-news>
    <app-home-banner></app-home-banner>
    <app-home-testimonials></app-home-testimonials>
  </div>
</template>

<script>
import AppHomeBanner from '../components/home/AppHomeBanner.vue'
import AppHomeFacts from '../components/home/AppHomeFacts.vue'
import AppHomeNews from '../components/home/AppHomeNews.vue'
import AppHomeOffers from '../components/home/AppHomeOffers.vue'
import AppHomeServices from '../components/home/AppHomeServices.vue'
import AppHomeSlider from '../components/home/AppHomeSlider.vue'
import AppHomeTestimonials from '../components/home/AppHomeTestimonials.vue'
import AppHomeWelcome from '../components/home/AppHomeWelcome.vue'




export default {
  name: 'Home',
  components: {
    AppHomeSlider,
    AppHomeWelcome,
    AppHomeServices,
    AppHomeOffers,
    AppHomeFacts,
    AppHomeNews,
    AppHomeBanner,
    AppHomeTestimonials
    
  }
}
</script>
