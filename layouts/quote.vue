<script setup lang="ts">
import { computed } from "vue";
import Default from './default.vue'

const props = defineProps<{
  class?: string;
  cite?: string;
  author?: string;
}>()

const style = computed(() => {
  return `background-image:url(${props.author})`;
});
</script>

<template>
  <Default class="quote" :class="class">
    <span class="author" :style="style" v-if="author" />
    <slot />
    <cite v-if="cite">{{ cite }}</cite>
  </Default>
</template>

<style scoped>
.quote {
  @apply text-3xl leading-12;
}

cite {
  @apply mt-8;
  @apply text-xl;
}

.author {
  @apply absolute top-10 right-14;
  @apply w-50 h-50 bg-center bg-cover;
  @apply rounded-full ring-inset ring-6 ring-light-900 ring-opacity-50;
}
</style>
