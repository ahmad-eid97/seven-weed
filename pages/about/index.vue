<template>
  <div class="home">
        <app-about-heading></app-about-heading>
        
        <app-about-intro></app-about-intro>

        <app-about-experiance></app-about-experiance>

        <app-about-choose></app-about-choose>

        <app-about-security></app-about-security>

        <app-about-parteners></app-about-parteners>

        <app-about-countdown></app-about-countdown>
  </div>
</template>

<script>
import AppAboutChoose from '../../components/about/AppAboutChoose.vue'
import AppAboutCountdown from '../../components/about/AppAboutCountdown.vue'
import AppAboutExperiance from '../../components/about/AppAboutExperiance.vue'
import AppAboutHeading from '../../components/about/AppAboutHeading.vue'
import AppAboutIntro from '../../components/about/AppAboutIntro.vue'
import AppAboutParteners from '../../components/about/AppAboutParteners.vue'
import AppAboutSecurity from '../../components/about/AppAboutSecurity.vue'
// @ is an alias to /src


export default {
  name: 'About',
  components: {
    AppAboutHeading,
    AppAboutIntro,
    AppAboutExperiance,
    AppAboutChoose,
    AppAboutSecurity,
    AppAboutParteners,
    AppAboutCountdown
  }
}
</script>
