<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import NavBar from "@/Components/NavBar.vue";
import SideBar from "@/Components/Sidebar.vue";
import Footer from "@/Components/Footer.vue";

const showingNavigationDropdown = ref(false);
</script>

<template>
  <NavBar />
  <SideBar />
    <div class="content-wrapper">
      <slot />
    </div>
  <Footer />
</template>
