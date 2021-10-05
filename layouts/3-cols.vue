<script setup lang="ts">
defineProps<{
  class: string;
}>();
</script>

<template>
  <div class="slidev-layout w-full h-full flex flex-col" :class="class">
    <slot />
    <div class="grid grid-cols-3 gap-2rem my-auto">
      <div class="col-left" :class="class">
        <slot name="left"/>
      </div>
      <div class="col-middle" :class="class">
        <slot name="middle" />
      </div>
      <div class="col-right" :class="class">
        <slot name="right" />
      </div>
    </div>

    <Footer>
      <template v-slot:linkroll>
        <slot name="linkroll"></slot>
      </template>
    </Footer>
  </div>
</template>
