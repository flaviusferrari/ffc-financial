<template>
  <AppHeader title="Usuários" />
  <h2>Users</h2>
  Bem vindo, {{ name }}
</template>

<script setup>
  defineProps({
    name: String,
});
</script>