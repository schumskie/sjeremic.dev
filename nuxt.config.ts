import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    head: {
      title: 'Stefan Jeremic — Senior Software Engineer',
      meta: [
        { name: 'description', content: 'Senior Software Engineer specializing in Python, Vue.js, and Nuxt.js with 10+ years of experience.' }
      ]
    }
  }
})
