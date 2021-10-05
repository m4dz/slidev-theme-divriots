<template>
  <div class="slidev-layout icons grid h-full w-full">
    <div class="content m-auto flex flex-col h-full overflow-hidden justify-center">
      <slot />
    </div>

    <Footer>
      <template v-slot:linkroll>
        <slot name="linkroll"></slot>
      </template>
    </Footer>
  </div>
</template>

<style lang="postcss">
.slidev-layout.icons .content {
  ul {
    @apply grid grid-cols-4 gap-4;
    @apply list-none;
  }

  li {
    @apply px-0 py-4 m-0;
    @apply flex flex-col items-center;
  }

  svg {
    @apply w-16 h-auto py-2;
  }
}
</style>
