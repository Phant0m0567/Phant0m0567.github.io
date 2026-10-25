import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueParticles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'
import router from './router'
import App from './app.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueParticles, {
  init: async (engine) => {
    await loadSlim(engine)
  },
})

app.mount('#app')