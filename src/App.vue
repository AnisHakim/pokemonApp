<script setup lang="ts">
import HeaderMolecule from '@/components/Molecules/Header/HeaderMolecule.vue'
import { RouterView } from 'vue-router'
import '@/assets/tailwind.css'
</script>

<template>
  <HeaderMolecule />
  <RouterView />
</template>

<style scoped></style>
