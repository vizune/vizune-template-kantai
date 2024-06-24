<script setup>
const links = [
  {
    name: 'About',
    url: '/about',
    color: 'breeze'
  },
  {
    name: 'Network',
    url: '/network',
    color: 'apricot'
  },
  {
    name: 'Blog',
    url: '/blog',
    color: 'lime'
  },
  {
    name: 'Portfolio',
    url: '/portfolio',
    color: 'sunflower'
  },
  {
    name: 'Contact',
    url: '/contact',
    color: 'plum'
  }
];
</script>
<template>
  <ul class="grid grid-flow-row sm:grid-flow-col auto-cols-fr gap-1">
    <li v-for="link in links" :class="`bg-${link.color} text-center flex`">
      <NuxtLink :to="link.url" class="w-full p-3 text-xl tracking-wider">{{ link.name }}</NuxtLink>
    </li>
  </ul>
</template>
