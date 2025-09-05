<script setup lang="ts">
defineProps({
  position: String
})
</script>

<template>
  <section
    v-bind="$attrs"
    :class="`Wrapper Wrapper-${position} flex w-full bg-fixed bg-no-repeat scroll-mt-[var(--header-h)]`"
  >
    <div
      class="w-full sm:w-3/6 bg-white lg:bg-transparent py-16 lg:py-28 px-[5%] mt-[400px] sm:mt-0"
    >
      <slot />
    </div>
  </section>
</template>

<style lang="scss">
.Wrapper {
  /* Apply the minimum height to the root section */
  min-height: calc(100vh - var(--header-h));

  &-left {
    background-position: left 3rem;
    justify-content: flex-end;
  }

  &-right {
    background-position: right 3rem;
  }
}
</style>
