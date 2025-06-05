<template>
  <div class="page">
    <div class="content-wrapper">
      <header class="header">
        <div class="header-content">
          <div class="search-bar">
            <input type="text" placeholder="НАЙТИ РЕЦЕПТ" class="search-input">
          </div>
          <div class="user-actions">
            <router-link to="/favorites" class="icon-button favorites">
              <img :src="fav" class="action-icon">
            </router-link>
            <router-link to="/profile" class="icon-button profile">
              <img :src="person" class="action-icon">
            </router-link>
          </div>
        </div>
      </header>

      <nav class="main-nav">
        <div class="nav-container">
          <router-link to="/first" class="nav-link">ПЕРВОЕ</router-link>
          <router-link to="/second" class="nav-link">ВТОРОЕ</router-link>
          <router-link to="/desserts" class="nav-link">ДЕСЕРТЫ</router-link>
          <router-link to="/salads" class="nav-link">САЛАТЫ</router-link>
          <router-link to="/snacks" class="nav-link">ЗАКУСКИ</router-link>
          <router-link to="/drinks" class="nav-link">НАПИТКИ</router-link>
        </div>
      </nav>

      <main class="main-content">
        <div class="recipe-container">
          <div class="recipe-header">
            <div class="recipe-title-section">
              <h1 class="recipe-title">{{ recipe.title }}</h1>
              <div class="recipe-meta">
                <div class="recipe-author">
                  <img :src="person" class="author-avatar">
                  <span>{{ recipe.author }}</span>
                </div>
                <div class="recipe-stats">
                  <div class="stat">
                    <img :src="clockIcon" class="stat-icon">
                    <span>{{ recipe.cookingTime }}</span>
                  </div>
                  <div class="stat">
                    <img :src="portionIcon" class="stat-icon">
                    <span>{{ recipe.portions }}</span>
                  </div>
                  <div class="stat calories">
                    <span class="kcal">{{ recipe.calories }} ККАЛ</span>
                    <span class="per-100g">100 Г - {{ recipe.caloriesPer100g }} ККАЛ</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="recipe-actions">
              <button class="action-button favorite">
                <img :src="fav" class="action-icon">
              </button>
              <button class="action-button share">
                <img :src="shareIcon" class="action-icon">
              </button>
            </div>
          </div>

          <div class="recipe-content">
            <div class="recipe-main-image">
              <img :src="recipe.image" :alt="recipe.title" class="main-image">
            </div>

            <div class="recipe-details">
              <div class="ingredients-section">
                <h2 class="section-title">ИНГРЕДИЕНТЫ</h2>
                <div class="ingredients-table">
                  <div class="ingredients-header">
                    <span>НАЗВАНИЕ</span>
                    <span>КОЛИЧЕСТВО</span>
                  </div>
                  <div class="ingredients-list">
                    <div v-for="ingredient in recipe.ingredients" 
                         :key="ingredient.name" 
                         class="ingredient-item">
                      <span class="ingredient-name">{{ ingredient.name }}</span>
                      <span class="ingredient-amount">{{ ingredient.amount }}</span>
                    </div>
                  </div>
                </div>
                <div class="portions-calculator">
                  <span class="portions-label">КОЛ-ВО ПОРЦИЙ:</span>
                  <div class="portions-controls">
                    <button class="portion-btn" @click="decreasePortions">-</button>
                    <span class="portions-value">{{ currentPortions }}</span>
                    <button class="portion-btn" @click="increasePortions">+</button>
                  </div>
                </div>
              </div>

              <div class="instructions-section">
                <h2 class="section-title">ИНСТРУКЦИЯ ПРИГОТОВЛЕНИЯ</h2>
                <ol class="instructions-list">
                  <li v-for="(instruction, index) in recipe.instructions" 
                      :key="index" 
                      class="instruction-step">
                    <p>{{ instruction }}</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img :src="logo" alt="Рецепты с Башей" class="footer-logo-image">
        </div>
        
        <div class="footer-sections-wrapper">
          <div class="footer-sections">
            <div class="footer-section">
              <h3 class="footer-heading">СТРАНИЦЫ</h3>
              <ul class="footer-links">
                <li><router-link to="/" class="footer-link">ГЛАВНАЯ</router-link></li>
                <li><router-link to="/catalog" class="footer-link">КАТАЛОГ</router-link></li>
                <li><router-link to="/favorites" class="footer-link">ИЗБРАННОЕ</router-link></li>
                <li><router-link to="/profile" class="footer-link">ПРОФИЛЬ</router-link></li>
              </ul>
            </div>

            <div class="footer-section">
              <h3 class="footer-heading">ДОКУМЕНТАЦИЯ</h3>
              <ul class="footer-links">
                <li><a href="#" class="footer-link">УСЛОВИЯ ПОЛЬЗОВАТЕЛЯ</a></li>
                <li><a href="#" class="footer-link">УСЛОВИЯ ИСПОЛЬЗОВАНИЯ</a></li>
              </ul>
            </div>
          </div>

          <div class="social-links">
            <a href="#" class="social-link"><img :src="vkIcon" alt="VK"></a>
            <a href="#" class="social-link"><img :src="okIcon" alt="OK"></a>
            <a href="#" class="social-link"><img :src="telegramIcon" alt="Telegram"></a>
            <a href="#" class="social-link"><img :src="youtubeIcon" alt="YouTube"></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../assets/Логотип.svg'
import person from '../assets/person.png'
import fav from '../assets/fav.png'
import vkIcon from '../assets/vk.svg'
import okIcon from '../assets/ok.svg'
import telegramIcon from '../assets/telegram.svg'
import youtubeIcon from '../assets/youtube.svg'
import clockIcon from '../assets/clock.svg'
import portionIcon from '../assets/portion.svg'
import shareIcon from '../assets/share.svg'
import recipeImage from '../assets/Картошка_в_мундире.png'

const route = useRoute()
const recipeId = route.params.id

const currentPortions = ref(4)
const basePortions = 4

const increasePortions = () => {
  currentPortions.value++
}

const decreasePortions = () => {
  if (currentPortions.value > 1) {
    currentPortions.value--
  }
}

// В реальном приложении здесь будет запрос к API для получения данных рецепта
const recipe = ref({
  id: recipeId,
  title: 'КАРТОШКА В МУНДИРЕ',
  author: 'ИЛЬИНА АННА',
  cookingTime: '45 МИН',
  portions: '4 ПОРЦИИ',
  calories: '487.3',
  caloriesPer100g: '487.3',
  image: recipeImage,
  ingredients: [
    { name: 'Картофель', amount: '1 кг' },
    { name: 'Соль', amount: 'по вкусу' },
    { name: 'Масло сливочное', amount: '50 г' },
    { name: 'Укроп', amount: 'по вкусу' }
  ],
  instructions: [
    'Тщательно вымойте картофель, удалите все загрязнения щеткой.',
    'Залейте картофель холодной водой в кастрюле и поставьте на огонь.',
    'После закипания посолите воду и варите картофель 20-25 минут до готовности.',
    'Проверьте готовность картофеля вилкой - она должна легко входить в клубень.',
    'Слейте воду и дайте картофелю немного остыть.',
    'Подавайте со сливочным маслом и рубленым укропом.'
  ]
})
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #FCE5CD;
  position: relative;
}

.content-wrapper {
  position: relative;
  z-index: 2;
  background-color: transparent;
}

.header {
  background-color: #FF5722;
  padding: 1.2rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  height: 100%;
  gap: 2rem;
}

.search-bar {
  flex-grow: 0;
  width: 600px;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  background-color: #FCE5CD;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.search-input:focus {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.search-input::placeholder {
  color: #FF5722;
  font-weight: 500;
}

.user-actions {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  min-width: 120px;
  justify-content: flex-end;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.icon-button:hover {
  transform: scale(1.1);
}

.action-icon {
  height: 35px;
  width: 35px;
  object-fit: contain;
  filter: invert(15%) sepia(75%) saturate(4605%) hue-rotate(355deg) brightness(89%) contrast(101%);
}

.main-nav {
  background-color: #FFDCB7;
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0 2rem;
}

.nav-link {
  color: #FF5722;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: opacity 0.3s ease;
}

.nav-link:hover {
  opacity: 0.8;
}

.main-content {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

.recipe-container {
  background: #FFDCB7;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.recipe-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.recipe-title-section {
  flex: 1;
}

.recipe-title {
  color: #FF5722;
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
}

.recipe-meta {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.recipe-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.recipe-stats {
  display: flex;
  gap: 1.5rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stat-icon {
  width: 24px;
  height: 24px;
}

.recipe-actions {
  display: flex;
  gap: 1rem;
}

.action-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.2s ease;
}

.action-button:hover {
  transform: scale(1.1);
}

.recipe-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.recipe-main-image {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recipe-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-title {
  color: #FF5722;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.ingredients-table {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.ingredients-header {
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0.8rem 1rem;
  background: #FF5722;
  color: white;
  font-weight: bold;
}

.ingredients-list {
  padding: 0.5rem 0;
}

.ingredient-item {
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.ingredient-item:last-child {
  border-bottom: none;
}

.ingredient-name {
  color: #333;
  font-weight: 500;
}

.ingredient-amount {
  color: #666;
  text-align: right;
}

.instructions-list {
  padding-left: 1.5rem;
}

.instruction-step {
  margin-bottom: 1rem;
  color: #333;
}

.instruction-step p {
  margin: 0;
  line-height: 1.6;
}

.portions-calculator {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
}

.portions-label {
  color: #333;
  font-weight: 500;
}

.portions-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.portion-btn {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: #FF5722;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.portion-btn:hover {
  background: #f4511e;
}

.portions-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  min-width: 2ch;
  text-align: center;
}

.footer {
  background-color: #FF5722;
  padding: 3rem 0;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 600px 1fr;
  gap: 2rem;
  align-items: start;
}

.footer-logo {
  margin-bottom: 0;
}

.footer-logo-image {
  height: 350px;
  width: auto;
  margin-left: -20px;
}

.footer-sections-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-sections {
  display: flex;
  justify-content: flex-start;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-heading {
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  line-height: 2;
  transition: opacity 0.2s ease;
}

.footer-link:hover {
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.2s ease;
}

.social-link:hover {
  transform: scale(1.1);
}

.social-link img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.calories {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
}

.kcal {
  font-weight: bold;
  color: #FF5722;
}

.per-100g {
  font-size: 0.8rem;
  color: #666;
}

@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
    padding: 0 1rem;
    gap: 1rem;
  }

  .search-bar {
    order: 3;
    width: 100%;
    margin: 0.5rem 0;
  }

  .user-actions {
    min-width: auto;
    gap: 1rem;
  }

  .nav-container {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .recipe-content {
    grid-template-columns: 1fr;
  }

  .recipe-header {
    flex-direction: column;
    gap: 1rem;
  }

  .recipe-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .recipe-title {
    font-size: 2rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-logo {
    margin: 0 auto;
  }

  .footer-logo-image {
    margin-left: 0;
  }

  .footer-sections {
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .social-links {
    justify-content: center;
  }

  .ingredients-header,
  .ingredient-item {
    padding: 0.6rem 0.8rem;
  }

  .portions-calculator {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }

  .portions-controls {
    justify-content: center;
  }
}
</style> 