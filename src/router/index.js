import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '@/store/auth';

import DefaultLayout from '@/layouts/DefaultLayout';
import Login from '../views/pages/Login.vue'; // Importing Login.vue
import Profile from '../views/pages/Profile.vue';  // Importing Profile.vue
import NewPage3 from '../views/pages/NewPage3.vue'; // Importing NewPage3.vue
import NewTask from '../views/pages/NewTask.vue'; // Importing NewTask.vue
import NewTask1 from '../views/pages/NewTask1.vue'; // Προσθήκη του νέου component
import PersonalModelRepo from '../views/pages/PersonalModelRepo.vue'; // Importing PersonalModelRepo.vue
import PersonalDatasetRepo from '../views/pages/PersonalDatasetRepo.vue'; // Importing PersonalDatasetRepo.vue
import NewTask2 from '../views/pages/NewTask2.vue'; // Importing NewTask2.vue

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirect root path to the Login page
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',  // Route for Profile
    name: 'Profile',
    component: Profile
  },
  {
    path: '/new-page-3', // Route for NewPage3
    name: 'NewPage3',
    component: NewPage3
  },
  {
    path: '/new-task', // Route for NewTask
    name: 'NewTask',
    component: NewTask
  },
  {
    path: '/new-task-1', // Route for NewTask1
    name: 'NewTask1',
    component: NewTask1
  },
  {
    path: '/new-task-2', // Route for NewTask2
    name: 'NewTask2',
    component: NewTask2
  },
  {
    path: '/personal-model-repo', // Route for PersonalModelRepo
    name: 'PersonalModelRepo',
    component: PersonalModelRepo
  },
  {
    path: '/personal-dataset-repo', // Route for PersonalDatasetRepo
    name: 'PersonalDatasetRepo',
    component: PersonalDatasetRepo
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
      // Other child routes can be added here...
    ],
  },
  // Additional routes can be added here...
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth()
  if (to.name !== 'Login' && !isAuthenticated.value) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router;
