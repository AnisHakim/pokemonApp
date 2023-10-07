

<template>
  <div class="flex flex-wrap justify-evenly max-w-[90vw] mx-auto">
    <div v-for="(pokemon, i) in pokemonStore.pokemonsList" :key="i">
      <PokemonCard :pokemon="pokemon" />
    </div>
  </div>
</template>

<script setup>
import { usePokemonStore } from '@/stores/PokemonStore'
import PokemonCard from '../PokemonCard/PokemonCard.vue'
const pokemonStore = usePokemonStore()
if (pokemonStore.pokemonsList.length === 0) {
  pokemonStore.fetchPokemons(0,25);
}
console.log(pokemonStore.pokemonsList)
 </script>
