export default defineNuxtConfig({
  css: ['@/assets/css/font.css', '@/assets/css/base.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'vumG3lz0YrkDtEwSRkr0Pwtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ]
})
