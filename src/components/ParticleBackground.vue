<script setup lang="ts">
import type { ISourceOptions } from '@tsparticles/engine'
import { onMounted, ref } from 'vue'

const options = ref<ISourceOptions>()

onMounted(async () => {
  const res = await fetch('/json/particles.json')
  options.value = await res.json()
})
</script>

<template>
  <vue-particles v-if="options" id="tsparticles" :options="options" />
</template>