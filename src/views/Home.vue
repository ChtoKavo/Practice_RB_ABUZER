<template>
  <div class="page">
    <div class="hero-banner">
      <img :src="bannerImage" alt="Banner" class="banner-image">
    </div>

    <div class="content-wrapper">
      <header class="header">
        <div class="header-content">
          <div class="logo">
            <img :src="logo" alt="Рецепты с душой" class="logo-image">
          </div>
          <div class="search-bar">
            <input type="text" placeholder="НАЙТИ РЕЦЕПТ" class="search-input">
          </div>
          <div class="user-actions">
            <button class="icon-button favorites">
              <img :src="fav" class="action-icon">
            </button>
            <button class="icon-button profile">
              <img :src="person" class="action-icon">
            </button>
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
        <h2 class="section-title">НОВЫЕ РЕЦЕПТЫ</h2>
        <div class="recipes-grid">
          <div v-for="recipe in recipes" :key="recipe.title" class="recipe-card">
            <div class="recipe-image-container">
              <img v-if="recipe.image" :src="recipe.image" :alt="recipe.title" class="recipe-image">
              <div v-else class="recipe-image placeholder">Изображение скоро появится</div>
              <button class="favorite-button">★</button>
            </div>
            <h3 class="recipe-title">{{ recipe.title }}</h3>
            <p class="recipe-author">{{ recipe.author }}</p>
          </div>
        </div>
      </main>
    </div>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Контакты</h3>
          <p>Email: info@example.com</p>
          <p>Телефон: +7 (999) 123-45-67</p>
        </div>
        <div class="footer-section">
          <h3>Адрес</h3>
          <p>ул. Примерная, 123</p>
          <p>Город, 123456</p>
        </div>
        <div class="footer-section">
          <h3>Соцсети</h3>
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Instagram</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Все права защищены</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import logo from '../assets/Логотип.svg'
import bannerImage from '../assets/Представление.png'
import person from '../assets/person.png'
import fav from '../assets/fav.png'
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

const recipes = [
  { image: kartofelVarenaya, title: 'КАРТОШКА ВАРЕНАЯ', author: 'ИЛЬИНА АННА' },
  { image: kartofelMundir, title: 'КАРТОШКА В МУНДИРЕ', author: 'ИЛЬИНА АННА' },
  { image: kartofelMundirSyr, title: 'КАРТОША В МУНДИРЕ С СЫРОМ', author: 'ИЛЬИНА АННА' },
  { image: kartofelChips, title: 'КАРТОФЕЛЬНЫЕ ЧИПСЫ', author: 'ИЛЬИНА АННА' },
  { title: 'КАРТОФЕЛЬНОЕ ПЮРЕ', author: 'ИЛЬИНА АННА' },
  { image: kartofelZhar, title: 'ЖАРЕННАЯ КАРТОШКА', author: 'ИЛЬИНА АННА' },
  { image: kartofelDuhovka, title: 'КАРТОШКА В ДУХОВКЕ С ГРИБАМИ', author: 'ИЛЬИНА АННА' },
  { image: kartofelFri, title: 'КАРТОШКА ФРИ', author: 'ИЛЬИНА АННА' },
  { image: kartofelGarmoshka, title: 'КАРТОШКА-ГАРМОШКА', author: 'ИЛЬИНА АННА' },
  { image: kartofelZapekanka, title: 'КАРТОФЕЛЬНАЯ ЗАПЕКАНКА С ФАРШЕМ', author: 'ИЛЬИНА АННА' },
  { image: kartofelSalat, title: 'САЛАТ ИЗ МОЛОДОГО КАРТОФЕЛЯ', author: 'ИЛЬИНА АННА' },
  { image: kartofelTushenaya, title: 'ТУШЕНАЯ КАРТОШКА С ЛУКОМ, В СМЕТАНЕ', author: 'ИЛЬИНА АННА' }
]
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #fff;
  position: relative;
}

.hero-banner {
  width: 100%;
  height: 400px; /* Фиксированная высота для баннера */
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

.header {
  background-color: #FF5722;
  padding: 1rem 0;
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
  justify-content: space-between;
  padding: 0 2rem;
  height: 100%;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 120px;
}

.logo-image {
  height: 45px;
  width: auto;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.logo:hover .logo-image {
  transform: scale(1.05);
}

.search-bar {
  flex-grow: 1;
  max-width: 600px;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  background-color: #FFF5F2;
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
  position: relative;
}

.icon-button:hover {
  transform: scale(1.1);
}

.action-icon {
  height: 28px;
  width: 28px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.banner-title {
  font-size: 3.5rem;
  color: #FF5722;
  font-weight: bold;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
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
  background-color: #2c3e50;
  color: white;
  padding: 3rem 2rem 1rem;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.social-link:hover {
  opacity: 1;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}

@media (max-width: 768px) {
  .header {
    padding: 0.8rem 0;
  }

  .header-content {
    flex-wrap: wrap;
    padding: 0 1rem;
    gap: 1rem;
  }

  .search-bar {
    order: 3;
    min-width: 100%;
    margin: 0.5rem 0;
  }

  .logo {
    min-width: auto;
  }

  .logo-image {
    height: 35px;
  }

  .user-actions {
    min-width: auto;
    gap: 1rem;
  }

  .action-icon {
    height: 24px;
    width: 24px;
  }

  .nav-container {
    flex-wrap: wrap;
    gap: 1rem;
  }
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
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-image-container {
  position: relative;
  padding-top: 75%; /* 4:3 Aspect Ratio */
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
}
</style> 