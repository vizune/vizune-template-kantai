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
  // If not on '/', navigate there first, then scroll to top
  if (window.location.pathname !== '/') {
    await router.push({ path: '/' })
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateHeaderHeight()
  window.addEventListener('resize', updateHeaderHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeaderHeight)
})
</script>

<template>
  <!-- Fixed full header (site name + nav) -->
  <header
    ref="headerRef"
    class="fixed inset-x-0 top-0 z-50 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60"
  >
    <!-- Site name row -->
    <div class="pt-6 sm:pt-8 pb-1 text-center">
      <!-- Make the site name clickable to scroll to top -->
      <button
        type="button"
        class="inline-block"
        @click="goTop"
        aria-label="Back to top"
      >
        <SiteName />
      </button>
    </div>

    <!-- Navigation row -->
    <div class="text-center">
      <Navigation class="py-3 lg:py-1 lg:mt-3" />
    </div>
  </header>
</template>
