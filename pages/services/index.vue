<template>
    <div class="home">
        <app-services-heading></app-services-heading>
        <app-services-items></app-services-items>
    </div>
</template>

<script>
import AppServicesHeading from '../../components/services/AppServicesHeading.vue'
import AppServicesItems from '../../components/services/AppServicesItems.vue'
export default {
  name: 'Services',
  components: { AppServicesHeading, AppServicesItems },
  async asyncData({ $axios }) {
    const services = {}
    const SERVICES_RES = await $axios.get('/services');

    if (SERVICES_RES.success) services = SERVICES_RES.data.data

    return {
        services
    }
  },

}
</script>

<style>

</style>