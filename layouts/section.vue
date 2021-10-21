<script setup lang="ts">
import { computed } from "vue";
import { currentRoute } from '@slidev/client/logic/nav'
import Default from './default.vue'

const props =
  defineProps<{
    background: string;
  }>();

const style = computed(() => {
  return `background-image:url(${props.background})`
})

const show = computed(() => {
  return !!currentRoute.value?.meta?.background
    || currentRoute.value?.meta?.layout === 'qa'
})
</script>

<template>
  <Default class="section">
    <div
      v-if="show"
      v-motion
      :initial="{ x: 0, y: 0, scale: 1.4 }"
      :enter="{ x: -60, y: 60, scale: 1.3, transition: { delay: 350, duration: 6500, type: 'tween', ease: 'easeOut'} }"
      class="background"
      :style="style"
    >
    <!-- TODO: Apply color filter transition -->
    </div>
    <slot />
  </Default>
</template>

<style scoped>
.section {
  @apply bg-gradient-to-l to-opacity-90 dark:to-dark-800;
  @apply text-shadow;
}
.background {
  @apply absolute bottom-0 left-0 w-full h-full -z-1;
  @apply bg-cover;
}
</style>

<style>
.slidev-layout.section h1 {
  @apply text-8xl mr-2/3 my-auto;
}
</style>
