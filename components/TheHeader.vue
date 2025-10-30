<template>
  <header class="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-sky-100 shadow-sm">
    <nav class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="w-12 h-12 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div class="hidden sm:block">
            <span class="text-2xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
              CareSync
            </span>
            <p class="text-xs text-gray-500 -mt-1">Votre santé, notre priorité</p>
          </div>
        </NuxtLink>

        <!-- Navigation Desktop -->
        <div class="hidden md:flex items-center space-x-1">
          <NuxtLink 
            v-for="link in navigation" 
            :key="link.to"
            :to="link.to"
            class="px-4 py-2 rounded-xl text-gray-600 hover:text-sky-600 hover:bg-sky-50 font-medium transition-all duration-200"
            active-class="text-sky-600 bg-sky-50"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-sky-50 transition-colors"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-sky-100"
      >
        <div class="flex flex-col space-y-2">
          <NuxtLink 
            v-for="link in navigation" 
            :key="link.to"
            :to="link.to"
            @click="mobileMenuOpen = false"
            class="px-4 py-3 rounded-lg text-gray-600 hover:text-sky-600 hover:bg-sky-50 font-medium transition-all"
            active-class="text-sky-600 bg-sky-50"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink 
            to="/contact"
            @click="mobileMenuOpen = false"
            class="mx-4 px-6 py-3 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold rounded-xl text-center hover:shadow-lg transition-all"
          >
            Nous rejoindre
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const navigation = [
  { label: 'Accueil', to: '/' },
  { label: 'Le Projet', to: '/projet' },
  { label: 'Fonctionnalités', to: '/fonctionnalites' },
  { label: 'L\'Équipe', to: '/equipe' },
  { label: 'Contact', to: '/contact' }
]

// Fermer le menu mobile lors du changement de route
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>