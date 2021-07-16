<script setup lang="ts">
  import { defineProps } from "vue";

  defineProps<{
    src: string;
    caption?: string;
    class?: string;
  }>();
</script>

<template>
  <figure class="embed-media__img flex flex-col h-full" :class="class">
    <div class="flex-1 flex min-h-0">
      <img :src="src" alt="" class="max-h-full m-auto" />
    </div>
    <figcaption v-if="caption" class="flex items-center content-between justify-center mt-4">
      <bi-chevron-left class="icon inline-block text-xs mr-1" />
      {{ caption }}
      <bi-chevron-right class="icon inline-block text-xs ml-1" />
    </figcaption>
  </figure>
</template>