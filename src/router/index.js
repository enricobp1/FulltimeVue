import { createRouter, createWebHistory } from 'vue-router'
import DespachoView from '../views/DespachoView.vue'
import GerenciamentoView from '../views/GerenciamentoView.vue'
import RegistroView from '../views/RegistroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/despacho',
      name: 'Despacho',
      component: DespachoView
    },
    {
      path: '/',
      name: 'Gerenciamento',
      component: GerenciamentoView
    },
    {
      path: '/registro',
      name: 'Registro',
      component: RegistroView
    }
  ]
})

export default router
