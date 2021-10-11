<template>
  <span class="status">
    <span
      class="progress"
      :style="`width:${($slidev.nav.currentPage - 1) / ($slidev.nav.total - 1) * 100}%`"
    ></span>
  </span>
</template>

<style scoped>
.status {
  @apply absolute inset-x-0 bottom-0 z-90;
  @apply h-1;
  @apply bg-opacity-40 bg-dark-600;
}
.progress {
  @apply absolute inset-y-0 left-0;
  @apply bg-primary bg-opacity-80;
}
</style>
