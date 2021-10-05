<template>
  <div class="slidev-layout quote grid w-full h-full">
    <bi-chat-left-quote
      class="
        icon
        absolute
        top-2/4
        left-10
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
