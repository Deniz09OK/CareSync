# CareSync

CareSync est une plateforme de santé connectée qui relie l'observance médicamenteuse au vécu réel du patient, afin d'offrir aux médecins une prise en charge personnalisée basée sur des données objectives du quotidien.

## Fonctionnalités principales

### Application Mobile Patient

- **Gestion de compte utilisateur** : inscription, connexion, gestion du profil
- **Gestion des traitements** : scan d'ordonnance (OCR), ajout manuel, planning automatisé
- **Suivi quotidien** : journal de vie (symptômes, humeur, événements), enregistrement de la prise de médicament
- **Rappels intelligents** : notifications push, widgets
- **Visualisation des données** : tableau de bord personnel, rapports exportables
- **Partage avec le médecin** : gestion du consentement, connexion sécurisée

### Tableau de Bord Médecin (Web)

- **Authentification professionnelle**
- **Gestion de la cohorte de patients** : vue d'ensemble, recherche et filtrage
- **Dossier patient détaillé** : observance, graphiques d'évolution, corrélations IA
- **Alertes prioritaires** : configuration des seuils, tableau de bord des alertes

### Backend & Intelligence Artificielle

- **API sécurisée**
- **Base de données conforme HDS**
- **Service d'authentification**
- **Moteur d'analyse et de corrélation IA**
- **Service OCR**
- **Infrastructure cloud HDS**

## Objectifs du projet

- Améliorer l'observance des traitements de plus de 25% chez les patients chroniques
- Fournir aux médecins des données objectives pour optimiser les stratégies thérapeutiques
- Renforcer le dialogue patient-médecin par un suivi partagé et continu
- Permettre aux patients de mieux comprendre l'impact de leur traitement
- Réduire les hospitalisations évitables et les coûts associés

## Lancement

Le projet cible d'abord la gastro-entérologie (MICI, SII) pour maximiser l'impact et la pertinence clinique.


## Installation rapide

```bash
git clone https://github.com/Deniz09OK/CareSync
cd CareSync
```

## Installation & Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## Structure du projet

- `components/` : composants Vue réutilisables
- `pages/` : pages principales de l'application
- `assets/` : fichiers statiques (images, CSS)
- `public/` : fichiers publics accessibles
- `nuxt.config.ts` : configuration Nuxt
- `package.json` : dépendances et scripts

## Conformité & Sécurité

Le projet respecte les exigences RGPD et HDS pour la protection des données de santé.
