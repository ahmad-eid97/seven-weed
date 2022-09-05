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
  components: { AppServicesHeading, AppServicesItems },
    name: 'Services'

}
</script>

<style>

</style>