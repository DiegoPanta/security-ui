<template>
  <div class="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card shadow mx-auto col-6 col-sm-8 col-md-6 col-lg-4">
      <div class="card-body">
        <h3 class="card-title text-center mb-4">Enter MFA Code</h3>
        <form @submit.prevent="handleVerify">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter MFA Code"
              v-model="code"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary w-100" :disabled="isSubmitting">
            {{ isSubmitting ? 'Verifying...' : 'Verify' }}
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const code = ref<string>('')
const errorMessage = ref<string>('')
const isSubmitting = ref<boolean>(false)
const router = useRouter()

const handleVerify = async (): Promise<void> => {
  errorMessage.value = ''
  isSubmitting.value = true

  try {
    // Retrieve the email stored during login
    const email = localStorage.getItem('email')
    if (!email) {
      errorMessage.value = 'Email not found, please log in again.'
      return
    }

    const response = await fetch('http://localhost:5183/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code: code.value }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()

    if (!data.token) {
      throw new Error('No token received from server')
    }

    localStorage.setItem('authToken', data.token)
    alert('MFA verification successful!')
    // Redirect to the dashboard after successful login
    router.push('/dashboard')
  } catch (error) {
    console.error('Verification error:', error)
    errorMessage.value = 'Failed to verify code. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Optional: add styles as needed */
</style>
