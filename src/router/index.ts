import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientsView from '../views/ClientsView.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import MfaView from '../views/MfaView.vue'

const isAuthenticated = () => {
  const token = localStorage.getItem('authToken')
  return token !== null
}

// Define public routes that do not require an auth token
const publicPaths = ['/', '/mfa', '/about']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/mfa',
      name: 'MfaVerification',
      component: MfaView,
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: HomeView,
        },
        {
          path: 'clientes',
          name: 'Clientes',
          component: ClientsView,
        },
      ],
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

// Redirect to login if trying to access a non-public route without authentication
router.beforeEach((to, from, next) => {
  if (!publicPaths.includes(to.path) && !isAuthenticated()) {
    next('/') // Redirect to Login if not authenticated
  } else {
    next() // Proceed normally
  }
})

export default router
