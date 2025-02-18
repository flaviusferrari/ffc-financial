<script setup>
import { reactive } from 'vue'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, router } from "@inertiajs/vue3";
import ProviderHead from "./Partials/ProviderHead.vue";
import InputForm from "@/Components/InputForm.vue";

const form = reactive({
  first_name: null,
  last_name: null,
  email: null,
})

function submit() {
  // router.post('/fornecedores', form)
  console.log(form);
}
</script>


<template>
  <Head title="Fornecedores" />

  <AuthenticatedLayout>
    <ProviderHead />

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
          <form @submit.prevent="submit">
            <div class="row">
              <!-- RAZÃO SOCIAL -->
              <div class="col-8">
                <InputForm label="Razão Social" name="social_name"></InputForm>
              </div>
              <!-- NOME FANTASIA-->
              <div class="col-4">
                <InputForm
                  label="Nome Fantasia"
                  name="fantasi_name"
                ></InputForm>
              </div>
            </div>

            <div class="row">
              <!-- CEP -->
              <div class="col-2">
                <InputForm label="CEP" name="cep"></InputForm>
              </div>
              <!-- Endereço -->
              <div class="col-6">
                <InputForm label="Endereço" name="address"></InputForm>
              </div>
              <!-- Número -->
              <div class="col-2">
                <InputForm label="Número" name="number"></InputForm>
              </div>
              <!-- Complemento -->
              <div class="col-2">
                <InputForm label="Complemento" name="complement"></InputForm>
              </div>
            </div>

            <div class="row">
              <!-- Bairro -->
              <div class="col-6">
                <InputForm label="Bairro" name="neighborhood"></InputForm>
              </div>
              <!-- Cidade -->
              <div class="col-3">
                <InputForm label="Cidade" name="city"></InputForm>
              </div>
              <!-- Estado -->
              <div class="col-3">
                <InputForm label="Estado" name="state"></InputForm>
              </div>
            </div>

            <div class="row">
              <!-- CNPJ -->
              <div class="col-3">
                <InputForm label="CNPJ" name="cnpj"></InputForm>
              </div>
              <!-- E-mail -->
              <div class="col-6">
                <InputForm label="E-mail" name="email" placeholder="E-mail"></InputForm>
              </div>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-success float-right">
            <i class="fas fa-plus"></i> Cadastrar
          </button>
        </div>
      </div>
    </section>
  </AuthenticatedLayout>
</template>
