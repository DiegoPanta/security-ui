<template>
  <div class="container mt-5">
    <form @submit.prevent="handleSubmit">
      <!-- First Row (Nome and Email) -->
      <div class="row mb-3">
        <!-- Name Field -->
        <div class="col-md-6">
          <label for="name" class="form-label">Nome</label>
          <input
            v-model="cliente.name"
            type="text"
            id="name"
            class="form-control"
            required
          />
        </div>

        <!-- Email Field -->
        <div class="col-md-6">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="cliente.email"
            type="email"
            id="email"
            class="form-control"
            required
          />
        </div>
      </div>

      <!-- Second Row (Telefone and Data de Nascimento) -->
      <div class="row mb-3">
        <!-- Phone Field -->
        <div class="col-md-6">
          <label for="phone" class="form-label">Telefone</label>
          <input
            v-model="cliente.phone"
            type="text"
            id="phone"
            class="form-control"
            required
          />
        </div>

        <!-- Birth Date Field -->
        <div class="col-md-6">
          <label for="birthDate" class="form-label">Data de Nascimento</label>
          <input
            v-model="cliente.birthDate"
            type="date"
            id="birthDate"
            class="form-control"
            required
          />
        </div>
      </div>

      <!-- Active Checkbox -->
      <div class="mb-3 form-check">
        <input
          v-model="cliente.active"
          type="checkbox"
          id="active"
          class="form-check-input"
        />
        <label class="form-check-label" for="active">
          Ativo
        </label>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary" :disabled="isSubmitting">Cadastrar</button>
    </form>

    <!-- Error Message -->
    <div v-if="errorMessage" class="mt-3 text-danger">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Cliente {
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  active: boolean;
}

const cliente = ref<Cliente>({
  name: '',
  email: '',
  phone: '',
  birthDate: '',
  active: true,
});
const isSubmitting = ref<boolean>(false);
const errorMessage = ref<string>('');

const handleSubmit = async () => {
    errorMessage.value = '';
    isSubmitting.value = true;

    const token = localStorage.getItem('authToken');

    if (!token) {
      errorMessage.value = 'Token de autenticação inválido ou não encontrado.';
      isSubmitting.value = false;
      return;
    }

    try {
    const response = await fetch('http://localhost:5183/api/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(cliente.value),
    });

    if (!response.ok) {
      throw new Error('Falha ao cadastrar cliente.');
    }

    const data = await response.json();
    alert('Cliente cadastrado com sucesso!');
    console.log(data);
  } catch (error) {
    console.error('Erro:', error);
    alert('Falha ao cadastrar cliente.');
  }
};
</script>

<style scoped>
</style>
