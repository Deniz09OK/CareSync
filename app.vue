<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
    <TheHeader />
    
    <main>
      <NuxtPage />
    </main>
    
    <TheFooter />
  </div>
</template>

<script setup>
// Configuration de la palette de couleurs chaleureuse
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  meta: [
    { name: 'theme-color', content: '#7dd3fc' }
  ]
})
</script>