<script setup lang="ts">
import Header from "@/components/Molecules/Header/Header.vue";
import {  RouterView } from 'vue-router'
import '@/assets/tailwind.css';
</script>

<template>
    <Header />
  <RouterView />
</template>

<style scoped>
</style>
