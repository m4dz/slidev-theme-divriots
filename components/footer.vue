<script setup lang="ts">
import { computed } from "vue";
import { currentRoute } from '@slidev/client/logic/nav'
import QrcodeVue from "qrcode.vue";

const props =
  defineProps<{
    noSlideno?: boolean;
    twitter?: string;
    permalink?: string;
    links?: Array<string>
    noAvatar: boolean;
  }>();

const linkrolls = computed(() => {
  const links = props.links?.map((link) => {
    const [url, title] = link.split('|').map(e => e.trim())
    return {
      url,
      title
    }
  })
  return links
})

const hasLinks = computed(() => {
  return !!currentRoute.value?.meta?.links
})
</script>

<template>
  <footer>
    <div v-if="permalink && $slidev.configs.permalink" class="permalink">
      <qrcode-vue
        class="qrcode"
        :value="permalink"
        level="L"
        render-as="svg"
        :size="26"
        background="transparent"
        foreground="var(--color-dark)"
      />
      <a :href="permalink">{{ permalink }}</a>
    </div>

    <hr class="flex-auto" />

    <a v-if="twitter && $slidev.configs.twitter" class="twitter" :href="`https://twitter.com/${twitter}`">
      <bx-bxl-twitter class="icn" />
      @{{ twitter }}
    </a>

    <Avatar class="avatar" v-if="!noAvatar" />

    <div v-if="!noSlideno" class="slideno">
      <SlideCurrentNo />
      <bi-chevron-down class="w-2 h-auto" />
    </div>

    <template v-if="linkrolls">
      <nav
        v-if="hasLinks"
        class="links"
        v-motion-slide-bottom
      >
        <ul>
          <li v-for="link in linkrolls">
            <codicon-pinned class="icon" />
            <a :href="link.url">
              <template v-if="link.title">{{ link.title }} | </template>{{ link.url }}
            </a>
          </li>
        </ul>
      </nav>
    </template>

    <Status />
  </footer>
</template>

<style scoped>
footer {
  @apply absolute inset-x-0 bottom-0;
  @apply px-10 py-6;
  @apply flex items-center;

  a {
    @apply border-none;
  }

  hr {
    @apply border-none;
  }
}

.slideno {
  @apply relative z-60;
  @apply flex flex-col items-center justify-center self-end;
  @apply ml-4;
  @apply text-xs;
}

.permalink {
  @apply flex items-center;
  @apply flex-auto;

  .qrcode {
    @apply mr-2;
  }
}

.twitter {
  @apply flex;
}

.avatar {
  @apply relative z-60;
  @apply ml-4;
}

.links {
  @apply absolute inset-x-0 bottom-0 z-50;
  @apply px-14 pb-5 pt-4;
  @apply dark:(bg-opacity-10 bg-light) light:(bg-opacity-10 bg-dark);
  @apply text-sm;
  @apply shadow-inner; /* TODO: Improve inner shadow */

  &::before {
    content: "";
    @apply absolute inset-x-20 -top-1px h-1px;
    @apply opacity-65;
    background-image: var(--gradient-spark);
  }

  li {
    @apply list-none p-0 m-0;
    @apply flex items-center;
  }

  .icon {
    @apply mr-1;
    @apply transform -rotate-35;
  }
}
</style>
