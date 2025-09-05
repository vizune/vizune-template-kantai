<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const headerRef = ref<HTMLElement | null>(null)
const router = useRouter()
const updateHeaderHeight = () => {
  const h = headerRef.value?.offsetHeight ?? 0
  document.documentElement.style.setProperty('--header-h', `${h}px`)
}
const goTop = async () => {
  if (window.location.pathname !== '/') await router.push({ path: '/' })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  updateHeaderHeight()
  window.addEventListener('resize', updateHeaderHeight)
})
onBeforeUnmount(() => window.removeEventListener('resize', updateHeaderHeight))
</script>

<template>
  <!-- static on mobile; fixed from lg up -->
  <header
    ref="headerRef"
    class="inset-x-0 top-0 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60 lg:fixed lg:z-50"
  >
    <div class="pt-6 sm:pt-12 pb-1 text-center">
      <button type="button" class="inline-block" @click="goTop" aria-label="Back to top">
        <SiteName />
      </button>
    </div>
    <div class="text-center">
      <Navigation class="py-1 mt-3" />
    </div>
  </header>
</template>
