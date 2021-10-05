<script setup lang="ts">
defineProps<{
  class: string;
}>();
</script>

<template>
  <div class="slidev-layout two-columns-footer w-full h-full flex flex-col">
    <div class="grid grid-cols-2 h-full">
      <div class="col-left" :class="class">
        <slot />
      </div>
      <div class="col-right" :class="class">
        <slot name="right" />
      </div>
    </div>

    <div class="col-footer flex-auto" :class="class">
      <slot name="footer" />
    </div>

    <Footer>
      <template v-slot:linkroll>
        <slot name="linkroll"></slot>
      </template>
    </Footer>
  </div>
</template>
