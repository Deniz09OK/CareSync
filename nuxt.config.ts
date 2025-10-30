// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss'
  ],

  // Import des styles globaux
  css: [
    '~/assets/css/main.css'
  ],

  // Configuration de l'application
  app: {
    head: {
      title: 'CareSync - Plateforme de Santé Connectée',
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'CareSync relie l\'observance médicamenteuse et la qualité de vie pour une prise en charge personnalisée des maladies chroniques.' 
        },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:title', content: 'CareSync - Plateforme de Santé Connectée' },
        { property: 'og:description', content: 'La première plateforme qui connecte votre traitement à votre bien-être.' },
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CareSync - Plateforme de Santé Connectée' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

})