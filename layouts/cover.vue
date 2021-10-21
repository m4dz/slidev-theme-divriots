<script setup lang="ts">
import { computed } from "vue";
import { configs } from "@slidev/client/env";
import { format, closestIndexTo, isPast } from "date-fns";

const imgs = import.meta.globEager('../img/**/*');

import logo from '../img/logo.svg?raw'

const props =
  defineProps<{
    permalink?: string;
    twitter?: string;
    author?: string;
  }>();

const now = new Date();

const dates = computed(() => {
  return configs.dates?.map((date) => {
    const _d = new Date(date.datetime);
    return {
      ...date,
      _d,
      i18n: format(_d, "PP"),
      logo: imgs[`../img/${date.logo}`].default
    }
  })
})

const nextDateIndex = computed(() => {
  let index = closestIndexTo(now, dates.value.map((date) => date._d));
  return isPast(dates.value[index]._d) ? false : index;
});
</script>

<template>
  <div class="slidev-layout cover">
    <header>
      <div class="logo" v-html="logo"></div>
      <ul v-if="dates">
        <li
          class="datetime"
          v-for="(date, index) in dates"
          :key="index"
          v-show="index === nextDateIndex"
        >
          <div>
            <span>{{ date.name }}</span>
            <br>
            <time :datetime="date.datetime">{{ date.i18n }}</time>
          </div>
          <img v-if="date.logo" :src="date.logo" alt />
        </li>
      </ul>
    </header>

    <div class="content">
      <slot />
    </div>

    <Footer
      class="footer"
      :permalink="permalink"
      :twitter="twitter"
      no-slideno
    />
  </div>
</template>

<style scoped>
.cover {
  @apply flex flex-col;
  background-image: var(--gradient-drc);
}

.content {
  @apply flex-auto;
  @apply grid;
}

.cover header {
  @apply flex;

  .logo {
    @apply flex-auto;
    @apply h-14;
    @apply fill-current dark:text-light light:text-dark;
  }
}

.datetime {
  @apply list-none m-0 p-0;
  @apply flex items-center;
  @apply leading-5;

  time {
    @apply text-sm;
  }

  img {
    @apply h-12 ml-4;
  }
}

.footer {
  @apply text-dark;
  @apply px-14;
}
</style>

<style>
.slidev-layout.cover {
  h1 {
    @apply m-0;
    @apply text-7xl;
    /* TODO: Text Shadow (https://github.com/iunteq/tailwindcss-textShadow) */
  }
  .tagline {
    @apply self-end;
    @apply font-sans text-4xl font-light;
    @apply pb-3 m-0 mb-3;
    @apply relative;
  }
  .tagline::after {
    content: "";
    @apply absolute inset-x-0 -bottom-2px h-3px;
    @apply z-0;
    background-image: var(--gradient-separator);
  }
  .tagline::before {
    content: "";
    @apply absolute inset-x-20 -bottom-1px h-1px;
    @apply z-1;
    background-image: var(--gradient-spark);
  }

  .logo svg {
    @apply h-full;
  }
}
</style>
