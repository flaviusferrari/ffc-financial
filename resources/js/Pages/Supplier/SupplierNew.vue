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
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-8">
                <div class="form-group">
                  <label>Razão Social</label>
                  <input type="text" class="form-control" id="" placeholder="Enter email">
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label>Nome Fantasia</label>
                  <input type="text" class="form-control" id="" placeholder="">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-2">
                <div class="form-group">
                  <label>CEP</label>
                  <input type="text" class="form-control" id="" placeholder="">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>Endereço</label>
                  <input type="text" class="form-control" id="" placeholder="">
                </div>
              </div>
              <div class="col-2">
                <div class="form-group">
                  <label>Número</label>
                  <input type="text" class="form-control" id="" placeholder="">
                </div>
              </div>
              <div class="col-2">
                <div class="form-group">
                  <label>Complemento</label>
                  <input type="text" class="form-control" id="" placeholder="">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label>Bairro</label>
                  <input type="text" class="form-control" id="" placeholder="">
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label>Cidade</label>
                  <input type="text" class="form-control" id="" placeholder="">
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label>Estado</label>
                  <input type="text" class="form-control" id="" placeholder="">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <div class="form-group">
                  <label>CNPJ</label>
                  <input type="text" class="form-control" id="" placeholder="">
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>E-mail</label>
                  <input type="text" class="form-control" id="" placeholder="">
                </div>
              </div>
            </div>
          </form>
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
