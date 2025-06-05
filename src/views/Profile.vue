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
        <h1 class="page-title">ЛИЧНЫЙ КАБИНЕТ</h1>
        
        <div class="profile-section">
          <div class="profile-info">
            <div class="profile-image-container">
              <img :src="userImage" alt="Фото профиля" class="profile-image">
            </div>
            <div class="profile-details">
              <h2 class="profile-name">ИЛЬИНА АННА</h2>
              <button class="edit-profile-button">
                <img :src="editIcon" alt="Редактировать" class="edit-icon">
              </button>
            </div>
          </div>

          <div class="recipes-section">
            <h3 class="section-title">РЕЦЕПТЫ КОТОРЫЕ ВЫЛОЖИЛИ</h3>
            <div class="recipes-grid">
              <div v-for="recipe in userRecipes" :key="recipe.title" class="recipe-card">
                <div class="recipe-image-container">
                  <img v-if="recipe.image" :src="recipe.image" :alt="recipe.title" class="recipe-image">
                  <div v-else class="recipe-image placeholder">Изображение скоро появится</div>
                  <div class="recipe-actions">
                    <button class="recipe-action edit">✎</button>
                    <button class="recipe-action delete">×</button>
                  </div>
                </div>
                <h3 class="recipe-title">{{ recipe.title }}</h3>
                <p class="recipe-author">{{ recipe.author }}</p>
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
import { ref } from 'vue'
import logo from '../assets/Логотип.svg'
import person from '../assets/person.png'
import fav from '../assets/fav.png'
import vkIcon from '../assets/vk.svg'
import okIcon from '../assets/ok.svg'
import telegramIcon from '../assets/telegram.svg'
import youtubeIcon from '../assets/youtube.svg'
import editIcon from '../assets/edit.svg'
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

// Временное решение для аватара пользователя
const userImage = person

const userRecipes = [
  { image: kartofelVarenaya, title: 'КАРТОШКА ВАРЕНАЯ', author: 'ИЛЬИНА АННА' },
  { image: kartofelMundir, title: 'КАРТОШКА В МУНДИРЕ', author: 'ИЛЬИНА АННА' },
  { image: kartofelMundirSyr, title: 'КАРТОШКА В МУНДИРЕ С СЫРОМ', author: 'ИЛЬИНА АННА' },
  { image: kartofelChips, title: 'КАРТОФЕЛЬНЫЕ ЧИПСЫ', author: 'ИЛЬИНА АННА' },
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

.page-title {
  color: #FF5722;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.profile-section {
  background: #FFDCB7;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.profile-image-container {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #FF5722;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-details {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-name {
  color: #333;
  font-size: 1.5rem;
  margin: 0;
}

.edit-profile-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.edit-icon {
  width: 24px;
  height: 24px;
  opacity: 0.6;
}

.section-title {
  color: #FF5722;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.recipe-card {
  background: #FCE5CD;
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

.recipe-actions {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 0.5rem;
}

.recipe-action {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
}

.recipe-action.edit {
  background: #FF5722;
  color: white;
}

.recipe-action.delete {
  background: white;
  color: #FF5722;
}

.recipe-action:hover {
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

  .action-icon {
    height: 30px;
    width: 30px;
  }

  .nav-container {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .profile-info {
    flex-direction: column;
    text-align: center;
  }

  .profile-details {
    justify-content: center;
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