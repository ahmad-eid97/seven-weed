<template>
    <div class="home">
        <app-blogs-heading></app-blogs-heading>
        <app-blogs-items></app-blogs-items>
    </div>
</template>

<script>
import AppBlogsHeading from '../../components/blogs/AppBlogsHeading.vue'
import AppBlogsItems from '../../components/blogs/AppBlogsItems.vue'
export default {
  components: { AppBlogsHeading, AppBlogsItems },
    name: 'Blogs'
}
</script>

<style>

</style>