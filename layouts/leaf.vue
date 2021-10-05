<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps<{
  background?: string;
}>();

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout leaf grid w-full h-full relative text-5xl" :style="style">
    <div class="flex items-center absolute bottom-1.8rem left-2.4rem">
      <bi-chevron-left class="icon mr-4" />
      <slot />
      <bi-chevron-right class="icon ml-4" />
    </div>
    <hr
      class="
        border-dashed
        absolute
        bottom-6.8rem
        left-6.6rem
        right-3.6rem
        opacity-60
      "
    />
  </div>
</template>
