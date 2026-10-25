<script setup lang="ts">
import ParticleBackground from '@/components/ParticleBackground.vue';
import { RouterView } from 'vue-router';
import NavBar from "@/components/NavBar.vue";
import { Neko, NekoSizeVariations } from "neko-ts";

(function titleScroller(text) {
  document.title = text;
  setTimeout(function () {
    titleScroller(text.substr(1) + text.substr(0, 1));
  }, 500);
}(   "Phant0m's Bio "));

let neko: Neko | null = null;
document.addEventListener("DOMContentLoaded", () => {
  neko = new Neko({
    nekoId: 1,
    nekoSize: NekoSizeVariations.SMALL,
    speed: 1
  });
});
</script>

<template>
  <main class="app-container">
    <div class="primary-container">
      <NavBar />
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
    <ParticleBackground class="bg"/>
  </main>
</template>

<style scoped>
:global(body) {
  margin: 0;
  font-family: 'Inter', sans-serif;
}

:global(.mono) {
  font-family: 'JetBrains Mono', monospace;
}

.app-container {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 0;
}

.primary-container {
  height: 100%;
  width: 100%;
  z-index: 1;
  max-width: 896px;
  border-bottom: 0;
  border-top: 0;
  padding: 0 20px;
  background: #0c0b19;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #151329;
}

:global(.page-enter-active),
:global(.page-leave-active) {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

:global(.page-enter-from) {
  opacity: 0;
  transform: translateY(8px);
}

:global(.page-leave-to) {
  opacity: 0;
  transform: translateY(-8px);
}

</style>