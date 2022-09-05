<template>
    <header :class="!topOfPage ? 'onScroll' : ''" class="header header-style-2 clearfix">
        <app-top-bar></app-top-bar>
        <div class="row m-0 w-100">
            <b-navbar toggleable="lg">
                <b-navbar-brand href="#">
                    <img src="https://the7.io/weed/wp-content/uploads/sites/51/2020/02/w-l-norm.png" alt="">
                </b-navbar-brand>

                <b-navbar-toggle target="navbar-toggle-collapse">
                    <template #default="{ expanded }">
                        <span class="menu-trigger" :class="expanded ? 'active' : ''" id="menu03">
                            <p></p>
                            <p></p>
                            <p></p>
                        </span>
                    </template>
                </b-navbar-toggle>

                <b-collapse id="navbar-toggle-collapse" class="ml-auto justify-content-end" is-nav>
                    <b-navbar-nav class="align-items-center">
                        <b-nav-item to="/" href="#">Home</b-nav-item>
                        <b-nav-item to="/about">About Us</b-nav-item>
                        <b-nav-item to="/services">Services</b-nav-item>
                        <b-nav-item to="/testimonials">Testimonials</b-nav-item>
                        <b-nav-item to="/blogs">News</b-nav-item>
                        <b-nav-item to="/contact">Contact</b-nav-item>
                        <a href="#"  class="btn">
                            <font-awesome-icon icon="fa-solid fa-basket-shopping" />
                            $0.00
                        </a>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </header>
</template>

<script>
import AppTopBar from './AppTopBar.vue'
export default {
    name: 'AppHeader',
    components: {
        AppTopBar
    },
    data() {
        return {
            topOfPage: true
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
    mounted() {
    },
    methods: {
        handleScroll(){
            if(window.pageYOffset>30){
                if(this.topOfPage) this.topOfPage = false
            } else {
                if(!this.topOfPage) this.topOfPage = true
        }
        }
    }
}
</script>
<style lang="scss">
    header {
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        box-shadow: 0 0 10px #aaa;
        background-color: #fff;
        position: fixed;
    }
    
    
    nav {
        padding: 20px 60px 20px !important;
    }
    @include md {
        nav {
            padding: 20px 20px 20px !important;
        }
    }
    .onScroll nav {
        padding: 0 60px 0 !important;
    }
    .navbar-brand {
        width: 180px;
        transition: all 0.3s linear;

    }
    
    .navbar .nav-item {
        margin: 0 16px;
        position: relative;
        padding: 5px 0;
    }
    .navbar .nav-item .nav-link {
        color: rgb(117, 179, 37);
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        padding: 5px 10px;
        border-radius: 5px;
        text-transform: uppercase;
    }
    

    .nav-item.active .nav-link {
        background-color: rgb(117, 179, 37);
        color: #fff;
    }
     .nav-item:hover .nav-link {
         background-color: rgba(117,179,37,.2);
    }
    
    .navbar .btn {
        color: rgb(117, 179, 37);
        font-size: 15px;
        font-weight: 500;
        line-height: 19px;
        border-color: transparent;
    }
    .navbar .btn:hover {
        color: var(--main-color);
        border-color: transparent;
    }
    .navbar-toggler {
        border: 1px solid var(--main-color);
        outline: none;
        box-shadow: none !important;
    }
    .menu-trigger p {
        width: 30px;
        height: 5px;
        background: var(--main-color);
        margin: 0 0 2px;
    }
    .navbar .btn:hover {
        color: rgb(210, 52, 48);
        background-color: var(--main-color);
    }
    @include md {
        .onScroll .navbar-nav {
            transform: translateY(-10px);
        }
        .navbar-nav {
            padding: 20px 0;
            transform: translateY(-10px);
        }
        .navbar-nav li {
            padding: 5px 0 !important;
        }
        .navbar-nav li.nav-item a {
            // color: #fff !important;
            padding: 5px 20px;
        }
        .btn {
            display: none;
        }
    }
    
    
</style>