<script setup lang="ts">
import { computed } from "vue";
import { configs } from "@slidev/client/env";
import { format, closestIndexTo, isPast } from "date-fns";
import Logo from '../img/divriots_square_typo_black.svg'

const nextDateIndex = computed(() => {
  let now = new Date();
  let dates = configs.dates.map((date) => new Date(date.datetime));
  let index = closestIndexTo(now, dates);

  return isPast(dates[index]) ? false : index;
});
</script>

<template>
  <div class="slidev-layout cover">
    <header>
      <div class="logo"><Logo class="logo-svg" /></div>
      <ul v-if="$slidev.configs.dates">
        <li
          class="datetime"
          v-for="(date, index) in $slidev.configs.dates"
          :key="index"
          v-show="index === nextDateIndex"
        >
          <div>
            <span>{{ date.name }}</span
            ><br />
            <time :datetime="date.datetime">{{
              format(new Date(date.datetime), "PP")
            }}</time>
          </div>
          <img v-if="date.logo" :src="`../img/${date.logo}`" alt="" />
        </li>
      </ul>
    </header>

    <div class="content">
      <slot />
    </div>

    <Footer
      class="footer"
      :permalink="$slidev.configs.permalink"
      :twitter="$slidev.configs.twitter"
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
  }

  .logo-svg {
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
}
</style>
