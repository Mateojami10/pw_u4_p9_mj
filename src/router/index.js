import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
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
  const estaAutenticado = localStorage.getItem("estaAutenticado");
  
  if(to.meta.requerieAutorizacion){
    if(!estaAutenticado){
      console.log("Redirige a login");
      next({name: 'login'});
    } else {
      console.log("Pase libre");
      next();
    }
  } else {
    // Si está autenticado y va a login, redirigir a home
    if(to.name === 'login' && estaAutenticado){
      next({name: 'home'});
    } else {
      next();
    }
  }
})


export default router
