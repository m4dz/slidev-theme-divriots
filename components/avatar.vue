<script setup lang="ts">
import { computed } from "vue";
import { configs } from "@slidev/client/env";

const { author } = configs.themeConfig;

const src = computed(() => {
  return new URL(`../img/${author}.png`, import.meta.url).href;
})

</script>

<template>
  <div class="avatar" v-if="author">
    <img
      :src="src"
      width="512"
      height="512"
      alt=""
    >
  </div>
</template>

<style scoped>
.avatar {
  @apply w-10 h-10;
  @apply rounded-full;
  @apply border-2px border-opacity-80 p-2px;
  @apply dark:border-light light:border-dark;
}

img {
  @apply bg-light bg-opacity-35;
  @apply rounded-full;
}
</style>
