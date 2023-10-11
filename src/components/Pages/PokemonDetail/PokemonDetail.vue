<template>
  <PokemonDetailTemplate :pokemonGetDetails="pokemonGetDetails" :isLoading="isLoading" />
</template>

<script setup lang="ts">
import PokemonDetailTemplate from '@/components/templates/PokemonDetailTemplate.vue'
import { usePokemonStore } from '@/stores/pokemonStore'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const isLoading = ref(true)
const pokemonStore = usePokemonStore()
const route = useRoute()
const { pokemonGetDetails } = pokemonStore
pokemonStore.fetchPokemonDetails(route.params.name).then(() => (isLoading.value = false))
</script>
