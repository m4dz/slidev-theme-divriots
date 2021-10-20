<script setup lang="ts">
import { computed, useSlots } from "vue";
import { currentRoute } from "@slidev/client/logic/nav";

const slots = useSlots();

const props = withDefaults(
  defineProps<{
    class?: string;
    links?: Array<string>;
    logo?: string;
    ratio?: string;
    noFooter?: boolean
  }>(),
  {
    ratio: "1/1",
  }
);

const cols = computed(() => {
  return props.ratio != "1/1"
    ? `grid-cols-${props.ratio.split("/").pop().trim()}`
    : !!slots.col3
      ? "grid-cols-3"
      : !!slots.col2
        ? "grid-cols-2"
        : "grid-cols-1";
});

const classes = computed(() => {
  return `${props.class} ratio-${props.ratio}`
});

const hasLogo = computed(() => {
  return !!currentRoute.value?.meta?.logo;
});

// TODO: move to props
const showAvatar = computed(() => {
  return !['thanks', 'author'].includes(currentRoute.value?.meta?.layout);
})
</script>

<template>
  <div class="slidev-layout" :class="classes">
    <template v-if="logo">
      <img v-if="hasLogo" v-motion-pop class="in-logo" :src="logo" alt="" />
    </template>

    <div class="content">
      <div class="wrapper">
        <slot name="header" />
        <div class="cols" :class="cols">
          <div class="col col-1">
            <slot />
          </div>

          <div v-if="slots.col2" class="col col-2">
            <slot name="col2" />
          </div>

          <div v-if="slots.col3" class="col col-3">
            <slot name="col3" />
          </div>
        </div>
      </div>
    </div>

    <Footer :links="props.links" :no-avatar="!showAvatar" />
  </div>
</template>

<style scoped>
.slidev-layout {
  @apply flex flex-col;
  @apply bg-gradient-to-br from-transparent dark:to-dark-800 light:to-light-800;
}

.content {
  @apply flex-auto grid;
}

.wrapper {
  @apply my-auto;
}

.cols {
  @apply grid gap-8;
}

.col {
  @apply grid;
}

.in-logo {
  @apply absolute top-10 left-14;
  @apply w-14;
}

/***
 SLIDES TYPES OVERRIDES
 */
/* TODO: Put relevant styles in layouts */
.section .wrapper {
  @apply mb-0;
}

.media .col-1 {
  @apply my-auto;
}
.media.right .col-1 {
  @apply order-1;
}

/* TODO: Make all ratios dynamic */
.left.ratio-2\/3 .col-2 {
  @apply col-span-2;
}

.right.ratio-2\/3 .col-1 {
  @apply col-start-2 col-span-2;
}
</style>
