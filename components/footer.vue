<script setup>
import { computed, useSlots } from "vue";
const hasLinkroll = computed(() => {
  const slots = useSlots();
  return !!slots.linkroll && !!slots.linkroll()[0].children.length;
});
</script>


<template>
  <footer class="absolute bottom-0 right-0 left-0 p-6 pl-14 flex flex-row items-end  justify-end">
    <nav v-if="hasLinkroll" class="linkroll flex-auto">
      <slot name="linkroll" />
    </nav>
    <div class="slideno flex flex-col items-center">
      <SlideCurrentNo />
      <bi-chevron-down class="w-3" />
    </div>
  </footer>
</template>
