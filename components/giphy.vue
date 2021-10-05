<script setup lang="ts">
defineProps<{
  id: string;
  caption?: string;
  class?: string;
}>();
</script>

<template>
  <Gif v-bind="{provider: 'giphy', ...$props}" />
</template>
