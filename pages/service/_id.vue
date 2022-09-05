<template>
    <div class="home">
        <app-service-heading></app-service-heading>
        <div class="service-details-area pt-100 pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <app-service-body></app-service-body>
                    </div>
                    <div class="col-lg-4">
                        <div class="side-bar-area">
                            <app-service-side-services></app-service-side-services>
                            <app-service-side-tags></app-service-side-tags>
                            <app-service-gallery></app-service-gallery>
                            <app-service-side-archive></app-service-side-archive>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import AppServiceBody from '../../components/service/AppServiceBody.vue'
import AppServiceGallery from '../../components/service/AppServiceGallery.vue'
import AppServiceHeading from '../../components/service/AppServiceHeading.vue'
import AppServiceSideArchive from '../../components/service/AppServiceSideArchive.vue'
import AppServiceSideServices from '../../components/service/AppServiceSideServices.vue'
import AppServiceSideTags from '../../components/service/AppServiceSideTags.vue'
export default {
  components: { AppServiceHeading, AppServiceBody, AppServiceSideServices, AppServiceSideTags, AppServiceGallery, AppServiceSideArchive },
    name: 'Service'

}
</script>

<style>
.side-bar-area {
  margin-left: 15px;
}
</style>