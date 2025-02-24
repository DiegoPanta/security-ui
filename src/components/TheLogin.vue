<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="max-width: 400px; width: 100%">
      <h3 class="text-center mb-3">Login</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="email"
            required
            placeholder="Enter your email"
          />
          <div v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</div>
        </div>
        <button type="submit" class="btn btn-primary w-100" :disabled="isSubmitting">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const errorMessage = ref('')
const isSubmitting = ref(false)

const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

const handleLogin = async () => {
  errorMessage.value = ''

  if (!validateEmail(email.value)) {
    errorMessage.value = 'Please enter a valid email address'
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch('http://localhost:5183/api/auth/request-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
      }),
    })

    const data = await response.json() // Extract JSON response

    if (!response.ok) {
      throw new Error(data.message || 'Failed to login')
    }

    if (!data.token) {
      throw new Error('No token received from server')
    }

    // Store token in localStorage
    localStorage.setItem('authToken', data.token)

    alert(`Login successful! Token stored.`)
  } catch (error) {
    console.error('Login error:', error)
    errorMessage.value = 'Failed to login. Try again later.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.card {
  border-radius: 8px;
}
</style>
