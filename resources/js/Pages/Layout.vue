<template>
  <NavBar />
  <SideBar />
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <slot />
        </div>
      </div>
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