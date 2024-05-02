import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GsapAnimations from '../views/GsapAnimations.vue'
import TypographyView from '../views/TypographyView.vue'
import ButtonsView from '../views/ButtonsView.vue'
import CardsView from '../views/CardsView.vue'
import TextFieldsView from '../views/TextFieldsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: ButtonsView
    },
    {
      path: '/cards',
      name: 'cards',
      component: CardsView
    },
    {
      path: '/gsap',
      name: 'gsap',
      component: GsapAnimations
    },
    {
      path: '/text-fields',
      name: 'text-fields',
      component: TextFieldsView
    },
    {
      path: '/typography',
      name: 'typography',
      component: TypographyView
    }
  ]
})

export default router
