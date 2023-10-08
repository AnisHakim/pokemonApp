<template>
    <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
        <Loader/>
    </div>
        <div v-else class="flex flex-wrap justify-evenly max-w-[90vw] mx-auto max-h-[90%] mt-14">
          <div v-for="(pokemon, i)  in pokemonStore.pokemonsList" :key="i">
            <PokemonCard  :pokemon="pokemon" />
          </div>
      </div>
    <Pagination v-show="!isLoading" class="flex justify-center w-full mb-14" @pageNumberListner="handlePagination"/>
</template>

<script setup lang="ts">
import Loader from '@/components/Atoms/Loader/Loader.vue'
import { usePokemonStore } from '@/stores/PokemonStore'
import PokemonCard from '@/components/Molecules/PokemonCard/PokemonCard.vue'
import Pagination from '@/components/Atoms/Pagination/Pagination.vue'
import { ref } from 'vue'
const pokemonStore = usePokemonStore()
const isLoading = ref(true)
if (pokemonStore.pokemonsList.length === 0) {
    isLoading.value = true;
pokemonStore.fetchPokemons(0, 25).then(() =>isLoading.value = false)
} else {
    isLoading.value= false;
}
async function handlePagination(page : number) { 
    isLoading.value = true;
   await  pokemonStore.fetchPokemons((page - 1)*25, 25)
    isLoading.value = false;
}
</script>
