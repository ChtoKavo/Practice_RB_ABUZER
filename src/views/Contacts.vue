<template>
  <div class="page">
    <Header />
    
    <main class="main-content">
      <div class="contact-hero">
        <h1 class="hero-title">Свяжитесь с нами</h1>
        <p class="hero-subtitle">Мы всегда рады помочь вам</p>
      </div>

      <div class="contact-content">
        <div class="contact-grid">
          <div class="contact-form-section">
            <h2 class="section-title">Напишите нам</h2>
            <form class="contact-form">
              <div class="form-group">
                <label for="name">Ваше имя</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="message">Сообщение</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="submit-button">Отправить</button>
            </form>
          </div>

          <div class="contact-info-section">
            <h2 class="section-title">Контактная информация</h2>
            <div class="contact-info">
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-content">
                  <h3>Адрес</h3>
                  <p>ул. Примерная, 123</p>
                  <p>Город, 123456</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div class="info-content">
                  <h3>Телефон</h3>
                  <p>+7 (999) 123-45-67</p>
                  <p>Пн-Пт: 9:00 - 18:00</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">✉️</div>
                <div class="info-content">
                  <h3>Email</h3>
                  <p>info@example.com</p>
                  <p>support@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #2c3e50;
  padding: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
}

.nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #34495e;
  transform: translateY(-2px);
}

.main-content {
  padding-top: 4rem;
  flex: 1;
}

.contact-hero {
  background: linear-gradient(135deg, #3498db, #2c3e50);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease 0.2s;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}

.submit-button {
  background-color: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.submit-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.info-icon {
  font-size: 2rem;
}

.info-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.info-content p {
  color: #34495e;
  margin-bottom: 0.3rem;
}

.footer {
  background-color: #2c3e50;
  color: white;
  padding: 3rem 2rem 1rem;
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style> 