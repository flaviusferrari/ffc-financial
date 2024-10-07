<script setup>
import { Link } from "@inertiajs/vue3";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
</script>

<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img
        src=""
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="" class="img-circle elevation-2" alt="User Image" />
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ $page.props.auth.user.name }}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <Link href="/" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              Dashbord
            </Link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Active Page</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inactive Page</p>
                </a>
              </li>
            </ul>
          </li>
          <!-- CADASTROS -->
          <Dropdown>
            <template #trigger>
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-user"></i>
                <p>
                  Cadastros
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
            </template>

            <template #content>
              <!-- Fornecedores -->
              <DropdownLink :href="route('fornecedor.index')">
                <i class="far fa-circle nav-icon"></i>
                <p>Fornecedores</p>
              </DropdownLink>

              <!-- Bancos -->
              <DropdownLink :href="route('profile.edit')">
                <i class="far fa-circle nav-icon"></i>
                <p>Bancos</p>
              </DropdownLink>

              <!-- FINANCEIRO -->
              <Dropdown>
                <template #trigger>
                  <a href="#" class="nav-link" style="background-color: #323440">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      Financeiro
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </a>
                </template>

                <template #content>
                  <DropdownLink :href="route('profile.edit')" class="mp-10" style="background-color: #494f75">
                    <i class="far fa-dot-circle nav-icon"></i>
                    <p >Centro de Custo</p>
                  </DropdownLink>
                  <DropdownLink :href="route('profile.edit')" class="mp-10" style="background-color: #494f75">
                    <i class="far fa-dot-circle nav-icon"></i>
                    <p >Grupos</p>
                  </DropdownLink>
                  <DropdownLink :href="route('profile.edit')" class="mp-10" style="background-color: #494f75">
                    <i class="far fa-dot-circle nav-icon"></i>
                    <p >Categorias</p>
                  </DropdownLink>
                </template>
              </Dropdown>
            </template>
          </Dropdown>

          <!-- FINANCEIRO -->
          <Dropdown>
            <template #trigger>
              <a href="#" class="nav-link">
                <i class="nav-icon far fa-money-bill-alt"></i>
                <p>
                  Financeiro
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
            </template>

            <template #content>
              <!-- LANÇAMENTOS -->
              <DropdownLink :href="route('profile.edit')">
                <i class="far fa-circle nav-icon"></i>
                <p>Lançamentos</p>
              </DropdownLink>
              <Dropdown>
                <template #trigger>
                  <a href="#" class="nav-link" style="background-color: #323440">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      Contas
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </a>
                </template>

                <template #content>
                  <!-- CONTAS A PAGAR -->
                  <DropdownLink :href="route('profile.edit')" class="mp-10" style="background-color: #494f75">
                    <i class="far fa-dot-circle nav-icon"></i>
                    <p >Pagar</p>
                  </DropdownLink>
                  <!-- CONTAS A RECEBER -->
                  <DropdownLink :href="route('profile.edit')" class="mp-10" style="background-color: #494f75">
                    <i class="far fa-dot-circle nav-icon"></i>
                    <p >Receber</p>
                  </DropdownLink>
                </template>
              </Dropdown>
            </template>
          </Dropdown>

          <!-- RELATÓRIOS -->
          <Dropdown>
            <template #trigger>
              <a href="#" class="nav-link">
                <i class="fas fa-file-alt"></i>&nbsp;
                <p>
                  Relatórios
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
            </template>

            <template #content>
              <!-- Fluxo de Caixa -->
              <DropdownLink :href="route('profile.edit')">
                <i class="far fa-circle nav-icon"></i>
                <p>Fluxo de Caixa</p>
              </DropdownLink>
            </template>
          </Dropdown>
        </ul>
      </nav>
    </div>
  </aside>
</template>