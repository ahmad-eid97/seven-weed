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
  name: 'Blogs',
  components: { AppBlogsHeading, AppBlogsItems },
  async asyncData({ $axios }) {
    const blogs = {}
    const BLOGS_RES = await $axios.get('/blogs');

    if (BLOGS_RES.success) blogs = BLOGS_RES.data.data

    return {
        blogs
    }
  },
}
</script>

<style>

</style>