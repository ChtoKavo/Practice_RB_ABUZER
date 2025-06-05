<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view></router-view>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  line-height: 1.6;
  color: #2c3e50;
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: inherit;
}

.router-link-active {
  background-color: #34495e !important;
}

.page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 2rem;
}

@media (min-width: 1024px) {
  .main-content {
    padding: 2rem 5%;
  }
}

@media (min-width: 1440px) {
  .main-content {
    padding: 2rem 10%;
  }
}
</style>
