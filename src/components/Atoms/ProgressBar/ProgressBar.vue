<script setup>
import { Progress } from 'flowbite-vue'
import { defineProps, onMounted, ref } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  progress: {
    type: Number,
    default: 0
  }
})
const labelRef = ref(props.label)
const colorRef = ref(props.color)

onMounted(() => {
  switch (labelRef.value) {
    case 'HP':
      colorRef.value = 'blue'
      break
    case 'ATTACK':
      colorRef.value = 'red'
      break
    case 'DEFENSE':
      colorRef.value = 'green'
      break
    case 'SPECIAL-ATTACK':
      colorRef.value = 'indigo'
      break
    case 'SPECIAL-DEFENSE':
      colorRef.value = 'purple'
      break
    case 'SPEED':
      colorRef.value = 'yellow'
      break
    default:
      colorRef.value = 'blue'
  }
})
</script>
<template>
  <Progress
    size="lg"
    :label="label"
    labelPosition="inside"
    :labelProgress="true"
    :color="colorRef"
    :progress="progress"
  ></Progress>
</template>
