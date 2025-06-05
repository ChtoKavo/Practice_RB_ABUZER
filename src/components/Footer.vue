<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-logo">
          <img :src="logo" alt="Рецепты с Башей" class="footer-logo-image">
        </div>
        <div class="social-links">
          <a href="#" class="social-link"><img :src="vkIcon" alt="VK"></a>
          <a href="#" class="social-link"><img :src="okIcon" alt="OK"></a>
          <a href="#" class="social-link"><img :src="telegramIcon" alt="Telegram"></a>
          <a href="#" class="social-link"><img :src="youtubeIcon" alt="YouTube"></a>
        </div>
      </div>
      
      <div class="footer-right">
        <div class="footer-sections">
          <div class="footer-section">
            <h3 class="footer-heading">СТРАНИЦЫ</h3>
            <ul class="footer-links">
              <li><router-link to="/" class="footer-link">ГЛАВНАЯ</router-link></li>
              <li><router-link to="/catalog" class="footer-link">КАТАЛОГ</router-link></li>
              <li><router-link to="/favorites" class="footer-link">ИЗБРАННОЕ</router-link></li>
              <li><router-link to="/profile" class="footer-link">ПРОФИЛЬ</router-link></li>
              <li><router-link to="/admin" class="footer-link admin-link" style="display: block;" @click="handleAdminClick">АДМИН ПАНЕЛЬ</router-link></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3 class="footer-heading">ДОКУМЕНТАЦИЯ</h3>
            <ul class="footer-links">
              <li><router-link to="/terms" class="footer-link">УСЛОВИЯ ПОЛЬЗОВАТЕЛЯ</router-link></li>
              <li><router-link to="/privacy" class="footer-link">УСЛОВИЯ ИСПОЛЬЗОВАНИЯ</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import logo from '../assets/Логотип.svg'
import vkIcon from '../assets/vk.svg'
import okIcon from '../assets/ok.svg'
import telegramIcon from '../assets/telegram.svg'
import youtubeIcon from '../assets/youtube.svg'

const router = useRouter()

const handleAdminClick = () => {
  router.push('/admin')
}
</script>

<style scoped>
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

.footer-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
}

.footer-right {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  margin-bottom: 0;
}

.footer-logo-image {
  height: 350px;
  width: auto;
  margin-left: -20px;
}

.footer-sections {
  display: flex;
  justify-content: flex-start;
  gap: 4rem;
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
  transition: all 0.3s ease;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
}

.footer-link:hover {
  opacity: 0.8;
}

.footer-link.router-link-active {
  background-color: #FFDCB7;
  color: #FF5722;
}

.footer-link.router-link-exact-active {
  background-color: #FFDCB7;
  color: #FF5722;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-left: 1rem;
  transform: translate(20px, -150px);
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

.admin-link {
  color: #D32701 !important;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
}

.admin-link.router-link-active {
  background-color: #FFDCB7 !important;
  color: #FF5722 !important;
}

.admin-link:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-logo-image {
    height: 250px;
  }

  .footer-sections {
    flex-direction: column;
    gap: 2rem;
  }
}
</style> 