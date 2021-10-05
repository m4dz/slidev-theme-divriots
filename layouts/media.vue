<template>
  <div class="slidev-layout media grid w-full h-full center">
    <div class="m-auto w-7/12 h-full overflow-hidden flex flex-col items-center justify-center">
      <slot />
    </div>
    <Footer>
      <template v-slot:linkroll>
        <slot name="linkroll"></slot>
      </template>
    </Footer>
  </div>
</template>
