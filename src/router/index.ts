import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import Catalog from '../views/Catalog.vue'
import Favorites from '../views/Favorites.vue'
import Profile from '../views/Profile.vue'
import Recipe from '../views/Recipe.vue'
import Auth from '../views/Auth.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'

// Simulated auth state (in a real app, this would be managed by a proper auth system)
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next('/profile')
        } else {
          next()
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next('/profile')
        } else {
          next()
        }
      }
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/recipe/:id',
      name: 'Recipe',
      component: Recipe,
      props: true
    },
    {
      path: '/first',
      name: 'first',
      component: Catalog
    },
    {
      path: '/second',
      name: 'second',
      component: Catalog
    },
    {
      path: '/desserts',
      name: 'desserts',
      component: Catalog
    },
    {
      path: '/salads',
      name: 'salads',
      component: Catalog
    },
    {
      path: '/snacks',
      name: 'snacks',
      component: Catalog
    },
    {
      path: '/drinks',
      name: 'drinks',
      component: Catalog
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    }
  ]
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next('/auth')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
