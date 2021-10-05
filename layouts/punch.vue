<template>
  <div class="slidev-layout punch grid w-full h-full">
    <bi-bookmark-star
      class="
        icon
        absolute
        top-2/4
        left-0
        -translate-y-2/4
        transform
        text-22xl
        opacity-20
        z-0
      "
    />
    <div class="my-auto relative z-1">
      <slot />
    </div>
    <Footer>
      <template v-slot:linkroll>
        <slot name="linkroll"></slot>
      </template>
    </Footer>
  </div>
</template>
