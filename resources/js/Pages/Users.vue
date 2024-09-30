<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

  defineProps({
    name: String,
  });
</script>

<template>
  <Head title="Usuários" />

  <AuthenticatedLayout>
    <!-- Content Header -->
    <div class="content-header">
      <div class="container-fluid">
        <h2>Users</h2>
        Bem vindo, {{ name }}
      </div>
    </div>
  </AuthenticatedLayout>
</template>
