<template>
  <div class="register-page">
    <div class="register-container">
      <h1 class="register-title">РЕГИСТРАЦИЯ</h1>
      
      <form class="register-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <input 
            type="text" 
            v-model="fullName" 
            class="register-input"
            placeholder="ФИО"
          >
        </div>
        
        <div class="form-group">
          <input 
            type="tel" 
            v-model="phone" 
            class="register-input"
            placeholder="ТЕЛЕФОН"
          >
        </div>

        <div class="form-group">
          <input 
            type="email" 
            v-model="email" 
            class="register-input"
            placeholder="EMAIL"
          >
        </div>

        <div class="privacy-policy">
          <label class="policy-label">
            <input 
              type="checkbox" 
              v-model="acceptPolicy"
              class="policy-checkbox"
            >
            <span class="policy-text">
              Я ПРИНИМАЮ ПОЛИТИКУ КОНФИДИЦИАЛЬНОСТИ.
            </span>
          </label>
        </div>

        <button 
          type="submit" 
          class="register-button"
          :disabled="!isFormValid"
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </button>

        <div class="auth-section">
          <router-link to="/auth" class="auth-link">АВТОРИЗАЦИЯ</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const fullName = ref('')
const phone = ref('')
const email = ref('')
const acceptPolicy = ref(false)

const isFormValid = computed(() => {
  return fullName.value && 
         phone.value && 
         email.value && 
         acceptPolicy.value
})

const handleSubmit = () => {
  if (isFormValid.value) {
    // In a real app, you would send registration data to the server
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/profile')
  }
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background-color: #FCE5CD;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.register-container {
  background-color: #FFDCB7;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.register-title {
  color: #8B0000;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.register-input {
  padding: 1rem;
  border: 2px solid #FF5722;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #FCE5CD;
  color: #333;
  transition: border-color 0.3s ease;
}

.register-input::placeholder {
  color: #8B0000;
  opacity: 0.7;
}

.register-input:focus {
  outline: none;
  border-color: #8B0000;
}

.privacy-policy {
  margin: 1rem 0;
}

.policy-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
}

.policy-checkbox {
  margin-top: 0.25rem;
}

.policy-text {
  color: #8B0000;
  font-size: 0.9rem;
  line-height: 1.4;
}

.register-button {
  background-color: #8B0000;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-button:hover {
  background-color: #660000;
}

.register-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.auth-section {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.auth-link {
  color: #8B0000;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.3s ease;
}

.auth-link:hover {
  opacity: 0.8;
}

@media (max-width: 480px) {
  .register-container {
    padding: 1.5rem;
  }

  .register-title {
    font-size: 1.75rem;
  }

  .register-input {
    padding: 0.875rem;
  }
}
</style> 