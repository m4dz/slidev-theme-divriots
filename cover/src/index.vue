<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full h-full flex flex-col">
      <div class="flex-grow grid content-center">
        <slot />
      </div>
      <footer class="flex justify-between">
        <span class="flex items-center" v-if="$slidev.configs.permalink">
          <bx-bx-slideshow class="icon inline-block mr-1" />
          <a :href="$slidev.configs.permalink">{{
            $slidev.configs.permalink
          }}</a>
        </span>
        <span class="flex items-center" v-if="$slidev.configs.twitter">
          <bx-bxl-twitter class="icon inline-block mr-1" />
          <a :href="'https://twitter.com/' + $slidev.configs.twitter"
            >@{{ $slidev.configs.twitter }}</a
          >
        </span>
      </footer>
    </div>
  </div>
</template>