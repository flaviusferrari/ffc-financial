<template>
  <main>
    <header>
      <Link href="/">Home</Link>
      <Link href="/users">Usuários</Link>
    </header>
    <article>
      <slot />
    </article>
  </main>
</template>

<script setup>
import {Link} from '@inertiajs/vue3'
</script>

<style>

</style>