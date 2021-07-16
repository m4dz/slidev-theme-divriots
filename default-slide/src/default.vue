<template>
  <div class="slidev-layout default grid h-full w-full">
    <div class="m-auto flex flex-col h-full overflow-hidden justify-center">
      <slot />
    </div>
    <Footer>
      <template v-slot:linkroll>
        <slot name="linkroll"></slot>
      </template>
    </Footer>
  </div>
</template>