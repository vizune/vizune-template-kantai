<script setup lang="ts">
const links = [
  { name: 'About', to: { path: '/', hash: '#about'  }, color: 'breeze' },
  { name: 'Network', to: { path: '/', hash: '#network'}, color: 'apricot' },
  { name: 'Blog', to: { path: '/', hash: '#blog'   }, color: 'lime' },
  { name: 'Portfolio', to: { path: '/', hash: '#portfolio'}, color: 'sunflower' },
  { name: 'Contact', to: { path: '/', hash: '#contact'}, color: 'plum' },
];
</script>

<template>
  <ul class="grid grid-flow-row sm:grid-flow-col auto-cols-fr gap-1">
    <li v-for="link in links" :key="link.name" :class="`bg-${link.color} text-center flex`">
      <NuxtLink :to="link.to" class="w-full p-3 text-xl tracking-wider">
        {{ link.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
