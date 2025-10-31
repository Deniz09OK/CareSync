<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden section-padding bg-gradient-to-br from-white via-sky-50 to-emerald-50">
      <!-- Formes décoratives animées -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-soft" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse-soft" style="animation-delay: 2s;"></div>
        
        <!-- Particules flottantes -->
        <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-sky-400 rounded-full opacity-40 animate-ping" style="animation-duration: 3s;"></div>
        <div class="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-40 animate-ping" style="animation-duration: 4s; animation-delay: 1s;"></div>
        <div class="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-ping" style="animation-duration: 5s; animation-delay: 2s;"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center animate-fade-in-up">
          <span class="inline-block px-6 py-3 bg-white/80 backdrop-blur-sm shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600 rounded-full text-sm font-bold mb-8 border-2 border-sky-100 animate-pulse-soft">
            Restons en contact
          </span>
          
          <h1 class="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Contactez
            <span class="gradient-text block mt-2 animate-fade-in" style="animation-delay: 0.2s;">l'équipe CareSync</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12 animate-fade-in" style="animation-delay: 0.4s;">
            Une question sur le projet ? Envie d'en savoir plus ? <strong class="text-sky-600">Nous sommes là pour vous répondre</strong>
          </p>
        </div>
      </div>

      <!-- Vague décorative animée -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    <!-- L'équipe Section -->
    <section class="section-padding bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- En-tête section -->
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-sky-100 to-emerald-200 text-sky-700 rounded-full text-sm font-semibold mb-4">
              Notre équipe
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              Qui sommes-nous <span class="gradient-text">?</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois étudiants passionnés d'EPITECH qui travaillent ensemble pour révolutionner la e-santé
            </p>
          </div>

          <!-- Cartes équipe -->
          <div class="grid md:grid-cols-3 gap-8 lg:gap-10 mb-20">
            
            <!-- Claire-Estelle Zobo -->
            <div class="group bg-gradient-to-br from-sky-50 to-white p-8 rounded-3xl border-2 border-sky-100 hover:border-sky-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 animate-fade-in-up">
              <div class="text-center">
                <!-- Avatar avec initiales -->
                <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-sky-400/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span class="text-3xl font-bold text-white">CZ</span>
                </div>
                
                <h3 class="text-2xl font-bold mb-2 text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
                  Claire-Estelle Zobo
                </h3>
                
                <p class="text-gray-600 mb-6 text-sm group-hover:text-gray-700 transition-colors">Étudiante EPITECH</p>
                
                <!-- Boutons de contact -->
                <div class="space-y-3">
                  <a 
                    href="mailto:claire-estelle.zobo@epitech.eu" 
                    class="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-white border-2 border-sky-200 text-sky-600 rounded-xl hover:bg-sky-50 hover:border-sky-400 transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:scale-105 group/btn"
                  >
                    <svg class="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                    <span class="text-sm">Email</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/claire-estelle-zobo/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-sky-600 text-white rounded-xl hover:bg-sky-700 transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:shadow-sky-500/50 hover:scale-105 group/btn"
                  >
                    <svg class="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span class="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Michel Banckaert -->
            <div class="group bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 animate-fade-in-up" style="animation-delay: 0.2s;">
              <div class="text-center">
                <!-- Avatar avec initiales -->
                <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-emerald-400/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span class="text-3xl font-bold text-white">MB</span>
                </div>
                
                <h3 class="text-2xl font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                  Michel Banckaert
                </h3>
                
                <p class="text-gray-600 mb-6 text-sm group-hover:text-gray-700 transition-colors">Étudiant EPITECH</p>
                
                <!-- Boutons de contact -->
                <div class="space-y-3">
                  <a 
                    href="mailto:michel.banckaert@epitech.eu" 
                    class="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-white border-2 border-emerald-200 text-emerald-600 rounded-xl hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:scale-105 group/btn"
                  >
                    <svg class="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                    <span class="text-sm">Email</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/michel-banckaert-54-devweb/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105 group/btn"
                  >
                    <svg class="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span class="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Deniz OK -->
            <div class="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105 animate-fade-in-up" style="animation-delay: 0.4s;">
              <div class="text-center">
                <!-- Avatar avec initiales -->
                <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-400/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span class="text-3xl font-bold text-white">DO</span>
                </div>
                
                <h3 class="text-2xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  Deniz OK
                </h3>
                
                <p class="text-gray-600 mb-6 text-sm group-hover:text-gray-700 transition-colors">Étudiant EPITECH</p>
                
                <!-- Boutons de contact -->
                <div class="space-y-3">
                  <a 
                    href="mailto:deniz.ok@epitech.eu" 
                    class="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-white border-2 border-purple-200 text-purple-600 rounded-xl hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 font-semibold shadow-md hover:shadow-lg hover:scale-105 group/btn"
                  >
                    <svg class="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                    <span class="text-sm">Email</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/deniz-ok/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all duration-300 font-semibold shadow-md hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 group/btn"
                  >
                    <svg class="w-5 h-5 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span class="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Section informations complémentaires -->
    <section class="section-padding bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            
            <!-- Email direct -->
            <div class="group text-center p-8 bg-gradient-to-br from-sky-50 to-white rounded-3xl border-2 border-sky-100 shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in-up">
              <div class="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-sky-400/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg class="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-sky-600 transition-colors">Email</h3>
              <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                Contactez-nous directement par email pour toute question
              </p>
            </div>

            <!-- LinkedIn -->
            <div class="group text-center p-8 bg-gradient-to-br from-emerald-50 to-white rounded-3xl border-2 border-emerald-100 shadow-lg hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in-up" style="animation-delay: 0.2s;">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-emerald-400/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg class="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">LinkedIn</h3>
              <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                Connectez-vous avec nous sur LinkedIn pour suivre nos actualités
              </p>
            </div>

            <!-- EPITECH -->
            <div class="group text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-3xl border-2 border-purple-100 shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:scale-105 animate-fade-in-up" style="animation-delay: 0.4s;">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-400/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg class="w-9 h-9 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">EPITECH</h3>
              <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                Projet de fin d'études réalisé à EPITECH Nancy
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="section-padding relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900">
            <span class="block">Envie d'en savoir plus sur <span class="gradient-text whitespace-nowrap">CareSync ?</span></span>
          </h2>
          
          <p class="text-xl lg:text-2xl mb-12 text-gray-700 leading-relaxed">
            Découvrez notre projet complet et nos fonctionnalités innovantes
          </p>

          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <NuxtLink 
              to="/projet" 
              class="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold text-lg rounded-2xl hover:from-sky-600 hover:to-emerald-600 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span>Découvrir le projet</span>
              <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>

            <NuxtLink 
              to="/fonctionnalites" 
              class="group inline-flex items-center space-x-3 px-10 py-5 bg-white border-2 border-gray-300 text-gray-900 font-bold text-lg rounded-2xl hover:border-sky-500 hover:text-sky-600 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
              </svg>
              <span>Les fonctionnalités</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact - CareSync',
  meta: [
    { 
      name: 'description', 
      content: 'Contactez l\'équipe CareSync pour toute question sur notre projet de plateforme de santé connectée. Claire-Estelle Zobo, Michel Banckaert et Deniz OK sont à votre écoute.' 
    }
  ]
})
</script>