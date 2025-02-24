<template>
  <div class="clients-container">
    <h1>Cadastrar Cliente</h1>
    <!-- Exibindo o formulário de cadastro de clientes -->
    <ClientForm />
  </div>
</template>

<script setup lang="ts">
import ClientForm from '../components/ClientForm.vue';
</script>

<style scoped>
.clients-container {
  padding: 20px;
}
</style>
