import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientsView from '../views/ClientsView.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

const isAuthenticated = () => {
  const token = localStorage.getItem('authToken')
  return token !== null
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
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
          path: 'clientes', // Corrigido (sem barra inicial)
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

// **Redirecionar todas as rotas para login se não autenticado**
router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !isAuthenticated()) {
    next('/') // Redireciona para Login se não autenticado
  } else {
    next() // Prossegue normalmente
  }
})
export default router
