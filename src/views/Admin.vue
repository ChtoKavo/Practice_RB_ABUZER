<template>
  <div class="admin-page">
    <div class="admin-container">
      <form class="recipe-form" @submit.prevent="handleSubmit">
        <div class="form-layout">
          <div class="left-column">
            <div class="form-group photo-upload">
              <label class="upload-label">
                <div class="upload-area">
                  <span v-if="!imagePreview" class="upload-text">ДОБАВИТЬ ФОТО</span>
                  <img v-else :src="imagePreview" class="image-preview" alt="Preview">
                </div>
                <input 
                  type="file" 
                  @change="handleImageUpload" 
                  accept="image/*"
                  class="file-input"
                >
              </label>
            </div>

            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.name" 
                class="form-input"
                placeholder="НАЗВАНИЕ"
              >
            </div>

            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.ingredients" 
                class="form-input"
                placeholder="ИНГРИДИЕНТЫ"
              >
            </div>

            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.cookingTime" 
                class="form-input"
                placeholder="ВРЕМЯ ПРИГОТОВЛЕНИЯ"
              >
            </div>

            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.cuisine" 
                class="form-input"
                placeholder="КУХНЯ МИРА"
              >
            </div>

            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.difficulty" 
                class="form-input"
                placeholder="СЛОЖНОСТЬ"
              >
            </div>

            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.method" 
                class="form-input"
                placeholder="СПОСОБ"
              >
            </div>

            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.season" 
                class="form-input"
                placeholder="СЕЗОН"
              >
            </div>

            <div class="form-group">
              <input 
                type="number" 
                v-model="formData.calories" 
                class="form-input"
                placeholder="КАЛОРИИ"
              >
            </div>
          </div>

          <div class="right-column">
            <div class="form-group instructions-group">
              <textarea 
                v-model="formData.instructions" 
                class="form-input instructions"
                placeholder="ИНСТРУКЦИЯ ПО ПРИГОТОВЛЕНИЮ"
                rows="30"
              ></textarea>
            </div>
          </div>
        </div>

        <button type="submit" class="submit-button">
          ДОБАВИТЬ РЕЦЕПТ
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const imagePreview = ref('')

const formData = reactive({
  name: '',
  ingredients: '',
  cookingTime: '',
  cuisine: '',
  difficulty: '',
  method: '',
  season: '',
  calories: '',
  instructions: ''
})

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    const file = target.files[0]
    const reader = new FileReader()
    reader.onload = e => {
      imagePreview.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const handleSubmit = () => {
  // Здесь будет логика отправки данных на сервер
  console.log('Form submitted:', formData)
  // После успешной отправки можно очистить форму или перенаправить пользователя
}
</script>

<style scoped>
.admin-page {
  min-height: 100vh;
  background-color: #FCE5CD;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.admin-container {
  width: 100%;
  max-width: 1200px;
  background-color: #FFDCB7;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.recipe-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-layout {
  display: flex;
  gap: 2rem;
}

.left-column {
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.instructions-group {
  height: 100%;
}

.photo-upload {
  margin-bottom: 1rem;
}

.upload-label {
  cursor: pointer;
  width: 100%;
}

.upload-area {
  width: 100%;
  height: 150px;
  border: 2px solid #FF5722;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FCE5CD;
  transition: all 0.3s ease;
}

.upload-text {
  color: #D32701;
  font-weight: bold;
  font-size: 1.1rem;
}

.file-input {
  display: none;
}

.image-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.form-input {
  padding: 0.8rem;
  border: 2px solid #FF5722;
  border-radius: 10px;
  font-size: 1rem;
  background-color: #FCE5CD;
  color: #333;
  transition: border-color 0.3s ease;
}

.form-input::placeholder {
  color: #D32701;
  font-weight: bold;
  opacity: 1;
}

.form-input:focus {
  outline: none;
  border-color: #D32701;
}

textarea.form-input {
  resize: none;
  height: 100%;
  min-height: 500px;
}

.submit-button {
  background-color: #D32701;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  width: 300px;
  align-self: center;
}

.submit-button:hover {
  background-color: #B71C1C;
}

@media (max-width: 768px) {
  .admin-page {
    padding: 1rem;
  }

  .admin-container {
    padding: 1.5rem;
  }

  .form-layout {
    flex-direction: column;
  }

  .left-column {
    flex: 1;
    width: 100%;
  }

  .submit-button {
    width: 100%;
  }
}
</style> 