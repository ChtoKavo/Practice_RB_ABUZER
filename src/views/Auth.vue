<template>
  <div class="auth-page">
    <div class="auth-container">
      <h1 class="auth-title">АВТОРИЗАЦИЯ</h1>
      
      <form class="auth-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <input 
            type="text" 
            v-model="emailOrPhone" 
            class="auth-input"
            placeholder="ТЕЛЕФОН/EMAIL"
          >
        </div>
        
        <div class="form-group">
          <input 
            type="password" 
            v-model="password" 
            class="auth-input password-input"
            placeholder="ПАРОЛЬ"
          >
        </div>

        <div class="forgot-password">
          <a href="#" class="forgot-link">ЗАБЫЛИ ПАРОЛЬ?</a>
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
          class="auth-button"
          :disabled="!isFormValid"
        >
          ВОЙТИ
        </button>

        <div class="register-section">
          <span class="or-text">ИЛИ</span>
          <router-link to="/register" class="register-link">ЗАРЕГИСТРИРОВАТЬСЯ</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const emailOrPhone = ref('')
const password = ref('')
const acceptPolicy = ref(false)

const isFormValid = computed(() => {
  return emailOrPhone.value && password.value && acceptPolicy.value
})

const handleSubmit = () => {
  if (isFormValid.value) {
    // In a real app, you would validate credentials here
    // For demo purposes, we'll just set the auth state
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/profile')
  }
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  background-color: #FCE5CD;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.auth-container {
  background-color: #FFDCB7;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.auth-title {
  color: #8B0000;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.auth-input {
  padding: 1rem;
  border: 2px solid #FF5722;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #FCE5CD;
  color: #333;
  transition: border-color 0.3s ease;
}

.auth-input::placeholder {
  color: #8B0000;
  opacity: 0.7;
}

.auth-input:focus {
  outline: none;
  border-color: #8B0000;
}

.password-input {
  border-color: #0078D7;
}

.forgot-password {
  text-align: left;
}

.forgot-link {
  color: #8B0000;
  text-decoration: none;
  font-size: 0.9rem;
  transition: opacity 0.3s ease;
}

.forgot-link:hover {
  opacity: 0.8;
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

.auth-button {
  background-color: #8B0000;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.auth-button:hover {
  background-color: #660000;
}

.auth-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.register-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.or-text {
  color: #8B0000;
  font-size: 0.9rem;
}

.register-link {
  color: #8B0000;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.3s ease;
}

.register-link:hover {
  opacity: 0.8;
}

@media (max-width: 480px) {
  .auth-container {
    padding: 1.5rem;
  }

  .auth-title {
    font-size: 1.75rem;
  }

  .auth-input {
    padding: 0.875rem;
  }
}
</style> 