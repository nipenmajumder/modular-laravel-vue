<script setup>

import Sidebar from "./sidebar.vue";
import Navbar from "./navbar.vue";
import Preloader from "./preloader.vue";
import Footer from "./footer.vue";
</script>

<template>
    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
            <Sidebar/>
            <div class="layout-page">
                <Navbar/>
                <div class="content-wrapper">
                    <Preloader/>
                    <router-view></router-view>
                    <Footer/>
                </div>
            </div>
        </div>
        <div class="layout-overlay layout-menu-toggle"></div>
    </div>
</template>

<style scoped>

</style>
