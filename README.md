Guide de Déploiement d'AdonisJS sur Render (sans BDD)
Prérequis
Un compte Render

Un projet AdonisJS configuré avec Vite

Un dépôt Git hébergé (GitHub, GitLab ou Bitbucket)

Configuration du Projet
Fichier .env
env
Copy
NODE_ENV=production
APP_KEY=votre_clé_générée_ici  # Générer avec: node ace generate:key
PORT=10000  # Port par défaut Render
HOST=0.0.0.0  # Nécessaire pour Render
LOG_LEVEL=info
Configuration Vite (vite.config.js)
js
Copy
import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [
    adonisjs({
      entrypoints: ['resources/js/app.js'],
      reload: false, // Désactivé en production
    }),
  ],
  server: {
    allowedHosts: [
      'votre-app.onrender.com' // Remplacez par votre URL Render
    ],
  },
  build: {
    manifest: true,
    outDir: 'public/build'
  }
})
Configuration Render
Paramètres du Service
Paramètre	Valeur
Build Command	npm install && npm run build
Start Command	node ace build/bin/server.js
Environment	Node
Node Version	20 (LTS recommandée)
Variables d'Environnement Obligatoires
Copy
NODE_ENV=production
APP_KEY=votre_clé_secrète
HOST=0.0.0.0
PORT=5432
