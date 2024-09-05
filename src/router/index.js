import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import Login from '../views/pages/Login.vue'
import Profile from '../views/pages/Profile.vue'  // Εισαγωγή του Profile.vue

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',  // Προσθήκη της διαδρομής για το Profile
    name: 'Profile',
    component: Profile
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
      },
      // Άλλες διαδρομές...
    ],
  },
  // Άλλες διαδρομές...
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes,
})

export default router
