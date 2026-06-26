import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/icon', '@nuxtjs/i18n'],
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
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'sr', language: 'sr-Latn', name: 'Srpski', file: 'sr.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: false
  }
})
