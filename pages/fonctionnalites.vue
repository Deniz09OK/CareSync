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
            Découvrez nos innovations
          </span>
          
          <h1 class="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Des fonctionnalités
            <span class="gradient-text block mt-2">révolutionnaires</span>
          </h1>
          
          <p class="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
            Une plateforme <strong class="text-sky-600">complète et intuitive</strong> qui connecte patients et médecins grâce à l'<strong class="text-emerald-600">intelligence artificielle</strong>
          </p>

          <!-- Navigation rapide -->
          <div class="flex flex-wrap justify-center gap-4">
            <a href="#patient" class="px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-sky-200 text-sky-600 rounded-xl hover:bg-sky-50 hover:border-sky-400 transition-all font-semibold shadow-md hover:shadow-lg">
              App Patient
            </a>
            <a href="#medecin" class="px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 text-emerald-600 rounded-xl hover:bg-emerald-50 hover:border-emerald-400 transition-all font-semibold shadow-md hover:shadow-lg">
              Dashboard Médecin
            </a>
            <a href="#ia" class="px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-purple-200 text-purple-600 rounded-xl hover:bg-purple-50 hover:border-purple-400 transition-all font-semibold shadow-md hover:shadow-lg">
              Intelligence IA
            </a>
          </div>
        </div>
      </div>

      <!-- Vague décorative -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>

    <!-- Application Patient -->
    <section id="patient" class="section-padding bg-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- En-tête section -->
          <div class="text-center mb-20">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-sky-100 to-sky-200 text-sky-700 rounded-full text-sm font-semibold mb-4">
              Pour les patients
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              Application Mobile <span class="gradient-text">Patient</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Une application compagnon simple et engageante qui centralise tout votre parcours de soin
            </p>
          </div>

          <!-- Grille des fonctionnalités patient -->
          <div class="grid md:grid-cols-2 gap-8 lg:gap-10">
            
            <!-- 1. Gestion de Compte -->
            <div class="group bg-gradient-to-br from-sky-50 to-white p-8 lg:p-10 rounded-3xl border-2 border-sky-100 hover:border-sky-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-sky-600 transition-colors">
                    Gestion de Compte
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Créez votre profil en quelques secondes et personnalisez votre espace santé personnel.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Inscription et connexion sécurisée</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Profil patient personnalisé</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Préférences et paramètres</span>
                </li>
              </ul>
            </div>

            <!-- 2. Scan d'Ordonnance -->
            <div class="group bg-gradient-to-br from-emerald-50 to-white p-8 lg:p-10 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                    Scan d'Ordonnance (OCR)
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Photographiez votre ordonnance et laissez l'IA extraire automatiquement toutes les informations.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Reconnaissance automatique des médicaments</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Extraction des dosages et fréquences</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Création automatique du planning de prise</span>
                </li>
              </ul>
            </div>

            <!-- 3. Planning de Traitement -->
            <div class="group bg-gradient-to-br from-purple-50 to-white p-8 lg:p-10 rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    Planning de Traitement
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Un calendrier intelligent qui organise automatiquement vos prises de médicaments.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Organisation automatique par horaires</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Vue quotidienne, hebdomadaire et mensuelle</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Ajustement manuel si besoin</span>
                </li>
              </ul>
            </div>

            <!-- 4. Rappels Intelligents -->
            <div class="group bg-gradient-to-br from-blue-50 to-white p-8 lg:p-10 rounded-3xl border-2 border-blue-100 hover:border-blue-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    Rappels Intelligents
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Des notifications push personnalisées pour ne jamais oublier une prise.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Notifications push personnalisables</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Rappels récurrents selon le traitement</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Widget pour l'écran d'accueil</span>
                </li>
              </ul>
            </div>

            <!-- 5. Journal de Vie -->
            <div class="group bg-gradient-to-br from-pink-50 to-white p-8 lg:p-10 rounded-3xl border-2 border-pink-100 hover:border-pink-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-pink-600 transition-colors">
                    Journal de Vie Quotidien
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Enregistrez vos symptômes, humeur et événements en moins d'une minute par jour.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-pink-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Saisie rapide des symptômes</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-pink-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Suivi de l'humeur et énergie</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-pink-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Saisie vocale, texte ou photo</span>
                </li>
              </ul>
            </div>

            <!-- 6. Tableau de Bord Personnel -->
            <div class="group bg-gradient-to-br from-amber-50 to-white p-8 lg:p-10 rounded-3xl border-2 border-amber-100 hover:border-amber-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">
                    Tableau de Bord Personnel
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Visualisez votre observance et l'évolution de vos symptômes en un coup d'œil.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Taux d'observance en temps réel</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Graphiques d'évolution des symptômes</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Rapports exportables en PDF</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Médecin -->
    <section id="medecin" class="section-padding bg-gradient-to-br from-emerald-50 via-emerald-50/50 to-white">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- En-tête section -->
          <div class="text-center mb-20">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Pour les médecins
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              Dashboard <span class="gradient-text">Médecin</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Une interface web professionnelle qui offre une vue d'ensemble à 360° sur les données de vos patients
            </p>
          </div>

          <!-- Grille des fonctionnalités médecin -->
          <div class="grid md:grid-cols-2 gap-8 lg:gap-10">
            
            <!-- 1. Authentification Professionnelle -->
            <div class="group bg-white p-8 lg:p-10 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                    Authentification Professionnelle
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Connexion sécurisée avec la Carte de Professionnel de Santé (CPS) - standard français.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Authentification via CPS</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Accès sécurisé conforme RGPD</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Traçabilité des accès</span>
                </li>
              </ul>
            </div>

            <!-- 2. Gestion de Cohorte -->
            <div class="group bg-white p-8 lg:p-10 rounded-3xl border-2 border-sky-100 hover:border-sky-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-sky-600 transition-colors">
                    Gestion de Cohorte
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Vue d'ensemble de tous vos patients avec recherche et filtrage avancés.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Liste complète des patients suivis</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Filtrage par pathologie, observance, alertes</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-sky-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Moteur de recherche rapide</span>
                </li>
              </ul>
            </div>

            <!-- 3. Dossier Patient Détaillé -->
            <div class="group bg-white p-8 lg:p-10 rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    Dossier Patient Détaillé
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Accédez à toutes les données de santé du patient en un seul endroit.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Historique complet des traitements</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Évolution des symptômes dans le temps</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Journal de vie du patient</span>
                </li>
              </ul>
            </div>

            <!-- 4. Visualisations Graphiques -->
            <div class="group bg-white p-8 lg:p-10 rounded-3xl border-2 border-blue-100 hover:border-blue-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    Visualisations Graphiques
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Des graphiques clairs et interactifs pour analyser rapidement les données.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Courbes d'observance</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Évolution des symptômes</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Comparaisons période sur période</span>
                </li>
              </ul>
            </div>

            <!-- 5. Alertes Prioritaires -->
            <div class="group bg-white p-8 lg:p-10 rounded-3xl border-2 border-red-100 hover:border-red-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors">
                    Alertes Prioritaires
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                L'IA identifie automatiquement les situations à risque nécessitant votre attention.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Détection observance en chute</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Symptômes qui s'aggravent</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Configuration des seuils personnalisés</span>
                </li>
              </ul>
            </div>

            <!-- 6. Corrélations IA -->
            <div class="group bg-white p-8 lg:p-10 rounded-3xl border-2 border-indigo-100 hover:border-indigo-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="flex items-start mb-6">
                <div class="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Corrélations IA
                  </h3>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                Découvrez les liens cachés entre traitement et vécu du patient grâce à l'IA.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Analyse observance vs bien-être</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Insights personnalisés par patient</span>
                </li>
                <li class="flex items-start text-gray-700">
                  <svg class="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Recommandations d'ajustement</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Intelligence Artificielle -->
    <section id="ia" class="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- En-tête section -->
          <div class="text-center mb-20">
            <span class="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Le cœur de CareSync
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              Intelligence <span class="gradient-text">Artificielle</span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Un moteur d'IA révolutionnaire qui connecte les données pour générer des insights actionnables
            </p>
          </div>

          <!-- Mise en avant de l'innovation IA -->
          <div class="bg-white p-10 lg:p-16 rounded-3xl shadow-2xl border-2 border-purple-200 mb-16">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-block p-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl mb-6 shadow-xl">
                  <svg class="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
                  </svg>
                </div>
                <h3 class="text-3xl font-bold mb-6">La Corrélation Intelligente</h3>
                <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                  Notre IA ne se contente pas de collecter : elle <strong>connecte</strong> la prise de médicaments au vécu réel du patient pour révéler ce qui fonctionne vraiment.
                </p>
                
                <!-- Exemples de corrélations -->
                <div class="space-y-6">
                  <div class="flex items-start space-x-4 bg-gradient-to-r from-sky-50 to-emerald-50 p-6 rounded-2xl border-2 border-sky-200 shadow-lg">
                    <div class="flex-shrink-0 w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center shadow-md">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="text-gray-800 text-lg italic leading-relaxed">
                      "Vos douleurs diminuent de <strong class="text-sky-600">60%</strong> les jours où vous prenez votre traitement à heure fixe."
                    </p>
                  </div>

                  <div class="flex items-start space-x-4 bg-gradient-to-r from-emerald-50 to-sky-50 p-6 rounded-2xl border-2 border-emerald-200 shadow-lg">
                    <div class="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-md">
                      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="text-gray-800 text-lg italic leading-relaxed">
                      "Votre anxiété augmente de <strong class="text-emerald-600">45%</strong> les jours où vous oubliez votre dose du matin."
                    </p>
                  </div>
                </div>
              </div>

              <!-- Visualisation dynamique -->
              <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl shadow-2xl border-2 border-purple-200">
                <div class="flex items-center justify-between mb-8">
                  <h4 class="text-xl font-bold text-gray-800">Analyse en temps réel</h4>
                  <span class="inline-flex items-center text-xs bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-bold shadow-sm">
                    <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                    Live
                  </span>
                </div>
                <div class="space-y-6">
                  <div>
                    <div class="flex justify-between mb-3">
                      <span class="text-sm font-semibold text-gray-700">Observance</span>
                      <span class="text-sm font-bold text-sky-600">92%</span>
                    </div>
                    <div class="h-4 bg-white rounded-full overflow-hidden shadow-inner">
                      <div class="h-full bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full transition-all duration-1000" style="width: 92%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between mb-3">
                      <span class="text-sm font-semibold text-gray-700">Bien-être général</span>
                      <span class="text-sm font-bold text-emerald-600">85%</span>
                    </div>
                    <div class="h-4 bg-white rounded-full overflow-hidden shadow-inner">
                      <div class="h-full bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full transition-all duration-1000" style="width: 85%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between mb-3">
                      <span class="text-sm font-semibold text-gray-700">Amélioration symptômes</span>
                      <span class="text-sm font-bold text-purple-600">+40%</span>
                    </div>
                    <div class="h-4 bg-white rounded-full overflow-hidden shadow-inner">
                      <div class="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-1000" style="width: 40%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between mb-3">
                      <span class="text-sm font-semibold text-gray-700">Qualité de vie</span>
                      <span class="text-sm font-bold text-pink-600">78%</span>
                    </div>
                    <div class="h-4 bg-white rounded-full overflow-hidden shadow-inner">
                      <div class="h-full bg-gradient-to-r from-pink-400 to-purple-400 rounded-full transition-all duration-1000" style="width: 78%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Capacités de l'IA -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            <!-- 1. Traitement NLP -->
            <div class="group bg-white p-8 rounded-3xl border-2 border-purple-100 hover:border-purple-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                Traitement du Langage Naturel
              </h3>
              <p class="text-gray-700 text-center leading-relaxed">
                Comprend et analyse les descriptions de symptômes en langage courant
              </p>
            </div>

            <!-- 2. Pseudonymisation -->
            <div class="group bg-white p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                Pseudonymisation Avancée
              </h3>
              <p class="text-gray-700 text-center leading-relaxed">
                Protège l'identité du patient tout en permettant l'analyse des données
              </p>
            </div>

            <!-- 3. Machine Learning -->
            <div class="group bg-white p-8 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" clip-rule="evenodd" />
                  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4 text-gray-900 group-hover:text-emerald-600 transition-colors">
                Apprentissage Continu
              </h3>
              <p class="text-gray-700 text-center leading-relaxed">
                Le modèle s'améliore en permanence avec les nouvelles données
              </p>
            </div>

            <!-- 4. Détection de patterns -->
            <div class="group bg-white p-8 rounded-3xl border-2 border-pink-100 hover:border-pink-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4 text-gray-900 group-hover:text-pink-600 transition-colors">
                Détection de Patterns
              </h3>
              <p class="text-gray-700 text-center leading-relaxed">
                Identifie automatiquement les schémas comportementaux et symptomatiques
              </p>
            </div>

            <!-- 5. Prédictions -->
            <div class="group bg-white p-8 rounded-3xl border-2 border-orange-100 hover:border-orange-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4 text-gray-900 group-hover:text-orange-600 transition-colors">
                Prédictions Anticipées
              </h3>
              <p class="text-gray-700 text-center leading-relaxed">
                Anticipe les risques de rechute ou de non-observance
              </p>
            </div>

            <!-- 6. Personnalisation -->
            <div class="group bg-white p-8 rounded-3xl border-2 border-indigo-100 hover:border-indigo-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div class="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-center mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
                Recommandations Personnalisées
              </h3>
              <p class="text-gray-700 text-center leading-relaxed">
                Suggère des ajustements thérapeutiques adaptés à chaque patient
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Sécurité et Conformité -->
    <section class="section-padding bg-gradient-to-br from-red-50 via-orange-50 to-red-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <span class="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Sécurité maximale
            </span>
            <h2 class="text-4xl lg:text-5xl font-bold mb-6">
              Sécurité & <span class="text-red-600">Conformité</span>
            </h2>
            <p class="text-xl text-gray-700 max-w-3xl mx-auto">
              La protection des données de santé est notre priorité absolue
            </p>
          </div>

          <div class="bg-white p-10 lg:p-16 rounded-3xl shadow-2xl border-2 border-red-200">
            <div class="grid md:grid-cols-2 gap-10">
              <!-- Sécurité Technique -->
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 bg-gradient-to-br from-red-400 to-orange-400 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">Sécurité Technique</h3>
                </div>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700"><strong>Chiffrement end-to-end</strong> de toutes les données sensibles</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700"><strong>Hébergement HDS certifié</strong> (Hébergeur de Données de Santé)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700"><strong>Authentification forte</strong> avec CPS pour les médecins</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700"><strong>Surveillance 24/7</strong> et détection d'intrusion</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700"><strong>Sauvegardes automatiques</strong> sécurisées</span>
                  </li>
                </ul>
              </div>

              <!-- Conformité Réglementaire -->
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">Conformité Réglementaire</h3>
                </div>
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700"><strong>RGPD</strong> - Analyse d'Impact complète (AIPD)</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700"><strong>HDS</strong> - Certification données de santé</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700"><strong>PGSSI-S</strong> - Sécurité des SI de santé</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700"><strong>DPO</strong> - Délégué à la Protection des Données</span>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700"><strong>Audits réguliers</strong> par organismes indépendants</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="section-padding relative overflow-hidden bg-gradient-to-br from-white via-white to-white">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-gray-900">
            Prêt à découvrir <span class="gradient-text">CareSync</span> ?
          </h2>
          
          <p class="text-xl lg:text-2xl mb-12 text-gray-700 leading-relaxed">
            Explorez notre projet en détail et rejoignez-nous dans cette aventure pour <strong class="text-sky-600">transformer la e-santé</strong>
          </p>

          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <NuxtLink 
              to="/projet" 
              class="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold text-lg rounded-2xl hover:from-sky-600 hover:to-emerald-600 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span>Le projet complet</span>
              <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>

            <NuxtLink 
              to="/equipe" 
              class="group inline-flex items-center space-x-3 px-10 py-5 bg-white border-2 border-gray-300 text-gray-900 font-bold text-lg rounded-2xl hover:border-sky-500 hover:text-sky-600 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
              </svg>
              <span>Notre équipe</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Fonctionnalités - CareSync',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez toutes les fonctionnalités de CareSync : application patient, dashboard médecin, intelligence artificielle et sécurité maximale pour révolutionner le suivi des maladies chroniques.' 
    }
  ]
})
</script>