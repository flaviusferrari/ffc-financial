<template>
  <NavBar />
  <SideBar />
    <div class="content-wrapper">
      <slot />
    </div>
  <Footer />
</template>

<script setup>
import NavBar from "../Components/NavBar.vue";
import SideBar from "../Components/Sidebar.vue";
import Footer from "../Components/Footer.vue";
</script>

<style>
</style>