<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
  id: string;
  provider?: string;
  caption?: string;
  class?: string;
}>(), {
  provider: 'giphy'
});

const base = computed(() => {
  let base = '';
  switch(props.provider.toLowerCase()) {
    case 'giphy':
      base = `https://media.giphy.com/media/${props.id}/giphy`;
      break;
    case 'gifer':
      base = `https://i.gifer.com/${props.id}`
      break;
  }
  return base;
});
</script>

<template>
  <figure class="gif flex flex-col justify-center" :class="`embed-media__${provider} ${props.class}`">
    <div class="flex h-full">
      <video
        muted
        playsinline
        autoplay
        loop
        class="max-h-full min-w-full m-auto"
      >
        <source :src="`${base}.mp4`" />
        <img
          :src="`${base}.gif`"
          alt=""
        />
      </video>
    </div>
    <figcaption
      v-if="caption"
      class="flex items-center content-between justify-center mt-4"
    >
      <bi-chevron-left class="icon inline-block text-xs mr-1" />
      {{ caption }}
      <bi-chevron-right class="icon inline-block text-xs ml-1" />
    </figcaption>
  </figure>
</template>
