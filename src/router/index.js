import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/portal",
    name: "portal",
    component: () => import("../views/PortalView.vue")
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../views/CadastroView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreView.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
