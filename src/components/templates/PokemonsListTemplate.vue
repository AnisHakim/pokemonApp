<template>
  <div class="flex w-[90vw] justify-evenly mx-auto flex-wrap mt-4">
    <InputAtom @inputHandler="handleSearch" :placeholder="`Search by name...`" class="mb-4" />
    <InputAtom
      @inputHandler="handleSearch"
      :placeholder="`Search by ID...`"
      class="mb-4"
      type="number"
    />
    <SelectAtom
      v-if="!isLoading"
      :options="options"
      @selectHandler="handleSelectOption"
      :text="'Select a sort option...'"
    />
  </div>
  <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
    <LoaderAtom />
  </div>
  <div v-else class="flex flex-wrap justify-evenly max-w-[90vw] mx-auto max-h-[90%] mt-14">
    <div v-for="(pokemon, i) in pokemonsList" :key="i">
      <PokemonCard :pokemon="pokemon" />
    </div>
  </div>
  <PaginationAtom
    class="flex justify-center w-full mb-14"
    :pageIndex="pageIndex"
    @pageNumberListner="handlePagination"
  />
  <ModalMolecule :visible="isOpenModal" @closeModal="handleCloseModal">
    <img src="@/assets/images/pokemon.jpeg" />
    <div>Pokemon was not Found !</div>
  </ModalMolecule>
</template>

<script setup lang="ts">
import LoaderAtom from '@/components/Atoms/Loader/LoaderAtom.vue'
import ModalMolecule from '@/components/Molecules/Modal/ModalMolecule.vue'
import PokemonCard from '@/components/Molecules/PokemonCard/PokemonCard.vue'
import PaginationAtom from '@/components/Atoms/Pagination/PaginationAtom.vue'
import InputAtom from '@/components/Atoms/Input/InputAtom.vue'
import SelectAtom from '@/components/Atoms/Select/SelectAtom.vue'
import type { Pokemon } from '@/utils/interface.ts'
import { defineProps } from 'vue'
const handleCloseModal = () => {
  emits('closeModal')
}
const options = [
  { label: 'ID Asc', value: 1 },
  { label: 'Alphabetically Asc', value: 2 },
  { label: 'Alphabetically Dsc', value: 3 }
]
type Props = {
  isLoading: boolean
  pokemonsList: Pokemon[]
  pageIndex: number
  isOpenModal: boolean
}
const {
  isLoading = true,
  pokemonsList = [],
  pageIndex = 1,
  isOpenModal = false
} = defineProps<Props>()
const emits = defineEmits(['inputHandler', 'handlePagination', 'selectHandler', 'closeModal'])
const handleSearch = (data: string) => {
  emits('inputHandler', data)
}
const handleSelectOption = (data: string) => {
  emits('selectHandler', data)
}
const handlePagination = (page: number) => {
  emits('handlePagination', page)
}
</script>
