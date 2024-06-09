<script setup lang="ts">
defineProps({
  position: String
})
</script>
<template>
  <div :class="`Wrapper Wrapper-${position} flex w-full bg-fixed bg-no-repeat`">
    <div class="w-full sm:w-3/6 bg-white lg:bg-transparent py-16 lg:py-28 px-[5%] mt-[400px] sm:mt-0">
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.Wrapper {
  &-left {
    background-position: left center;
    justify-content: flex-end;
  }
  &-right {
    background-position: right center;
  }
}
</style>
