<template>
  <div class="page">
    <Header />
    
    <main class="main-content">
      <div class="about-hero">
        <h1 class="hero-title">О нашей компании</h1>
        <p class="hero-subtitle">Создаем будущее вместе с вами</p>
      </div>

      <div class="about-content">
        <section class="about-section">
          <h2 class="section-title">Наша история</h2>
          <p class="section-text">
            Основанная в 2019 году, наша компания прошла путь от небольшой команды энтузиастов до лидера в своей области. 
            Мы постоянно развиваемся и внедряем новые технологии, чтобы предоставлять нашим клиентам лучшие решения.
          </p>
        </section>

        <section class="about-section team-section">
          <h2 class="section-title">Наша команда</h2>
          <div class="team-grid">
            <div class="team-member">
              <div class="member-avatar">👨‍💼</div>
              <h3>Иван Петров</h3>
              <p>Генеральный директор</p>
            </div>
            <div class="team-member">
              <div class="member-avatar">👩‍💼</div>
              <h3>Анна Сидорова</h3>
              <p>Технический директор</p>
            </div>
            <div class="team-member">
              <div class="member-avatar">👨‍💻</div>
              <h3>Михаил Козлов</h3>
              <p>Ведущий разработчик</p>
            </div>
          </div>
        </section>

        <section class="about-section values-section">
          <h2 class="section-title">Наши ценности</h2>
          <div class="values-grid">
            <div class="value-card">
              <h3>Качество</h3>
              <p>Мы не идем на компромиссы когда дело касается качества наших услуг</p>
            </div>
            <div class="value-card">
              <h3>Инновации</h3>
              <p>Постоянно следим за новыми технологиями и внедряем их в работу</p>
            </div>
            <div class="value-card">
              <h3>Команда</h3>
              <p>Наши сотрудники - наша главная ценность</p>
            </div>
          </div>
        </section>
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

.about-hero {
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

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
  text-align: center;
}

.section-text {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #34495e;
  text-align: justify;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.team-member {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.member-avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.team-member h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.team-member p {
  color: #7f8c8d;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.value-card {
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.value-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.value-card p {
  color: #34495e;
  line-height: 1.6;
}

.footer {
  background-color: #2c3e50;
  color: white;
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
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

  .section-title {
    font-size: 2rem;
  }

  .team-grid,
  .values-grid {
    grid-template-columns: 1fr;
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