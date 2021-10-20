<script setup lang="ts">
import Default from './default.vue'

const props = defineProps<{
    class?: string;
}>()
</script>

<template>
  <Default class="quote" :class="class">
    <slot />
  </Default>
</template>

<style scoped>
.quote {
  @apply text-3xl leading-12;
}
</style>
