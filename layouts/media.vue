<script setup lang="ts">
import { computed } from "vue";
import Gif from "../components/gif.vue";
import Default from "./default.vue";

const imgs = import.meta.globEager('../img/**/*');

const props =
  defineProps<{
    url: string;
    variant?: string;
    overlay?: boolean;
  }>();

const isGif = computed(() => {
  const r = /^<Gif/;
  return r.test(props.url);
});

const gifAttrs = computed(() => {
  const r_id = /id="([a-zA-Z0-9/-]+)"/;
  const r_provider = /provider="([a-zA-Z0-9]+)"/;
  const id = props.url.match(r_id)?.[1];
  const provider = props.url.match(r_provider)?.[1];
return {
    id,
    provider
  };
});

const isFull = computed(() => {
  return props.variant === "full";
});

const isSplit = computed(() => {
  return props.variant && props.variant != "full";
});

const classes = computed(() => {
  let classes = ["in-media"];

  if (!props.variant) classes.push("embed");
  if (props.overlay) classes.push("blur");

  return classes.join(" ");
});

const mURL = computed(() => {
  const resource = imgs[`.${props.url}`]
  return resource ? resource.default : props.url
})

const style = computed(() => {
  return `background-image:url(${mURL.value})`;
});
</script>

<template>
  <Default class="media" :class="`${variant} ${overlay? 'overlay': ''}`">
    <!-- TODO: Make a custom component for `in-media` variants (gif, img) -->
    <template v-if="isFull">
      <div class="in-media" :style="style"></div>
    </template>

    <slot />

    <template v-if="!variant">
      <div :class="classes">
        <img :src="mURL" alt="" />
      </div>
    </template>

    <template v-if="isSplit" v-slot:col2>
      <div>
        <component
          v-if="isGif"
          :is="Gif"
          :id="gifAttrs.id"
          :provider="gifAttrs.provider"
          :class="classes"
        ></component>
        <div v-else :class="classes" :style="style"></div>

        <template v-if="overlay">
          <component
            v-if="isGif"
            :is="Gif"
            :id="gifAttrs.id"
            :provider="gifAttrs.provider"
            class="overlay"
          ></component>
          <img v-else :src="mURL" alt="" class="overlay" />
        </template>
      </div>
    </template>
  </Default>
</template>

<style scoped>
.in-media.embed {
  @apply max-w-8/10 m-auto p-1 overflow-hidden;
  @apply rounded border-2 dark:border-dark-800;
  @apply bg-dark;
  @apply shadow-md dark:shadow-dark-900;

  img {
    @apply rounded;
    /* max-width: calc(100% - 0.5rem); */
    /* max-height: calc(100% - 0.5rem); */
    /* height: unset; */
  }
}
.no-border .in-media {
  @apply border-none shadow-none;
}

.no-bg .in-media {
  @apply bg-transparent;
}

.blur {
  @apply filter blur opacity-80;
  @apply -z-1;
}

.overlay {
  @apply relative w-full;
  @apply shadow-lg;
  @apply rounded;
}

.left.overlay {
  @apply text-left;

  .overlay {
    @apply transform -translate-x-4;
  }
}

.right.overlay {
  @apply text-right;

  .overlay {
    @apply transform translate-x-4;
  }
}

.col-2 {
  @apply self-center;
}

.media.full {
  .in-media {
    @apply absolute inset-2;
    @apply rounded bg-cover bg-center;
    @apply ring-0 ring-light-800;
  }
}

.media.left,
.media.right {
  .in-media {
    @apply absolute inset-y-0 m-0;
    @apply bg-cover;
  }
}

.media.left .in-media {
  @apply left-1/2 right-0 bg-right;
  @apply ml-4;
}

.media.left.ratio-2\/3 .in-media {
  @apply left-1/3;
}

.media.right .in-media {
  @apply left-0 right-1/2 bg-left;
  @apply mr-4;
}

.media.right.ratio-2\/3 .in-media {
  @apply right-2/3;
}
</style>

<style>
.media.full .links {
  /* TODO: Tokenize links bg opacity */
  @apply bg-dark bg-opacity-65;
}
</style>
