<script setup lang="ts">
  import { defineProps } from "vue";

  defineProps<{
    id: string;
    caption?: string;
    class?: string;
  }>();
</script>

<template>
  <figure class="embed-media__giphy gif overflow-hidden flex flex-col">
    <div class="flex-1 flex" :class="class">
      <video muted playsinline autoplay loop class="max-h-full min-w-full m-auto">
        <source :src="'https://media.giphy.com/media/' + id + '/giphy.mp4'" />
        <img
          :src="'https://media.giphy.com/media/' + id + '/giphy.gif'"
          alt=""
        />
      </video>
    </div>
    <figcaption v-if="caption" class="flex items-center content-between justify-center mt-4">
      <bi-chevron-left class="icon inline-block text-xs mr-1" />
      {{ caption }}
      <bi-chevron-right class="icon inline-block text-xs ml-1" />
    </figcaption>
  </figure>
</template>