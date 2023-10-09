<template>
  <div class="flex w-[90vw] justify-evenly mx-auto flex-wrap mt-4">
    <Input @inputHandler="handleSearch" :placeholder="`Search by name...`" class="mb-4" />
    <Input
      @inputHandler="handleSearch"
      :placeholder="`Search by ID...`"
      class="mb-4"
      type="number"
    />
  </div>
  <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
    <Loader />
  </div>
  <div v-else class="flex flex-wrap justify-evenly max-w-[90vw] mx-auto max-h-[90%] mt-14">
    <div v-for="(pokemon, i) in pokemonsList" :key="i">
      <PokemonCard :pokemon="pokemon" />
    </div>
  </div>
  <Pagination
    v-show="!isLoading"
    class="flex justify-center w-full mb-14"
    :pageIndex="pageIndex"
    @pageNumberListner="handlePagination"
  />
</template>

<script setup lang="ts">
import Loader from '@/components/Atoms/Loader/Loader.vue'
import PokemonCard from '@/components/Molecules/PokemonCard/PokemonCard.vue'
import Pagination from '@/components/Atoms/Pagination/Pagination.vue'
import Input from '@/components/Atoms/Input/Input.vue'
import { Pokemon } from '@/utils/interface.ts'
import { defineProps } from 'vue'
type Props = {
  isLoading: boolean
  pokemonsList: Pokemon[]
  pageIndex: number
}
const { isLoading = true, pokemonsList = [], pageIndex = 1 } = defineProps<Props>()
const emits = defineEmits(['inputHandler', 'handlePagination'])
const handleSearch = (data: string) => {
  emits('inputHandler', data)
}

const handlePagination = (page: number) => {
  emits('handlePagination', page)
}
</script>
