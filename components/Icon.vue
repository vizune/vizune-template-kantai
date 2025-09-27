<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string                // e.g. 'steam', 'github'
  size?: number | string      // e.g. 24 or '1.5rem'
  title?: string              // optional accessible title
}>(), { size: 24 })

const px = typeof props.size === 'number' ? `${props.size}px` : props.size
</script>

<template>
  <svg
    :width="px"
    :height="px"
    viewBox="0 0 640 640"
    fill="currentColor" 
    aria-hidden="true"
    role="img"
  >
    <title v-if="title">{{ title }}</title>
    <use :href="`#${name}`" :xlink:href="`#${name}`" />
  </svg>
</template>
