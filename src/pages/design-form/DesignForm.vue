<script setup lang="ts">
  const props = defineProps({
    id: String,
  })
</script>

<template>
  <h2 class="w-12 text-gray-700">Form {{ props.id }}</h2>
</template>
