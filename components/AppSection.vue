<script setup lang="ts">
defineProps({
  position: String
})
</script>

<template>
  <section
    v-bind="$attrs"
    :class="`Wrapper Wrapper-${position} flex w-full bg-fixed bg-no-repeat lg:scroll-mt-[var(--header-h)]`"
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
  min-height: calc(100vh - var(--header-h));

  &-left {
    background-position: left 3rem;
    justify-content: flex-end;
  }

  &-right {
    background-position: right 3rem;
  }

  // Mobile: the image sits in the 400px gap above the white text box,
  // so scale it to that height and let it scroll with the section
  @media (max-width: 639px) {
    &.Wrapper-left,
    &.Wrapper-right {
      background-attachment: scroll;
      background-size: auto 475px;
    }

    &.Wrapper-left { background-position: left top; }
    &.Wrapper-right { background-position: right top; }
  }
}
</style>
