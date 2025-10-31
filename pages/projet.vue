<template>
  <div>
    <!-- Hero Section  -->
    <section class="relative overflow-hidden section-padding bg-gradient-to-br from-white via-gray-50 to-white">
      <!-- Formes décoratives animées -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-soft" style="animation-delay: 1s;"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center animate-fade-in-up">
          <span class="inline-block px-6 py-3 bg-white/80 backdrop-blur-sm shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600 rounded-full text-sm font-bold mb-8 border-2 border-sky-100">
          Notre vision pour l'avenir de la santé
          </span>
          
          <h1 class="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            CareSync : 
            <span class="gradient-text block mt-2">Réinventer</span>
            le suivi médical
          </h1>
          
          <p class="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
            La première plateforme qui établit un lien direct et intelligent entre <strong class="text-sky-600">l'observance médicamenteuse</strong> et le <strong class="text-emerald-600">vécu réel du patient</strong> pour une prise en charge véritablement personnalisée.
          </p>

          <!-- Stats rapides -->
          <div class="grid grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto">
            <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-sky-100">
              <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">+25%</div>
              <div class="text-sm lg:text-base font-semibold text-gray-600">Observance</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-emerald-100">
              <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">360°</div>
              <div class="text-sm lg:text-base font-semibold text-gray-600">Suivi patient</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-purple-100">
              <div class="text-4xl lg:text-5xl font-bold gradient-text mb-2">IA</div>
              <div class="text-sm lg:text-base font-semibold text-gray-600">Corrélations</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vague décorative -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    <!-- Genèse du Projet  -->
    <section class="section-padding bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16 animate-fade-in-up">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-sky-100 to-emerald-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
              Notre histoire
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              La <span class="gradient-text">Genèse</span> du Projet
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              CareSync est né de la fusion de deux concepts complémentaires, créant une solution unique et complète
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-16">
            <!-- SmartMedi  -->
            <div class="group relative bg-gradient-to-br from-sky-50 to-sky-100 p-10 rounded-3xl border-2 border-sky-200 hover:border-sky-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg class="w-32 h-32 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
              </div>
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-sky-600 transition-colors">SmartMedi</h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                  Application axée sur la <strong>gestion rigoureuse des traitements</strong> et l'observance médicamenteuse.
                </p>
              </div>
            </div>

            <!-- CareSync Original  -->
            <div class="group relative bg-gradient-to-br from-emerald-50 to-emerald-100 p-10 rounded-3xl border-2 border-emerald-200 hover:border-emerald-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg class="w-32 h-32 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="relative">
                <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-800 group-hover:text-emerald-600 transition-colors">CareSync Originel</h3>
                <p class="text-lg text-gray-700 leading-relaxed">
                  Application dédiée au <strong>suivi qualitatif</strong> de l'expérience patient et de son vécu quotidien.
                </p>
              </div>
            </div>
          </div>

          <!-- Fusion visuelle  -->
          <div class="text-center bg-white p-12 rounded-3xl shadow-2xl border-2 border-gray-100">
            <div class="inline-flex items-center justify-center space-x-4 mb-8">
              <div class="h-1 w-24 bg-gradient-to-r from-sky-500 to-transparent rounded-full"></div>
              <div class="w-14 h-14 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full flex items-center justify-center shadow-xl animate-pulse-soft">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div class="h-1 w-24 bg-gradient-to-l from-emerald-500 to-transparent rounded-full"></div>
            </div>
            
            <div class="inline-block mb-6">
              <p class="text-4xl font-bold gradient-text px-8 py-4 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl border-2 border-sky-200">
                = CareSync
              </p>
            </div>
            
            <p class="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
              Une solution <strong class="gradient-text">complète et unique</strong> qui fusionne le meilleur des deux approches pour une expérience inégalée
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Le Problème  -->
    <section class="section-padding bg-gradient-to-br from-red-50 via-orange-50 to-red-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Constat alarmant
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              Le <span class="text-red-600">Problème</span> Adressé
            </h2>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              Dans le suivi des maladies chroniques, deux problématiques majeures persistent et compromettent l'efficacité des traitements
            </p>
          </div>

          <div class="space-y-8">
            <!-- Problème 1 ULTRA  -->
            <div class="group bg-white p-10 lg:p-12 rounded-3xl shadow-2xl hover:shadow-3xl border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:-translate-y-1">
              <div class="flex flex-col md:flex-row items-start md:space-x-8">
                <div class="flex-shrink-0 mb-6 md:mb-0">
                  <div class="relative">
                    <div class="absolute inset-0 bg-red-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div class="relative w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <svg class="w-11 h-11 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl lg:text-3xl font-bold mb-5 text-gray-900 group-hover:text-red-600 transition-colors">
                    Le Manque d'Observance
                  </h3>
                  <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                    De nombreux patients <strong>oublient de prendre leurs médicaments</strong>, ne respectent pas les horaires prescrits ou arrêtent leur traitement prématurément.
                  </p>
                  <div class="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border-l-4 border-red-500 shadow-inner">
                    <div class="flex items-start space-x-3">
                      <svg class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
                      </svg>
                      <p class="text-red-900 font-semibold text-base">
                        <strong>Conséquence :</strong> Des échecs thérapeutiques évitables et une dégradation progressive de l'état de santé
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Problème 2 ULTRA  -->
            <div class="group bg-white p-10 lg:p-12 rounded-3xl shadow-2xl hover:shadow-3xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1">
              <div class="flex flex-col md:flex-row items-start md:space-x-8">
                <div class="flex-shrink-0 mb-6 md:mb-0">
                  <div class="relative">
                    <div class="absolute inset-0 bg-purple-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div class="relative w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <svg class="w-11 h-11 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl lg:text-3xl font-bold mb-5 text-gray-900 group-hover:text-purple-600 transition-colors">
                    Le Manque de Visibilité
                  </h3>
                  <p class="text-lg text-gray-700 mb-6 leading-relaxed">
                    Entre deux consultations, le médecin dispose de <strong>peu d'informations objectives</strong> sur ce que vit réellement son patient au quotidien.
                  </p>
                  <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-purple-500 shadow-inner">
                    <div class="flex items-start space-x-3">
                      <svg class="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                      </svg>
                      <p class="text-purple-900 font-semibold text-base">
                        <strong>Conséquence :</strong> Des ajustements de traitement difficiles basés sur des informations parcellaires et subjectives
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Solution ULTRA  -->
    <section class="section-padding bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-20">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-sky-100 to-emerald-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
              Innovation technologique
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              Notre <span class="gradient-text">Solution</span> Innovante
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une plateforme intégrée qui révolutionne le suivi des maladies chroniques grâce à l'intelligence artificielle
            </p>
          </div>

          <!-- Innovation IA - Section mise en avant -->
          <div class="mb-20 bg-gradient-to-br from-purple-50 to-pink-50 p-10 lg:p-16 rounded-3xl border-2 border-purple-200 shadow-2xl">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-block p-3 bg-purple-500 rounded-2xl mb-6">
                  <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3 class="text-3xl font-bold mb-6">L'Innovation Clé : <span class="gradient-text">L'IA de Corrélation</span></h3>
                <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                  Notre moteur d'intelligence artificielle ne se contente pas de collecter des données : <strong>il les connecte</strong> pour générer des insights actionnables et personnalisés.
                </p>
                
                <div class="space-y-6">
                  <div class="flex items-start space-x-4 bg-white p-5 rounded-2xl shadow-md border-2 border-sky-100 hover:border-sky-300 transition-all hover:shadow-lg">
                    <div class="flex-shrink-0 w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="text-gray-800 italic leading-relaxed">
                      "Vos douleurs diminuent de <strong class="text-sky-600">60%</strong> les jours où vous prenez votre traitement à heure fixe."
                    </p>
                  </div>

                  <div class="flex items-start space-x-4 bg-white p-5 rounded-2xl shadow-md border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:shadow-lg">
                    <div class="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="text-gray-800 italic leading-relaxed">
                      "Votre anxiété augmente les jours où vous oubliez votre dose du matin."
                    </p>
                  </div>
                </div>
              </div>

              <!-- Visualisation IA -->
              <div class="bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-100">
                <div class="flex items-center justify-between mb-8">
                  <h4 class="text-xl font-bold text-gray-800">Corrélations détectées</h4>
                  <span class="inline-flex items-center text-xs bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold">
                    <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                    Temps réel
                  </span>
                </div>
                <div class="space-y-6">
                  <div>
                    <div class="flex justify-between mb-3">
                      <span class="text-sm font-semibold text-gray-600">Observance</span>
                      <span class="text-sm font-bold text-sky-600">92%</span>
                    </div>
                    <div class="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <div class="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full transition-all duration-1000" style="width: 92%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between mb-3">
                      <span class="text-sm font-semibold text-gray-600">Bien-être général</span>
                      <span class="text-sm font-bold text-emerald-600">85%</span>
                    </div>
                    <div class="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <div class="h-full bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full transition-all duration-1000" style="width: 85%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between mb-3">
                      <span class="text-sm font-semibold text-gray-600">Réduction symptômes</span>
                      <span class="text-sm font-bold text-purple-600">+40%</span>
                    </div>
                    <div class="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <div class="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000" style="width: 40%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Objectifs  -->
          <div class="mb-20">
            <div class="text-center mb-12">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-sky-100 to-emerald-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
              Notre ambition
            </span>
              <h3 class="text-4xl lg:text-5xl font-bold mb-6">Nos <span class="gradient-text">Objectifs</span></h3>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Des ambitions concrètes pour transformer le suivi des maladies chroniques</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="group bg-gradient-to-br from-sky-50 to-white p-8 rounded-3xl border-2 border-sky-100 hover:border-sky-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div class="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span class="text-2xl font-bold text-white">1</span>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Améliorer l'observance de <strong class="text-sky-600">+25%</strong> chez les patients chroniques
                </p>
              </div>

              <div class="group bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div class="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span class="text-2xl font-bold text-white">2</span>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Fournir des <strong class="text-emerald-600">données objectives</strong> pour optimiser les stratégies thérapeutiques
                </p>
              </div>

              <div class="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div class="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span class="text-2xl font-bold text-white">3</span>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Renforcer le <strong class="text-purple-600">dialogue patient-médecin</strong> via un suivi partagé
                </p>
              </div>

              <div class="group bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl border-2 border-orange-100 hover:border-orange-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div class="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span class="text-2xl font-bold text-white">4</span>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Rendre les patients <strong class="text-orange-600">acteurs de leur santé</strong> en comprenant mieux l'impact
                </p>
              </div>

              <div class="group bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl border-2 border-pink-100 hover:border-pink-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div class="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span class="text-2xl font-bold text-white">5</span>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Réduire les <strong class="text-pink-600">hospitalisations évitables</strong> et les coûts associés
                </p>
              </div>

              <div class="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <span class="text-2xl font-bold text-white">🎯</span>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Focus initial sur la <strong class="text-blue-600">gastro-entérologie</strong> (MICI, SII)
                </p>
              </div>
            </div>
          </div>

          <!-- Stratégie de Lancement -->
          <div class="bg-gradient-to-br from-amber-50 to-yellow-50 p-10 lg:p-12 rounded-3xl border-2 border-amber-200 shadow-xl">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">Stratégie de Lancement : La Niche d'Abord</h3>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">
                  Pour garantir la pertinence et l'efficacité de notre solution, nous démarrons par une spécialité médicale ciblée : <strong class="text-amber-600">la gastro-entérologie</strong>.
                </p>
                <div class="bg-white/70 p-6 rounded-2xl border-2 border-amber-200">
                  <p class="text-gray-700 leading-relaxed">
                    Ce domaine (MICI, Syndrome de l'Intestin Irritable) est idéal car les symptômes sont souvent invisibles et le suivi du vécu patient est crucial pour adapter les traitements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture PBS ULTRA  -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold mb-4">
              Architecture technique
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              L'<span class="gradient-text">Architecture</span> de la Plateforme
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Une infrastructure robuste et sécurisée pensée pour la santé connectée
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <!-- App Patient -->
            <div class="group bg-white p-8 rounded-3xl border-2 border-sky-200 hover:border-sky-400 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-6 text-gray-900 group-hover:text-sky-600 transition-colors">Application Mobile Patient</h3>
              <ul class="space-y-3 text-sm text-gray-700">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Gestion de compte
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Scan d'ordonnance (OCR)
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Rappels intelligents
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Journal de vie quotidien
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Tableau de bord personnel
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Partage sécurisé
                </li>
              </ul>
            </div>

            <!-- Backend & IA -->
            <div class="group bg-white p-8 rounded-3xl border-2 border-purple-200 hover:border-purple-400 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-6 text-gray-900 group-hover:text-purple-600 transition-colors">Infrastructure & IA</h3>
              <ul class="space-y-3 text-sm text-gray-700">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  API sécurisée
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Base de données HDS
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Moteur d'analyse IA
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Pseudonymisation
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Service OCR avancé
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-purple-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Cloud HDS conforme
                </li>
              </ul>
            </div>

            <!-- Dashboard Médecin -->
            <div class="group bg-white p-8 rounded-3xl border-2 border-emerald-200 hover:border-emerald-400 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-6 text-gray-900 group-hover:text-emerald-600 transition-colors">Dashboard Médecin</h3>
              <ul class="space-y-3 text-sm text-gray-700">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Interface web professionnelle
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Gestion de cohorte
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Visualisation 360°
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Alertes prioritaires IA
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Corrélations automatiques
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Rapports détaillés
                </li>
              </ul>
            </div>
          </div>

          <!-- Sécurité et Conformité ULTRA  -->
          <div class="mt-16 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 p-10 lg:p-16 rounded-3xl border-2 border-red-200 shadow-2xl">
            <div class="text-center mb-12">
              <div class="inline-block p-5 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl mb-6 shadow-xl animate-pulse-soft">
                <svg class="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-3xl font-bold text-gray-900 mb-4">Sécurité & Conformité <span class="gradient-text">Maximum</span></h3>
              <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                La protection des données de santé est notre priorité absolue
              </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-white p-8 rounded-3xl shadow-xl border-2 border-red-100">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <h4 class="text-xl font-bold text-gray-900">Sécurité Technique</h4>
                </div>
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span><strong>Chiffrement end-to-end</strong> de toutes les données</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span><strong>Authentification forte</strong> multi-facteurs (CPS médecins)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span><strong>Hébergeur HDS certifié</strong> (Hébergeur de Données de Santé)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span><strong>Surveillance continue 24/7</strong> et détection d'intrusion</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span><strong>Sauvegardes automatiques</strong> avec rétention sécurisée</span>
                  </li>
                </ul>
              </div>

              <div class="bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-100">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <h4 class="text-xl font-bold text-gray-900">Conformité Réglementaire</h4>
                </div>
                <ul class="space-y-3 text-gray-700">
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span><strong>RGPD</strong> - Analyse d'Impact complète (AIPD)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span><strong>HDS</strong> - Certification données de santé</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0  0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span><strong>PGSSI-S</strong> - Sécurité des SI de santé</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span><strong>ISO 27001</strong> - Management sécurité de l'information</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span><strong>Audits réguliers</strong> par organismes indépendants</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final ULTRA  -->
    <section class="section-padding relative overflow-hidden bg-gradient-to-br from-white via-white to-white">
      <!-- Formes décoratives -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Rejoignez l'aventure <span class="block mt-2 gradient-text">CareSync</span>
          </h2>
          
          <p class="text-xl lg:text-2xl mb-12 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Vous êtes convaincu par notre vision ? Soutenez notre projet et aidez-nous à <strong class="text-sky-600">transformer le suivi des maladies chroniques</strong>.
          </p>

          <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:gap-6">
            <NuxtLink 
              to="/" 
              class="group inline-flex items-center space-x-3 px-10 py-5 bg-gray-800 text-white font-bold text-lg rounded-2xl hover:bg-gray-900 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <svg class="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Retour à l'accueil</span>
            </NuxtLink>

            <NuxtLink 
              to="/contact" 
              class="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold text-lg rounded-2xl hover:from-sky-600 hover:to-emerald-600 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span>Nous contacter</span>
              <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </NuxtLink>

            <a
              href="https://github.com/Deniz09OK/CareSync"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center space-x-3 px-10 py-5 bg-white border-2 border-gray-300 text-gray-900 font-bold text-lg rounded-2xl hover:bg-sky-100/40 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Voir sur GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Le Projet - CareSync',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez la vision complète de CareSync : notre mission, notre solution innovante et notre stratégie pour transformer le suivi des maladies chroniques grâce à l\'IA.' 
    }
  ]
})
</script>