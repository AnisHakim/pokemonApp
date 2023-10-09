<template>
  <div class="relative">
    <input
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      @keyup.enter="onClickHandler"
      class="w-full py-2 pl-3 pr-10 border border-slate-400 rounded focus:outline-none focus:border-blue-500"
    />
    <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
      <img
        src="@/assets/images/searchIcon.png"
        class="w-[20px] cursor-pointer"
        @click="onClickHandler"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineProps } from 'vue'
defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
})
const inputValue = ref('')
const emit = defineEmits<{
  (e: 'inputHandler', value: String): void
}>()
const onClickHandler = () => {
  if (inputValue.value.toString().trim() !== '') {
    emit('inputHandler', inputValue.value)
  }
}
</script>
