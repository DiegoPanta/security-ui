<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Header -->
    <header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
    <div class="container">
      <router-link to="/dashboard" class="navbar-brand">Dashboard</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav w-100">
          <!-- Left-aligned links -->
          <div class="d-flex w-100">
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard/clientes" class="nav-link">Clientes</router-link>
            </li>
          </div>
          <!-- Right-aligned logout -->
          <div class="ms-auto">
            <li class="nav-item">
              <button @click="handleLogout" class="btn btn-link nav-link">Logout</button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</header>

    <!-- Content -->
    <main class="mt-5 pt-5 flex-grow-1">
      <router-view /> <!-- Dynamic content will be loaded here -->
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3 mt-5">
      <p>© 2025 Seu Nome ou Empresa. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const handleLogout = () => {
  localStorage.removeItem('authToken');
  router.push('/');
};
</script>

<style scoped>

</style>
