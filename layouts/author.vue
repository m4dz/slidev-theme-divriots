<script setup lang="ts">
import { computed } from "vue";
import { currentRoute } from "@slidev/client/logic/nav";
import { configs } from "@slidev/client/env";

import Media from './media.vue'

import logo from '../img/alwaysdata.svg?raw'

const showAvatar = computed(() => {
  return currentRoute.value?.meta?.layout === 'author';
})

const urlCover = computed(() => {
  return new URL(`../img/${configs.themeConfig.author}.jpg`, import.meta.url).href
})
</script>

<template>
  <Media
    variant="right"
    :url="urlCover"
  >
    <div class="author">
      <div
        v-if="showAvatar"
        v-motion-pop
      >
        <Avatar class="avatar" />
        <h1>m4dz</h1>
        <p>
          DX Engineer <br>
          (Dev)tools Nerd
        </p>
      </div>
      <div class="company">
        <div>
          <span class="logo" v-html="logo"></span>
          <span>alwaysdata · http://alwaysdata.com</span>
        </div>
      </div>
    </div>
  </Media>
</template>

<style scoped>
.link {
  @apply flex items-center gap-2
  @apply my-0;
}

.author {
  @apply flex flex-col items-center;

  & > div:first-of-type {
    @apply flex flex-col items-center;
  }

  .avatar {
    @apply w-40 h-40;
  }
  h1 {
    @apply text-4xl my-4;
  }
  p {
    @apply font-mono;
    @apply text-center;
  }
}

.company {
  @apply mx-auto mt-16 text-sm;
}

.company div {
  @apply flex items-center gap-2;
  @apply my-2;
}

.logo {
  @apply grid items-center;
  @apply w-8 h-8 p-1;
  @apply rounded;
}

.backlight {
  @apply p-2;
}
</style>
