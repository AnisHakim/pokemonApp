<template>
  <div class="custom-select">
    <select v-model="selectedOption" @change="handleChange">
      <option value="" disabled>{{ text }}</option>
      <option v-for="(option, index) in options" :value="option.value" :key="index">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const selectedOption = ref('')

interface OptionType {
  label: string
  value: number
}
defineProps<{
  options: OptionType[]
  text: string
}>()
const emit = defineEmits<{
  (e: 'selectHandler', value: String): void
}>()
const handleChange = () => {
  emit('selectHandler', selectedOption.value)
}
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 300px;
}

.custom-select select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #f1f1f1;
  color: #333;
  cursor: pointer;
}

.custom-select select:focus {
  outline: none;
  box-shadow: 0 0 5px #007bff;
}

.custom-select select::-ms-expand {
  display: none;
}

.custom-select::after {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>
