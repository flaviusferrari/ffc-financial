<template>
  <AppHeader title="Usuários" />
    <!-- Content Header -->
    <div class="content-header">
      <div class="container-fluid">
        <h2>Users</h2>
        Bem vindo, {{ name }}
      </div>
    </div>
</template>

<script setup>
  defineProps({
    name: String,
});
</script>