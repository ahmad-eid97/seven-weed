<template>
    <div class="home">
        <app-testimonials-heading></app-testimonials-heading>
        <app-testimonials-items></app-testimonials-items>
        <app-testimonials-parteners></app-testimonials-parteners>
        <app-testimonials-team></app-testimonials-team>
    </div>
</template>

<script>
import AppTestimonialsHeading from '../../components/testimonials/AppTestimonialsHeading.vue'
import AppTestimonialsItems from '../../components/testimonials/AppTestimonialsItems.vue'
import AppTestimonialsParteners from '../../components/testimonials/AppTestimonialsParteners.vue'
import AppTestimonialsTeam from '../../components/testimonials/AppTestimonialsTeam.vue'
export default {
    components: { AppTestimonialsHeading, AppTestimonialsItems, AppTestimonialsParteners, AppTestimonialsTeam },
    name: 'Testimonials'
}
</script>

<style>

</style>