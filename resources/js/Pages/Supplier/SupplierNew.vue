<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import SupplierHead from "./Partials/SupplierHead.vue";
</script>


<template>
  <Head title="Fornecedores" />

  <AuthenticatedLayout>

    <SupplierHead />

    <!-- Main content -->
    <section class="content">
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Cadastro de Fornecedores</h3>

          <div class="card-tools">
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="collapse"
              title="Collapse"
            >
              <i class="fas fa-minus"></i>
            </button>
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="remove"
              title="Remove"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body p-0">

        </div>
        <div class="card-footer">
          <button type="button" class="btn btn-success float-right">
            <i class="fas fa-plus"></i> Cadastrar
          </button>
        </div>
      </div>
    </section>
  </AuthenticatedLayout>
</template>
