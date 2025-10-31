<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden section-padding bg-gradient-to-br from-white via-gray-50 to-white">
      <!-- Formes décoratives animées -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-soft" style="animation-delay: 1s;"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center animate-fade-in-up">
          <span class="inline-block px-6 py-3 bg-white/80 backdrop-blur-sm shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-emerald-600 rounded-full text-sm font-bold mb-8 border-2 border-sky-100">
            Les créateurs de CareSync
          </span>
          
          <h1 class="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Notre 
            <span class="gradient-text block mt-2">Équipe</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
            Une équipe de <strong class="text-sky-600">3 fondateurs passionnés</strong> d'Epitech Nancy, en phase de recrutement pour <strong class="text-emerald-600">révolutionner la e-santé</strong>.
          </p>
        </div>
      </div>

      <!-- Vague décorative -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    <!-- Section Membres de l'Équipe -->
    <section class="section-padding bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          
          <!-- En-tête section -->
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-sky-100 to-emerald-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
              Les fondateurs
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              L'équipe <span class="gradient-text">actuelle</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois étudiants d'Epitech Nancy qui ont imaginé CareSync et portent le projet vers sa réalisation
            </p>
          </div>

          <!-- Grid des membres fondateurs (3) -->
          <div class="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
            
            <!-- Membre 1 - Michel Banckaert -->
            <div class="group bg-gradient-to-br from-sky-50 to-white p-8 rounded-3xl border-2 border-sky-100 hover:border-sky-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <!-- Avatar -->
              <div class="relative mb-6">
                <img :src="michelImg" alt="Michel Banckaert" class="w-32 h-32 mx-auto rounded-full object-cover shadow-xl group-hover:scale-110 transition-transform duration-300" />
                <!-- Badge rôle -->
                <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <span class="inline-block px-4 py-1 bg-sky-500 text-white text-xs font-bold rounded-full shadow-lg">
                    Fondateur
                  </span>
                </div>
              </div>
              <!-- Info membre -->
              <div class="text-center pt-4">
                <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
                  Michel Banckaert
                </h3>
                <p class="text-gray-600 mb-4 text-sm">
                  Epitech Nancy • Promo 2027
                </p>
                <p class="text-gray-700 text-sm leading-relaxed mb-6">
                  Passionné par la cybersécurité, le cloud et le développement backend. Spécialisation en sécurité des systèmes.
                </p>
                <!-- Réseaux sociaux -->
                <div class="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/michel-banckaert-54-devweb/" target="_blank" class="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Membre 2 - Deniz Ok -->
            <div class="group bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="relative mb-6">
                <img :src="denizImg" alt="Deniz Ok" class="w-32 h-32 mx-auto rounded-full object-cover shadow-xl group-hover:scale-110 transition-transform duration-300" />
                <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <span class="inline-block px-4 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                    Fondateur
                  </span>
                </div>
              </div>
              <div class="text-center pt-4">
                <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Deniz Ok
                </h3>
                <p class="text-gray-600 mb-4 text-sm">
                  Epitech Nancy • Promo 2027
                </p>
                <p class="text-gray-700 text-sm leading-relaxed mb-6">
                  Passionné par les technologies et la cybersécurité. Développement logiciel et gestion de projets innovants.
                </p>
                <div class="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/deniz-ok/" target="_blank" class="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Membre 3 - Claire-Estelle Zobo -->
            <div class="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="relative mb-6">
                <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-400 shadow-xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white text-5xl font-bold">
                  CZ
                </div>
                <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <span class="inline-block px-4 py-1 bg-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
                    Fondatrice
                  </span>
                </div>
              </div>
              <div class="text-center pt-4">
                <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Claire Estelle Zobo
                </h3>
                <p class="text-gray-600 mb-4 text-sm">
                  Epitech Nancy • Promo 2027
                </p>
                <p class="text-gray-700 text-sm leading-relaxed mb-6">
                  Passionnée par la cybersécurité, l'administration systèmes et la sécurité des infrastructures informatiques.
                </p>
                <div class="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/claire-estelle-zobo/" target="_blank" class="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <!-- Section Postes à Pourvoir -->
          <div class="mt-24">
            <div class="text-center mb-16">
              <span class="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
                Rejoignez-nous
              </span>
              <h2 class="text-4xl lg:text-5xl font-bold mb-6">
                Postes <span class="gradient-text">à pourvoir</span>
              </h2>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Nous recherchons des talents passionnés pour compléter notre équipe et construire l'avenir de CareSync
              </p>
            </div>

            <!-- Grid des postes recherchés -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              <!-- Poste 1 - Backend Developer -->
              <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.5 3A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3h-15zM9 8.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 019 8.25zm0 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 019 11.25zm0 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5A.75.75 0 019 14.25z"/>
                    </svg>
                  </div>
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full transition-colors duration-300 hover:bg-blue-200">
                    1-2 postes
                  </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 hover:text-blue-600">Développeur Backend</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Expert en architecture serveur, bases de données et API REST/GraphQL pour construire une infrastructure robuste et scalable.
                </p>
              </div>

              <!-- Poste 2 - Frontend Developer -->
              <div class="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full transition-colors duration-300 hover:bg-emerald-200">
                    1-2 postes
                  </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 hover:text-emerald-600">Développeur Frontend</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Spécialiste des interfaces modernes et réactives pour créer une expérience utilisateur exceptionnelle et intuitive.
                </p>
              </div>

              <!-- Poste 3 - Spécialiste IA -->
              <div class="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border-2 border-purple-100 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"/>
                      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"/>
                      <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"/>
                    </svg>
                  </div>
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full transition-colors duration-300 hover:bg-purple-200">
                    1 poste
                  </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 hover:text-purple-600">Spécialiste IA</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Expert en machine learning et NLP pour développer l'intelligence artificielle au cœur de CareSync.
                </p>
              </div>

              <!-- Poste 4 - DevOps/Cybersécurité -->
              <div class="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border-2 border-red-100 hover:border-red-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full transition-colors duration-300 hover:bg-red-200">
                    1-2 postes
                  </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 hover:text-red-600">DevOps / Cybersécurité</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Garantir la sécurité des données de santé et l'infrastructure cloud avec les meilleures pratiques DevSecOps.
                </p>
              </div>

              <!-- Poste 5 - Chef de Projet -->
              <div class="bg-gradient-to-br from-amber-50 to-white p-6 rounded-2xl border-2 border-amber-100 hover:border-amber-300 shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1 hover:-translate-y-2 hover:scale-105">
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd"/>
                      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"/>
                    </svg>
                  </div>
                  <span class="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full transition-colors duration-300 hover:bg-amber-200">
                    1 poste
                  </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 hover:text-amber-600">Chef de Projet</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Orchestrer l'équipe, gérer les priorités et assurer la communication entre tous les acteurs du projet.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section Valeurs de l'Équipe -->
    <section class="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-sky-100 to-emerald-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
              Nos valeurs
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              Ce qui nous <span class="gradient-text">anime</span>
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Valeur 1 -->
            <div class="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-sky-300 transition-all hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4 text-gray-900">Innovation</h3>
              <p class="text-gray-600 text-center leading-relaxed">
                Repousser les limites de la technologie pour créer des solutions qui changent vraiment la vie des patients.
              </p>
            </div>

            <!-- Valeur 2 -->
            <div class="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-emerald-300 transition-all hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4 text-gray-900">Empathie</h3>
              <p class="text-gray-600 text-center leading-relaxed">
                Comprendre profondément les besoins des patients et des médecins pour créer une solution véritablement utile.
              </p>
            </div>

            <!-- Valeur 3 -->
            <div class="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 hover:border-purple-300 transition-all hover:-translate-y-2">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4 text-gray-900">Collaboration</h3>
              <p class="text-gray-600 text-center leading-relaxed">
                Travailler ensemble en combinant nos compétences pour atteindre un objectif commun ambitieux.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="section-padding relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      <!-- Formes décoratives -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Prêt à rejoindre l'aventure ?
          </h2>
          
          <p class="text-xl lg:text-2xl mb-12 text-gray-700 leading-relaxed">
            CareSync cherche <strong class="text-sky-600">des talents motivés</strong> pour transformer ensemble le suivi des maladies chroniques. Si vous êtes passionné par la e-santé et l'innovation, <strong class="text-emerald-600">contactez-nous !</strong>
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

            <a
              href="https://github.com/Deniz09OK/CareSync"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center space-x-3 px-10 py-5 bg-white border-2 border-gray-300 text-gray-900 font-bold text-lg rounded-2xl hover:border-sky-500 hover:text-sky-600 hover:scale-105 transition-all duration-300 shadow-xl"
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
import michelImg from '~/assets/Image/michel.jpg'
import denizImg from '~/assets/Image/deniz.jpg'

useHead({
  title: 'Notre Équipe - CareSync',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez l\'équipe passionnée derrière CareSync : des développeurs d\'Epitech déterminés à révolutionner la e-santé avec l\'intelligence artificielle.' 
    }
  ]
})
</script>