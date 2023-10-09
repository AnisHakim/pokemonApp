<template>
  <header class="test bg-gray-700 sticky top-0 z-10 text-white p-4 items-center flex">
    <img src="@/assets/images/pokemon.jpeg" width="40" class="mr-5" />
    <router-link class="hover:text-gray-300" :to="'/'">
      <h1 class="cursor-pointer">Home</h1>
    </router-link>
  </header>
</template>
