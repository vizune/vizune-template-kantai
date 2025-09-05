<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'Vizune Template: Kantai',
  meta: [{ name: 'description', content: 'Nuxt template called Kantai by Vizune.com' }]
})
</script>

<template>
  <div>
    <AppHeader />

    <!-- Push content below the fixed header using the measured CSS var -->
    <main class="lg:pt-[var(--header-h)]">
      <nuxt-page />
      <AppFooter />
    </main>
  </div>
</template>