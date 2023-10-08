<script setup>
import { defineProps } from 'vue'
import PokemonType from '@/components/Atoms/PokemonType/PokemonType.vue'
import { formatingPokemonId } from '@/utils'
defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card sm:w-[230px] w-[150px]">
    <router-link :to="`/pokemon/${pokemon.name}`">
      <div class="image-container sm:w-[230px] sm:h-[230px] w-[150px] h-[155px]">
        <span
          class="pokemon-number absolute sm:left-[190px] left-[120px] sm:top-[10px] top-[2px] font-medium sm:font-bold"
          >#{{ formatingPokemonId(pokemon.id) }}</span
        >
        <img
          class="zoom-in sm:w-[200px] sm:h-[200px] w-[130px] h-[130px]"
          :alt="pokemon.name"
          :src="pokemon.img"
        />
        <strong class="justify-center flex text-gray-500">{{ pokemon.name.toUpperCase() }}</strong>
      </div>
    </router-link>

    <div class="flex justify-evenly py-3">
      <div v-for="(element, i) in pokemon.types" :key="i">
        <PokemonType :pokemonType="element" />
      </div>
    </div>
  </div>
</template>

<style>
.image-container {
  cursor: pointer;
  background: rgb(248, 233, 405);
  color: #e1ede7;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 0 10px;
  position: relative;
  display: grid;
  overflow: hidden;
  transition: 0.3s;
}
.card {
  border-radius: 10px;
  transition: 0.5s;
  margin-bottom: 2em;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  flex: 0 1 calc(20% - 1em);
  transition: opacity 1.5s;
  animation: 1s ease-out 0s 1 cardTransition;
}

.pokemon-number {
  font-size: 10px;
  color: #2f4f4f;
  text-shadow: #2b303a 0px 1px 1px;
}
.zoom-in {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.zoom-in:hover {
  -webkit-transform: scale(1);
  transform: scale(1);
}
@keyframes cardTransition {
  0% {
    transform: 200ms ease-out 320ms;
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
