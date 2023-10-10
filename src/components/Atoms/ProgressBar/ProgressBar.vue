<script setup lang="ts">
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
let colorRef: any = 'blue'

onMounted(() => {
  switch (labelRef.value) {
    case 'HP':
      colorRef = 'blue'
      break
    case 'ATTACK':
      colorRef = 'red'
      break
    case 'DEFENSE':
      colorRef = 'green'
      break
    case 'SPECIAL-ATTACK':
      colorRef = 'indigo'
      break
    case 'SPECIAL-DEFENSE':
      colorRef = 'purple'
      break
    case 'SPEED':
      colorRef = 'yellow'
      break
    default:
      colorRef = 'blue'
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
