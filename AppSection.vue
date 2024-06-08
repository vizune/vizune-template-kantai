<script setup lang="ts">
defineProps({
  background: String
})
</script>
<template>
  <div :class="`h-64 w-full bg-cover bg-center bg-${background}`">
    <slot />
  </div>
</template>
