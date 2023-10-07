<template>
  <span class="commun" :class="pokemonType">{{ pokemonType }}</span>
</template>
<script setup>
  import { defineProps } from 'vue';
 defineProps({
  pokemonType : {
      type : String,
      default:''
    }
})
</script>

<style scoped>
 .commun{
   border-radius: 5px;
   color: white;
   padding: 5px 10px;
 }
.fire {
  background-color: #FA8072;
}

.water{
  background-color: #87CEEB;
}

.grass {
  background-color: #32CD32;
}
.bug {
background-color: #808000;
}
.flying{
 background-color: #FF8C00;
}
.poison{
background-color: 	#DA70D6;
}

.normal {
  background-color: #adae81;
}

.fighting {
  background-color: #c03028;
}
.ground {
  background-color: #e0c068;
}
.ghost {
  background-color: #705899;
}
.steel {
  background-color: #b8b9d0;
}
.electric {
  background-color: #f8d030;
}

.psychic {
  background-color: #f85888;
}

.ice {
  background-color: #98d8d9;
}

.dragon {
  background-color: #7038f8;
}

.dark {
  background-color: #715848;
}

.fairy {
  background-color: #e29dac;
}

</style>

