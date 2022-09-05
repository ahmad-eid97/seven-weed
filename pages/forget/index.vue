<template>
    <div class="home">
        <app-forget-heading></app-forget-heading>
        <app-forget-form></app-forget-form>
    </div>
</template>

<script>
import AppForgetForm from '../../components/forget/AppForgetForm.vue'
import AppForgetHeading from '../../components/forget/AppForgetHeading.vue'
export default {
    name: 'Forget',
    components: {
        AppForgetHeading,
        AppForgetForm
    }
}
</script>

<style>

</style>