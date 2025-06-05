<template>
  <header class="header">
    <div class="header-content">
      <div class="search-bar">
        <input type="text" placeholder="НАЙТИ РЕЦЕПТ" class="search-input">
      </div>
      <div class="user-actions">
        <router-link to="/favorites" class="icon-button favorites">
          <img :src="fav" class="action-icon">
        </router-link>
        <router-link to="/auth" class="icon-button profile">
          <img :src="person" class="action-icon">
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import person from '../assets/person.png'
import fav from '../assets/fav.png'

const router = useRouter()
</script>

<style scoped>
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
}
</style> 