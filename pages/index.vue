<template>
  <div>
    <!-- Hero Section E -->
    <section class="relative overflow-hidden section-padding bg-gradient-to-br from-caresync-sky-50 via-white to-caresync-emerald-50">
      <!-- Formes décoratives animées -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-soft" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse-soft" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-sky-400 rounded-full opacity-40 animate-ping" style="animation-duration: 3s;"></div>
        <div class="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full opacity-40 animate-ping" style="animation-duration: 4s; animation-delay: 1s;"></div>
        <div class="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-ping" style="animation-duration: 5s; animation-delay: 2s;"></div>
      </div>
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Contenu texte -->
          <div class="space-y-8 animate-fade-in-up">
            <div class="inline-block">
              <span class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-sky-100 to-emerald-100 text-sky-700 rounded-full text-sm font-semibold shadow-sm mb-4">
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
                </svg>
                Innovation en e-santé
              </span>
            </div>

            <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
              Votre santé,
              <span class="gradient-text block">notre innovation</span>
            </h1>

            <p class="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
              La première plateforme qui <strong>relie votre traitement à votre bien-être</strong> pour une prise en charge véritablement personnalisée.
            </p>

            <!-- Stats rapides ES -->
            <div class="grid grid-cols-3 gap-6 pt-6">
              <div class="text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
                <div class="text-4xl font-bold gradient-text">+25%</div>
                <div class="text-sm font-medium text-gray-600 mt-2">Observance</div>
              </div>
              <div class="text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
                <div class="text-4xl font-bold gradient-text">360°</div>
                <div class="text-sm font-medium text-gray-600 mt-2">Vision patient</div>
              </div>
              <div class="text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 hover:scale-105">
                <div class="text-4xl font-bold gradient-text">IA</div>
                <div class="text-sm font-medium text-gray-600 mt-2">Corrélations</div>
              </div>
            </div>

            <!-- CTA Button  -->
            <div>
              <NuxtLink 
                to="/projet" 
                class="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-lg font-bold rounded-2xl hover:shadow-2xl hover:scale-105 hover:shadow-sky-500/50 transition-all duration-300 shadow-xl"
              >
                <span>Découvrir le projet</span>
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Illustration / Visuel  -->
          <div class="relative lg:h-[600px] flex items-center justify-center animate-fade-in">
            <div class="relative w-full max-w-lg">
              <!-- Cercle décoratif animé -->
              <div class="absolute inset-0 bg-gradient-to-br from-caresync-sky-300/30 to-caresync-emerald-300/30 rounded-full blur-3xl animate-pulse-soft"></div>
              
              <!-- Carte mockup -->
              <div class="relative space-y-6">
                <!-- App Patient -->
                <div class="card-glass p-8 rounded-3xl transform rotate-3 hover:rotate-0 transition-all duration-300 hover:shadow-2xl border-2 border-white/50">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="w-14 h-14 bg-gradient-to-br from-caresync-sky-400 to-caresync-emerald-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-lg text-gray-800">App Patient</h3>
                      <p class="text-sm text-gray-500">Suivi quotidien simplifié</p>
                    </div>
                  </div>
                  <div class="space-y-3">
                    <div class="h-3 bg-gradient-to-r from-caresync-sky-200 to-caresync-emerald-200 rounded-full shadow-sm"></div>
                    <div class="h-3 bg-gradient-to-r from-caresync-sky-200 to-caresync-emerald-200 rounded-full w-3/4 shadow-sm"></div>
                    <div class="h-3 bg-gradient-to-r from-caresync-sky-200 to-caresync-emerald-200 rounded-full w-1/2 shadow-sm"></div>
                  </div>
                </div>

                <!-- Dashboard Médecin -->
                <div class="card-glass p-8 rounded-3xl transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:shadow-2xl border-2 border-white/50">
                  <div class="flex items-center space-x-4 mb-6">
                    <div class="w-14 h-14 bg-gradient-to-br from-caresync-emerald-400 to-caresync-sky-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-lg text-gray-800">Dashboard Médecin</h3>
                      <p class="text-sm text-gray-500">Vision 360° du patient</p>
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-3">
                    <div class="h-20 bg-gradient-to-br from-caresync-emerald-200 to-caresync-sky-200 rounded-2xl shadow-sm"></div>
                    <div class="h-20 bg-gradient-to-br from-caresync-sky-200 to-caresync-emerald-200 rounded-2xl shadow-sm"></div>
                    <div class="h-20 bg-gradient-to-br from-caresync-emerald-200 to-caresync-sky-200 rounded-2xl shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Forme décorative -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    <!-- Le Problème  -->
    <section class="section-padding bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <span class="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4">
            Le constat actuel
          </span>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Un constat <span class="gradient-text">préoccupant</span>
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Dans le suivi des maladies chroniques, deux problématiques majeures persistent
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Problème 1  -->
          <div class="group bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl card-hover border-2 border-red-100 hover:border-red-300 transition-all shadow-lg">
            <div class="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xl">
              <svg class="w-11 h-11 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors">Manque d'observance</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              De nombreux patients <strong>oublient leurs médicaments</strong>, ne respectent pas les horaires ou arrêtent leur traitement prématurément, conduisant à des échecs thérapeutiques.
            </p>
          </div>

          <!-- Problème 2  -->
          <div class="group bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl card-hover border-2 border-purple-100 hover:border-purple-300 transition-all shadow-lg">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-xl">
              <svg class="w-11 h-11 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">Manque de visibilité</h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              Entre deux consultations, le médecin dispose de <strong>peu d'informations</strong> sur le vécu réel du patient, rendant l'ajustement du traitement difficile.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Solution E -->
    <section class="section-padding bg-gradient-to-br from-caresync-sky-50 to-caresync-emerald-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-20">
          <span class="inline-block px-4 py-2 bg-gradient-to-r from-sky-100 to-emerald-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
            Notre solution innovante
          </span>
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            CareSync : <span class="gradient-text">la solution</span>
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Une plateforme complète qui connecte patients et médecins pour un suivi optimal
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Feature 1 - Rappels Intelligents  -->
          <div class="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl card-hover border-2 border-sky-100 hover:border-sky-300 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
              <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-sky-600 transition-colors">Rappels Intelligents</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Des notifications personnalisées pour ne jamais oublier une prise de médicament.
            </p>
          </div>

          <!-- Feature 2 - Journal de Vie  -->
          <div class="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl card-hover border-2 border-emerald-100 hover:border-emerald-300 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
              <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-emerald-600 transition-colors">Journal de Vie</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Enregistrez vos symptômes, humeur et événements en moins d'une minute par jour.
            </p>
          </div>

          <!-- Feature 3  -->
          <div class="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl card-hover border-2 border-purple-100 hover:border-purple-300 transition-all">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
              <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">IA Prédictive</h3>
            <p class="text-gray-600 text-lg leading-relaxed">
              Des corrélations automatiques entre votre traitement et votre bien-être.
            </p>
          </div>
        </div>

        <!-- CTA Central  -->
        <div class="text-center mt-16">
          <NuxtLink 
            to="/fonctionnalites" 
            class="group inline-flex items-center space-x-3 text-sky-600 text-lg font-bold hover:text-emerald-600 transition-colors bg-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <span>Découvrir toutes les fonctionnalités</span>
            <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- L'Innovation IA E -->
    <section class="section-padding bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span class="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                Intelligence Artificielle
              </span>
              <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                L'innovation qui fait <span class="gradient-text">la différence</span>
              </h2>
              <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                Notre moteur d'intelligence artificielle ne se contente pas de collecter des données : <strong>il les connecte</strong> pour générer des insights actionnables.
              </p>

              <div class="space-y-6">
                <div class="flex items-start space-x-5 p-6 bg-sky-50 rounded-2xl border-2 border-sky-100 hover:border-sky-300 transition-all hover:shadow-lg">
                  <div class="flex-shrink-0 w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-800 text-lg italic leading-relaxed">
                      "Vos douleurs diminuent de <strong class="text-sky-600">60%</strong> les jours où vous prenez votre traitement à heure fixe."
                    </p>
                  </div>
                </div>

                <div class="flex items-start space-x-5 p-6 bg-emerald-50 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-lg">
                  <div class="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-800 text-lg italic leading-relaxed">
                      "Votre anxiété augmente les jours où vous oubliez votre dose du matin."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="bg-white p-10 rounded-3xl shadow-2xl border-2 border-gray-100">
                <div class="flex items-center justify-between mb-8">
                  <h4 class="text-xl font-bold text-gray-800">Corrélations détectées</h4>
                  <span class="inline-flex items-center text-xs bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold shadow-sm">
                    <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                    Temps réel
                  </span>
                </div>
                <div class="space-y-6">
                  <div>
                    <div class="flex justify-between mb-3">
                      <span class="text-base font-medium text-gray-600">Observance</span>
                      <span class="text-base font-bold text-sky-600">92%</span>
                    </div>
                    <div class="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <div class="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full shadow-sm" style="width: 92%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between mb-3">
                      <span class="text-base font-medium text-gray-600">Bien-être</span>
                      <span class="text-base font-bold text-emerald-600">85%</span>
                    </div>
                    <div class="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <div class="h-full bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full shadow-sm" style="width: 85%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between mb-3">
                      <span class="text-base font-medium text-gray-600">Réduction symptômes</span>
                      <span class="text-base font-bold text-purple-600">+40%</span>
                    </div>
                    <div class="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <div class="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-sm" style="width: 40%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Appel à l'action  -->
    <section class="section-padding relative overflow-hidden bg-gradient-to-t from-[#F5FEF8] to-white text-gray-800">
      <div class="absolute inset-0 bg-gradient-to-t from-[#F5FEF8]/90 to-transparent"></div>
      
      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <!-- En-tête  -->
        <div class="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Soutenez l'innovation <br class="hidden md:block" />
            <span class="gradient-text">en santé</span>
          </h2>
          
          <p class="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Aidez-nous à <strong>transformer le suivi des maladies chroniques</strong> grâce à l'intelligence artificielle et une approche centrée sur l'humain.
          </p>
        </div>

        <!-- Points clés s -->
        <div class="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          <!-- Card 1 -->
          <div class="group bg-white/70 backdrop-blur-md p-8 rounded-3xl border-2 border-sky-100 hover:border-sky-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
              <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-800 group-hover:text-sky-600 transition-colors">
              Innovation Technique
            </h3>
            <p class="text-gray-600 text-base text-center leading-relaxed">
              IA de corrélation avancée entre traitement et bien-être du patient
            </p>
          </div>

          <!-- Card 2 -->
          <div class="group bg-white/70 backdrop-blur-md p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
              <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-800 group-hover:text-emerald-600 transition-colors">
              Impact Social
            </h3>
            <p class="text-gray-600 text-base text-center leading-relaxed">
              Amélioration concrète de la qualité de vie des patients chroniques
            </p>
          </div>

          <!-- Card 3 -->
          <div class="group bg-white/70 backdrop-blur-md p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
              <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-center text-gray-800 group-hover:text-purple-600 transition-colors">
              Équipe Motivée
            </h3>
            <p class="text-gray-600 text-base text-center leading-relaxed">
              Développeurs passionnés prêts à révolutionner la e-santé
            </p>
          </div>
        </div>

        <!-- CTA Buttons s -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink 
            to="/projet" 
            class="group px-10 py-5 bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-lg font-bold rounded-2xl hover:shadow-2xl hover:scale-105 hover:shadow-sky-500/50 transition-all duration-300 inline-flex items-center space-x-3 shadow-xl"
          >
            <span>En savoir plus sur le projet</span>
            <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          
          <a
            href="https://github.com/Deniz09OK/CareSync"
            target="_blank"
            rel="noopener noreferrer"
            class="group px-10 py-5 bg-white/90 backdrop-blur-sm border-2 border-gray-800 text-gray-800 text-lg font-bold rounded-2xl hover:bg-gray-800 hover:text-white hover:scale-105 transition-all duration-300 inline-flex items-center space-x-3 shadow-xl"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Voir le code source</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'CareSync - Plateforme de Santé Connectée',
  meta: [
    { 
      name: 'description', 
      content: 'CareSync relie observance médicamenteuse et qualité de vie pour une prise en charge personnalisée. Projet de fin d\'études Epitech.' 
    }
  ]
})
</script>