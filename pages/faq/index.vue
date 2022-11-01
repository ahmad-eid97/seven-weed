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
  name: 'Faq',
  components: { AppFaqHeading, AppFaqFaqs },
  async asyncData({ $axios }) {
    const faqs = {}
    const FAQS_RES = await $axios.get('/faqs');

    if (FAQS_RES.success) faqs = FAQS_RES.data.data

    return {
        faqs
    }
  },
}
</script>

<style>

</style>