<template>
  <div class="container-fluid d-flex justify-content-center align-items-center vh-100 bg-success bg-gradient bg-opacity-75">
    <div class="card shadow mx-auto col-6 col-sm-8 col-md-6 col-lg-4">
      <div class="card-body">
        <h3 class="card-title text-center mb-4">Login</h3>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Digite seu email"
              v-model="email"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100" :disabled="isSubmitting">
            {{ isSubmitting ? "Logging in..." : "Login" }}
          </button>
        </form>
        <div v-if="errorMessage" class="mt-3 text-danger text-center">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// Variáveis reativas
const email = ref<string>("");
const errorMessage = ref<string>("");
const isSubmitting = ref<boolean>(false);
  const router = useRouter();

// Função para validar email
const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Função de login
const handleLogin = async (): Promise<void> => {
  errorMessage.value = "";

  if (!validateEmail(email.value)) {
    errorMessage.value = "Please enter a valid email address";
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await fetch("http://localhost:5183/api/auth/request-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.token) {
      throw new Error("No token received from server");
    }

    localStorage.setItem("authToken", data.token);
    alert("Login successful! Token stored.");
    // Redireciona para o dashboard após login bem-sucedido
    router.push("/dashboard");
  } catch (error) {
    console.error("Login error:", error);
    errorMessage.value = "Failed to login. Try again later.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
</style>
