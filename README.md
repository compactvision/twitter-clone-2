## Déploiement d'un Projet AdonisJS (sans BDD) sur Render

root directory ./
command build ==>>  npm install; npm run build
command start ==>> node build/bin/server.js

## Configuration .env
NODE_ENV=development
APP_KEY=  # (Générez-le avec `node ace generate:key`)
SESSION_DRIVER = cookie
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
