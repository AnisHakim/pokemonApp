import { createRouter, createWebHistory } from 'vue-router'
import PokemonListVue from '@/components/PokemonList/PokemonList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonListVue
    },
  ]
})

export default router
