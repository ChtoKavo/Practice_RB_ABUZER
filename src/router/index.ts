import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'
import Catalog from '../views/Catalog.vue'
import Favorites from '../views/Favorites.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      component: Profile
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

export default router
