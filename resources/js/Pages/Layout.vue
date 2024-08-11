<template>
  <main>
    <header>
        <NavBar />
    </header>
    <article>
      <slot />
    </article>
  </main>
</template>

<script setup>
import NavBar from '../Components/NavBar.vue'
</script>

<style>

</style>