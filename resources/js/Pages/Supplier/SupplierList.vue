<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import SupplierHead from "./Partials/SupplierHead.vue";
import LinkButton from "../../Components/LinkButton.vue"
</script>


<template>
  <Head title="Fornecedores" />

  <AuthenticatedLayout>

    <SupplierHead />

    <!-- Main content -->
    <section class="content">
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Lista de Fornecedores</h3>

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
          <table class="table table-striped projects">
            <thead>
              <tr>
                <th style="width: 20%">Fornecedor</th>
                <th style="width: 30%">Team Members</th>
                <th>Project Progress</th>
                <th style="width: 8%" class="text-center">Status</th>
                <th style="width: 20%"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a> AdminLTE v3 </a>
                  <br />
                  <small> Created 01.01.2019 </small>
                </td>
                <td>
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <img alt="Avatar" class="table-avatar" src="" />
                    </li>
                    <li class="list-inline-item">
                      <img alt="Avatar" class="table-avatar" src="" />
                    </li>
                    <li class="list-inline-item">
                      <img alt="Avatar" class="table-avatar" src="" />
                    </li>
                    <li class="list-inline-item">
                      <img alt="Avatar" class="table-avatar" src="" />
                    </li>
                  </ul>
                </td>
                <td class="project_progress">
                  <div class="progress progress-sm">
                    <div
                      class="progress-bar bg-green"
                      role="progressbar"
                      aria-valuenow="57"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 57%"
                    ></div>
                  </div>
                  <small> 57% Complete </small>
                </td>
                <td class="project-state">
                  <span class="badge badge-success">Success</span>
                </td>
                <td class="project-actions text-right">
                  <a class="btn btn-primary btn-sm" href="#">
                    <i class="fas fa-folder"> </i>
                    View
                  </a>
                  <a class="btn btn-info btn-sm" href="#">
                    <i class="fas fa-pencil-alt"> </i>
                    Edit
                  </a>
                  <a class="btn btn-danger btn-sm" href="#">
                    <i class="fas fa-trash"> </i>
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer">
          <LinkButton class="btn-primary float-right" href="/fornecedor/create">
            Novo
          </LinkButton>
        </div>
      </div>
    </section>
  </AuthenticatedLayout>
</template>
