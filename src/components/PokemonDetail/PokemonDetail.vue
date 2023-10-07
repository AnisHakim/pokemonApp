<template>
    <div>
      <h2>Pokemon Details</h2>
      <p>ID: {{ $route.params.name }}</p> <!-- Access the dynamic segment ID using $route.params.id -->
      <!-- Display other details of the Pokemon -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    // Component logic here
  });
  </script>