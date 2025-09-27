<script setup lang="ts">
const props = withDefaults(defineProps<{ text:string; palette?: string[] }>(), {
  palette: () => ['#beb8c8','#bfe0ee','#f3b28e','#c6f0c7','#fffba3','#cbb8c8']
})
let i = -1
const next = (ch:string) => (/\s/.test(ch) ? undefined : props.palette[i = (i+1)%props.palette.length])
</script>

<template>
  <span aria-hidden="false">
    <span v-for="(ch,idx) in text.split('')" :key="idx" :style="{ color: next(ch) }">
      {{ ch === ' ' ? '\u00A0' : ch }}
    </span>
  </span>
</template>
