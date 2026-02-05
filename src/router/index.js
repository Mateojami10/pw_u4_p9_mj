import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requerieAutorizacion: true,
      esPublica: false
    }
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
    component: () => import('@/views/GuardarView.vue'),
    meta: {
      requerieAutorizacion: true,
      esPublica: false
    }
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
    component: () => import('@/views/BorrarView.vue'),
    meta: {
      requerieAutorizacion: true,
      esPublica: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*Configuracion del guardian*/
router.beforeEach((to, from, next) => {
  if(to.meta.requerieAutorizacion && !to.meta.esPublica){
    //le envio a una pagina de login}
    console.log("Redirige a login");
  }else {
    console.log("Pase libre");
    next();
}
})

export default router
