import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import Login from '../components/login.vue'
import Find from '../components/find.vue'

const routes = [
  {
    path: '/',
    name: 'defaultLayout',
    component: () => import('@/layout/defaultLayout.vue'),
    children: [
      {
        path: '/',
        name: 'main',
        component: Main
      }
    ],
},
{
    path: '/',
    name: 'loginLayout',
    component: () => import('@/layout/loginLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/find',
        name: 'find',
        component: Find
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
