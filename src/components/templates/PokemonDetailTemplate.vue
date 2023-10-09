<template>
  <div class="bg-[#F8E9FF] w-full h-screen flex justify-center items-center">
    <div v-if="isLoading">
      <Loader />
    </div>
    <div
      v-else
      class="flex justify-center items-center xs: bg-white box-shadow rounded-md flex-col sm:flex-row"
    >
      <img class="w-[150px] h-[150px] sm:w-80 sm:h-80" :src="pokemonGetDetails.img" />
      <div class="flex justify-center items-center flex-col border-l-[1px] border-[#ccc] px-5 w-96">
        <label class="font-medium text-3xl text-[#CC3333] sm:py-2">{{
          pokemonGetDetails.name.toUpperCase()
        }}</label>
        <label class="text-gray-500">Number : {{ pokemonGetDetails.id }}</label>
        <div class="w-full border-b-[1px] border-[#ccc] sm:my-2.5 my-1"></div>
        <label class="text-green-500 sm:py-2.5 pb-2.5 text-2xl font-medium">Types :</label>
        <div class="flex flex-evenly w-full justify-center">
          <div v-for="(element, i) in pokemonGetDetails.types" :key="i">
            <PokemonType :pokemonType="element" class="mr-1" />
          </div>
        </div>
        <label class="text-green-500 py-2.5 text-2xl font-medium">Sizes :</label>
        <div class="flex flex-evenly w-full justify-evenly">
          <div class="font-medium text-blue-600">Height : {{ pokemonGetDetails.height }} m</div>
          <div class="font-medium text-blue-600">Weight : {{ pokemonGetDetails.weight }} Kg</div>
        </div>
        <div class="w-full border-b-[1px] border-[#ccc] sm:my-2.5 my-1"></div>
        <label class="text-green-500 sm:py-2.5 text-2xl font-medium">Statisticals :</label>
        <div v-for="(stat, i) in pokemonGetDetails.stats" :key="i" class="w-full">
          <ProgressBar
            :label="stat.name.toUpperCase()"
            class="sm:mb-5 mb-2"
            :progress="calculateProgress(Number(stat.value))"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PokemonDetails } from '@/utils/interface.ts'
interface Props {
  pokemonGetDetails?: PokemonDetails
  isLoading?: boolean
}
const { pokemonGetDetails = {}, isLoading = true } = defineProps<Props>()
const calculateProgress = (value: number) => Math.floor((value * 100) / 255)
</script>

<style scoped>
.box-shadow {
  box-shadow: -1px 20px 30px -12px black;
}
</style>
