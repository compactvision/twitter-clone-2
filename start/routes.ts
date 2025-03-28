/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const HomeController = () => import('#controllers/home_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [HomeController, 'index']).as('home')
router.get('/profile/:id', [HomeController, 'profile']).as('profile')
