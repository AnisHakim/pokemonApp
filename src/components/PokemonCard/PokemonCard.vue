<script setup>
import { defineProps } from 'vue'
import PokemonType from '../PokemonType/PokemonType.vue'
defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <router-link :to="`/pokemon/${pokemon.name}`">
        <div class="image">
        <span class="pokemon-number">#{{ ('000'+pokemon.id).slice(-'000'.length)}}</span>
        <img class="zoom-in" width="10" :alt="pokemon.name" :src="pokemon.img" />
        <strong class="name">{{ pokemon.name.toUpperCase() }}</strong>
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
.name {
  justify-content: center;
  color: grey;
  display: flex;
}

.image {
  cursor: pointer;
  background: rgb(228, 226, 226);
  width: 235px;
  height: 235px;
  color: #e1ede7;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 0 10px;
  position: relative;
  display: grid;
  overflow: hidden;
  transition: 0.3s;
}

.image img {
  max-width: 500px;
  width: 200px;
  max-height: 500px;
  height: 200px;
}

.card {
  width: 235px;
  border-radius: 10px;
  transition: 0.5s;
  margin-bottom: 2em;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  flex: 0 1 calc(20% - 1em);
  transition: opacity 1.5s;
  animation: 1s ease-out 0s 1 cardTransition;
}

.pokemon-number {
  position: absolute;
  top: 12px;
  left: 200px;
  font-size: 10px;
  font-weight: 700;
  color: #2F4F4F;
  text-shadow: #2b303a 0px 1px 1px;
  line-height: 1.6;
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

@media (max-width: 576px) {
  .image {
    width: 150px;
    height: 150px;
    font-size : 12px;
  }
  .pokemon-number {
    left:120px;
    top: 2px;
    font-weight: 500;
    font-size: 9px;
  }

  .image img {
    width: 130px;
    height: 130px;
  }
  .card {
    width: 150px;
  }
}
</style>
