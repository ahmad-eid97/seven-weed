<template>
  <div id="app">
    <app-header ></app-header>

    <router-view />

    <app-footer ></app-footer>

  </div>
</template>


<script>
import AppHeader from '../components/header/AppHeader.vue'
import AppFooter from '../components/footer/AppFooter.vue'

export default {
  name: 'App',
  components: {
        AppHeader,
    AppFooter
  },
  watch: {
  },


  created () {
    // this.$route.params.lang = localStorage.getItem('code');
    // if (this.$route.params.lang === 'ar') {
    //   localStorage.setItem('code', 'ar');
    //   this.$i18n.locale = 'ar';
    //   document.documentElement.setAttribute('dir', 'rtl');
    //   document.documentElement.setAttribute('lang', 'ar');
    //   document.body.classList.add('rtl');
    // } else {
    //   localStorage.setItem('code', 'en');
    //   this.$i18n.locale = 'en';
    //   document.documentElement.setAttribute('dir', 'ltr');
    //   document.documentElement.setAttribute('lang', 'en');
    //   document.body.classList.remove('rtl');
    // }
  },
  mounted() {
        // this.$route.params.lang  = this.lang;
  }
}
</script>
<style>
</style>