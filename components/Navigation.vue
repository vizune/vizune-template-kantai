<script setup lang="ts">
const links = [
  { name: 'Designs', to: { path: '/', hash: '#designs' }, color: 'breeze', hex: '#cbe9f7' },
  { name: 'Portfolio', to: { path: '/', hash: '#portfolio' }, color: 'apricot', hex: '#f9bc9c' },
  { name: 'Blog', to: { path: '/', hash: '#blog' }, color: 'lime', hex: '#c9f3c9' },
  { name: 'TCG', to: { path: '/', hash: '#tcg' }, color: 'sunflower', hex: '#fffaa6' },
  { name: 'Reviews', to: { path: '/', hash: '#reviews' }, color: 'plum', hex: '#dbb6bf' },
]
</script>

<template>
  <ul class="grid grid-flow-row sm:grid-flow-col auto-cols-fr gap-1">
    <li
      v-for="link in links"
      :key="link.name"
      :class="`relative overflow-hidden group border-2 border-[var(--c)] bg-${link.color} text-center flex`"
      :style="{ '--c': link.hex }"
    >
      <span
        class="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0
               transition-transform duration-500 ease-out will-change-transform"
        aria-hidden="true"
      />
      <NuxtLink
        :to="link.to"
        class="relative z-10 w-full p-3 text-xl tracking-wider
               transition-colors duration-500 ease-out
               text-black group-hover:text-[var(--c)]"
      >
        {{ link.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .group > .absolute { transition: none; }
  .group .relative { transition: none; }
}
</style>
