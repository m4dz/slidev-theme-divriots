<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    id: string;
    provider?: string;
    caption?: string;
    class?: string;
  }>(),
  {
    provider: "giphy",
  }
);

const base = computed(() => {
  let base = "";
  switch (props.provider.toLowerCase()) {
    case "giphy":
      base = `https://media.giphy.com/media/${props.id}/giphy`;
      break;
    case "gifer":
      base = `https://i.gifer.com/${props.id}`;
      break;
    case "tenor":
      base = `https://c.tenor.com/${props.id}`
      break;
  }
  return base;
});
</script>

<template>
  <figure class="gif" :class="`embed-media__${provider} ${props.class}`">
    <div>
      <video muted playsinline autoplay loop>
        <source :src="`${base}.mp4`" />
        <source :src="`${base}.mp4`" v-if="props.provider === 'tenor'" />
        <img :src="`${base}.gif`" alt="" v-if="props.provider != 'tenor'" />
      </video>
    </div>
    <figcaption v-if="caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style scoped>
figure {
  @apply flex flex-col justify-center;

  div {
    @apply flex h-full;
  }
}

figcaption {
  @apply flex items-center content-between justify-center mt-4;
}

video {
  @apply rounded;
}

figure:not(.in-media) video {
  @apply max-h-full min-w-full m-auto;
}

figure.in-media video {
  @apply object-cover;
}
</style>
