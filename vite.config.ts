import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'

export default defineConfig({
  plugins: [
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/css/app.css', 'resources/js/app.js'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
  ],

  // Ajoutez cette configuration pour autoriser votre domaine Render
  server: {
    allowedHosts: [
      'twitter-clone-2-32un.onrender.com', // Ajoutez votre domaine Render ici
    ],
  },

  build: {
    outDir: 'public/assets', // Dossier de sortie pour les assets compilés
    assetsDir: '.', // Dossier relatif pour les assets (CSS, JS, etc.)
    emptyOutDir: true, // Vide le dossier de sortie avant chaque build
  },
})
