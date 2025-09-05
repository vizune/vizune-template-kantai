import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // back/forward buttons keep native behavior
    if (savedPosition) return savedPosition

    // scroll to hash targets smoothly
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        // If you prefer JS offset instead of CSS scroll-mt:
        // top: 100, // px offset (supported by Vue Router)
      }
    }
    // default: go to top on route changes
    return { top: 0 }
  }
}
