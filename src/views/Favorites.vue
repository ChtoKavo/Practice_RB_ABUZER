<template>
  <div class="page">
    <Header />
    
    <main class="main-content">
      <h1 class="page-title">ИЗБРАННЫЕ РЕЦЕПТЫ</h1>
      <div class="recipes-grid">
        <div v-for="recipe in favoriteRecipes" :key="recipe.id" class="recipe-card" @click="navigateToRecipe(recipe.id)">
          <div class="recipe-image-container">
            <img v-if="recipe.image" :src="recipe.image" :alt="recipe.title" class="recipe-image">
            <div v-else class="recipe-image placeholder">Изображение скоро появится</div>
            <button class="favorite-button active" @click.stop>★</button>
          </div>
          <h3 class="recipe-title">{{ recipe.title }}</h3>
          <p class="recipe-author">{{ recipe.author }}</p>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import logo from '../assets/Логотип.svg'
import person from '../assets/person.png'
import fav from '../assets/fav.png'
import vkIcon from '../assets/vk.svg'
import okIcon from '../assets/ok.svg'
import telegramIcon from '../assets/telegram.svg'
import youtubeIcon from '../assets/youtube.svg'
import kartofelVarenaya from '../assets/Картошка_вареная.png'
import kartofelMundir from '../assets/Картошка_в_мундире.png'
import kartofelMundirSyr from '../assets/Картошка_в_мундире_с_сыром.png'

const router = useRouter()

// Пример избранных рецептов (в реальном приложении это будет динамический список)
const favoriteRecipes = [
  { id: 1, image: kartofelVarenaya, title: 'КАРТОШКА ВАРЕНАЯ', author: 'ИЛЬИНА АННА' },
  { id: 2, image: kartofelMundir, title: 'КАРТОШКА В МУНДИРЕ', author: 'ИЛЬИНА АННА' },
  { id: 3, image: kartofelMundirSyr, title: 'КАРТОШКА В МУНДИРЕ С СЫРОМ', author: 'ИЛЬИНА АННА' }
]

const navigateToRecipe = (recipeId: number) => {
  router.push(`/recipe/${recipeId}`)
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #FCE5CD;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.page-title {
  color: #FF5722;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.recipe-card {
  background: #FFDCB7;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  cursor: pointer;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-image-container {
  position: relative;
  padding-top: 75%;
  background: #f5f5f5;
}

.recipe-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  color: #666;
  font-size: 14px;
  padding: 1rem;
  text-align: center;
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #FF5722;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
}

.favorite-button.active {
  background: #FF5722;
  color: white;
}

.favorite-button:hover {
  transform: scale(1.1);
}

.recipe-title {
  padding: 1rem;
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.recipe-author {
  padding: 0 1rem 1rem;
  margin: 0;
  font-size: 14px;
  color: #666;
}

@media (max-width: 768px) {
  .recipes-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .page-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style> 