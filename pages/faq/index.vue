<template>
    <div class="home">
        <app-faq-heading></app-faq-heading>
        <app-faq-faqs></app-faq-faqs>
    </div>
</template>

<script>
import AppFaqFaqs from '../../components/faq/AppFaqFaqs.vue'
import AppFaqHeading from '../../components/faq/AppFaqHeading.vue'
export default {
  components: { AppFaqHeading, AppFaqFaqs },
    name: 'Faq'
}
</script>

<style>

</style>