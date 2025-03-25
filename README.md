## Déploiement d'un Projet AdonisJS (sans BDD) sur Render

command build ==>>  npm install; npm run build
command start ==>> node ace build/bin/server.js

# Configuration .env
NODE_ENV=development
APP_KEY=  # (Générez-le avec `node ace generate:key`)
PORT=3333  # Render utilise automatiquement un port
HOST=0.0.0.0  # Important pour Render
LOG_LEVEL=info

## Configutation vite
Ajouter :
export default defineConfig({
      server: {
          allowedHosts: [
            'mon-domaine-render.onrender.com', // Ajoutez votre domaine Render ici
          ],
        },
  })
