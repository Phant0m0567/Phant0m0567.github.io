<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
<div class="nav-bar">
  <RouterLink to="/" class="logo-container">
    <img src="/biglogo.webp" alt="logo" class="logo"/>
  </RouterLink>
  <div class="nav-items">
    <RouterLink to="/" class="nav-item mono">/~</RouterLink>
    <RouterLink to="/projects" class="nav-item mono">/projects</RouterLink>
    <RouterLink to="/partners" class="nav-item mono">/partners</RouterLink>
    <RouterLink to="/contact" class="nav-item mono">/contact</RouterLink>
  </div>
</div>
</template>

<style scoped>
.nav-bar {
  height: 80px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(150 114 255 / 0.2);
}

.logo {
  height: 90%;
    -webkit-user-select: none;
    -ms-user-select: none;    
    user-select: none; 
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: transparent;
}

.logo-container {
  width: 20%;
  height: 80px;
}

.nav-items {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.nav-item {
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-item.router-link-exact-active {
  color: #7710ff;
}

.nav-item.active {
  color: #7710ff;
}

.nav-item:hover {
  color: #7710ff;
  text-decoration: underline;
}
</style>