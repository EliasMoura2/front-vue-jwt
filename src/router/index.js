import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{rutaProtegida: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isProtected = to.matched.some( item => item.meta.rutaProtegida)
  if(isProtected && store.state.token === null){
    // la ruta es protegida (true)
      // console.log('es protegida')
    // el token es nulo (true)
    // redirigimos a inicio
    next('/')
  }else{
    // console.log('no es protegida')
    next()
  }
})
export default router
