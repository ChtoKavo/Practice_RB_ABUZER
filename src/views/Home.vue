<template>
  <div class="page">
    <div class="hero-banner">
      <img :src="bannerImage" alt="Banner" class="banner-image">
    </div>

    <div class="content-wrapper">
      <Header />

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
        <h2 class="section-title">НОВЫЕ РЕЦЕПТЫ</h2>
        <div class="recipes-grid">
          <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card" @click="navigateToRecipe(recipe.id)">
            <div class="recipe-image-container">
              <img v-if="recipe.image" :src="recipe.image" :alt="recipe.title" class="recipe-image">
              <div v-else class="recipe-image placeholder">Изображение скоро появится</div>
              <button class="favorite-button" @click.stop>★</button>
            </div>
            <h3 class="recipe-title">{{ recipe.title }}</h3>
            <p class="recipe-author">{{ recipe.author }}</p>
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
                <li><a href="#" class="footer-link">ГЛАВНАЯ</a></li>
                <li><a href="#" class="footer-link">КАТАЛОГ</a></li>
                <li><a href="#" class="footer-link">ИЗБРАННОЕ</a></li>
                <li><a href="#" class="footer-link">ПРОФИЛЬ</a></li>
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import logo from '../assets/Логотип.svg'
import bannerImage from '../assets/Представление.png'
import vkIcon from '../assets/vk.svg'
import okIcon from '../assets/ok.svg'
import telegramIcon from '../assets/telegram.svg'
import youtubeIcon from '../assets/youtube.svg'
import kartofelVarenaya from '../assets/Картошка_вареная.png'
import kartofelMundir from '../assets/Картошка_в_мундире.png'
import kartofelMundirSyr from '../assets/Картошка_в_мундире_с_сыром.png'
import kartofelChips from '../assets/Картофельные_чипсы.png'
import kartofelZhar from '../assets/Жареная_картошка.png'
import kartofelDuhovka from '../assets/Картошка_в_духовке.png'
import kartofelFri from '../assets/Картошка_фри.png'
import kartofelGarmoshka from '../assets/Картошка_гармошка.png'
import kartofelZapekanka from '../assets/Картофельная_запеканка_с_фаршем.png'
import kartofelSalat from '../assets/Салат_из_молодого_картофеля.png'
import kartofelTushenaya from '../assets/Тушеная_картошка_с_луком.png'

const router = useRouter()

const recipes = [
  { id: 1, image: kartofelVarenaya, title: 'КАРТОШКА ВАРЕНАЯ', author: 'ИЛЬИНА АННА' },
  { id: 2, image: kartofelMundir, title: 'КАРТОШКА В МУНДИРЕ', author: 'ИЛЬИНА АННА' },
  { id: 3, image: kartofelMundirSyr, title: 'КАРТОШКА В МУНДИРЕ С СЫРОМ', author: 'ИЛЬИНА АННА' },
  { id: 4, image: kartofelChips, title: 'КАРТОФЕЛЬНЫЕ ЧИПСЫ', author: 'ИЛЬИНА АННА' },
  { id: 5, title: 'КАРТОФЕЛЬНОЕ ПЮРЕ', author: 'ИЛЬИНА АННА' },
  { id: 6, image: kartofelZhar, title: 'ЖАРЕННАЯ КАРТОШКА', author: 'ИЛЬИНА АННА' },
  { id: 7, image: kartofelDuhovka, title: 'КАРТОШКА В ДУХОВКЕ С ГРИБАМИ', author: 'ИЛЬИНА АННА' },
  { id: 8, image: kartofelFri, title: 'КАРТОШКА ФРИ', author: 'ИЛЬИНА АННА' },
  { id: 9, image: kartofelGarmoshka, title: 'КАРТОШКА-ГАРМОШКА', author: 'ИЛЬИНА АННА' },
  { id: 10, image: kartofelZapekanka, title: 'КАРТОФЕЛЬНАЯ ЗАПЕКАНКА С ФАРШЕМ', author: 'ИЛЬИНА АННА' },
  { id: 11, image: kartofelSalat, title: 'САЛАТ ИЗ МОЛОДОГО КАРТОФЕЛЯ', author: 'ИЛЬИНА АННА' },
  { id: 12, image: kartofelTushenaya, title: 'ТУШЕНАЯ КАРТОШКА С ЛУКОМ, В СМЕТАНЕ', author: 'ИЛЬИНА АННА' }
]

const navigateToRecipe = (recipeId: number) => {
  router.push(`/recipe/${recipeId}`)
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #fff;
  position: relative;
}

.hero-banner {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.content-wrapper {
  position: relative;
  z-index: 2;
  background-color: transparent;
}

.main-nav {
  background-color: #FFF5F2;
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

.section-title {
  color: #8B0000;
  font-size: 24px;
  font-weight: bold;
  margin: 2rem 0;
  padding-left: 1rem;
  border-left: 4px solid #8B0000;
}

.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.recipe-card {
  background: white;
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

  .section-title {
    font-size: 20px;
    margin: 1.5rem 0;
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
}
</style> 