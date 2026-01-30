import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/consultar-todos',
    name: 'consultarTodos',
    component: () => import('@/views/ConsultarTodosView.vue')
  },
  {
    path: '/consultar-por-id',
    name: 'consultarPorId',
    component: () => import('@/views/ConsultarPorIdView.vue')
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: () => import('@/views/GuardarView.vue')
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: () => import('@/views/ActualizarView.vue')
  },
  {
    path: '/actualizar-parcial',
    name: 'actualizarParcial',
    component: () => import('@/views/ActualizarParcialView.vue')
  },
  {
    path: '/borrar',
    name: 'borrar',
    component: () => import('@/views/BorrarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
