<template>
  <PokemonListTemplate
    :isLoading="isLoading"
    :isOpenModal="isOpenModal"
    :pokemonsList="pokemonStore.pokemonsList"
    :pageIndex="pokemonStore.pageIndex"
    @inputHandler="handleSearch"
    @handlePagination="handlePagination"
    @selectHandler="selectHandler"
    @closeModal="closeModal"
  />
</template>

<script setup lang="ts">
import PokemonListTemplate from '@/components/templates/PokemonsListTemplate.vue'
import { usePokemonStore } from '@/stores/PokemonStore'
import { getPokemonDetailsAPI } from '@/services/api.ts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const pokemonStore = usePokemonStore()
const router = useRouter()
const isLoading = ref(true)
const isOpenModal = ref(false)
if (pokemonStore.pokemonsList.length === 0) {
  isLoading.value = true
  pokemonStore.fetchPokemons(0, 25).then(() => (isLoading.value = false))
} else {
  isLoading.value = false
}
const closeModal = () => {
  isOpenModal.value = false
}
const handleSearch = async (data: string): Promise<void> => {
  try {
    isLoading.value = true
    const response = await getPokemonDetailsAPI(data)
    if (response) {
      await pokemonStore.fetchPokemonDetails(data, response)
      isLoading.value = false
      router.push({
        name: 'pokemon-detail',
        params: { name: data }
      })
    }
  } catch (error) {
    isOpenModal.value = true
    isLoading.value = false
  }
}
const selectHandler = (data: string) => {
  pokemonStore.sortPokemons(data)
}
async function handlePagination(page: number): Promise<void> {
  isLoading.value = true
  pokemonStore.updatePageIndex(page)
  await pokemonStore.fetchPokemons((page - 1) * 25, 25)
  isLoading.value = false
}
</script>
