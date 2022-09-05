<template>
  <div class="home">
        <app-contact-heading></app-contact-heading>
        <app-contact-form></app-contact-form>
        <app-contact-map></app-contact-map>
  </div>
</template>

<script>
import AppContactForm from '../../components/contact/AppContactForm.vue'
import AppContactHeading from '../../components/contact/AppContactHeading.vue'
import AppContactMap from '../../components/contact/AppContactMap.vue'

export default {
  name: 'Contact',
  components: {
    AppContactHeading,
    AppContactForm,
    AppContactMap
    
  }
}
</script>