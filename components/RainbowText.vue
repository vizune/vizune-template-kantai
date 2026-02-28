<script setup lang="ts">
const props = withDefaults(
  defineProps<{ text: string; palette?: string[] }>(),
  {
    palette: () => [
      '#beb8c8',
      '#bfe0ee',
      '#f3b28e',
      '#c6f0c7',
      '#fffba3',
      '#cbb8c8'
    ]
  }
)

let i = -1
const next = () =>
  props.palette[(i = (i + 1) % props.palette.length)]
</script>

<template>
  <span>
    <template v-for="(word, wIndex) in text.split(' ')" :key="wIndex">
      <span class="inline-block whitespace-nowrap">
        <span
          v-for="(ch, cIndex) in word"
          :key="cIndex"
          :style="{ color: next() }"
        >
          {{ ch }}
        </span>
      </span>
      <!-- normal space between words -->
      <span v-if="wIndex < text.split(' ').length - 1">
        &nbsp;
      </span>
    </template>
  </span>
</template>