<script setup lang="ts">
import Default from './default.vue'
import QrcodeVue from 'qrcode.vue'
</script>

<template>
  <Default class="self-center">
    <template v-slot:default>
      <div class="thanks">
        <h1>Thanks!</h1>
        <p class="link" v-if="$slidev.configs.permalink">
          <qrcode-vue
            class="qrcode"
            :value="permalink"
            level="L"
            render-as="svg"
            :size="26"
            background="transparent"
            foreground="currentColor"
          />
          {{ $slidev.configs.permalink }}
        </p>
      </div>
    </template>
    <template v-slot:col2>
      <div class="author">
        <Avatar class="avatar" />
        <h1>{{ $slidev.configs.author }}</h1>
        <p>Some personal branding tagline</p>
      </div>
    </template>
  </Default>
</template>

<style scoped>
.thanks {
  @apply h-full;
  @apply flex flex-col justify-center;

  h1 {
    @apply text-8xl;
  }
}

.link {
  @apply flex items-center gap-2
  @apply my-0;
}

.author {
  @apply flex flex-col items-center;

  .avatar {
    @apply w-40 h-40;
  }
  h1 {
    @apply text-4xl my-4;
  }
}
</style>
