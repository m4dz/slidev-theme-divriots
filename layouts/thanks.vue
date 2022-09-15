<script setup lang="ts">
import Default from './default.vue'
import QrcodeVue from 'qrcode.vue'

import logo from '../img/alwaysdata.svg?raw'
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
        <h1>m4dz</h1>
        <p>@m4d_z</p>
        <div class="company">
          <div>
            <span class="logo" v-html="logo"></span> <span>alwaysdata · http://alwaysdata.com</span>
          </div>
        </div>
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
  p {
    @apply m-0 p-0;
    @apply font-mono;
  }
}

.company {
  @apply mx-auto mt-16 text-sm;
}

.company div {
  @apply flex items-center gap-2;
  @apply my-2;
}

.logo {
  @apply grid items-center;
  @apply w-8 h-8 p-1;
  @apply rounded;
}

.backlight {
  @apply p-2;
}
</style>
