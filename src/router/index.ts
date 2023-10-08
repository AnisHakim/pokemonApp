import { createRouter, createWebHistory } from 'vue-router'
import PokemonListVue from '@/components/Pages/PokemonList/PokemonList.vue'
import PokemonDetail from '@/components/Pages/PokemonDetail/PokemonDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonListVue
    },
    {
      path: '/pokemon/:name',  
      name: 'pokemon-detail',
      component: PokemonDetail
    }
  ]
})

export default router
