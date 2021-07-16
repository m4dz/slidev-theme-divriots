<template>
  <div class="slidev-layout end w-full h-full grid grid-cols-2">
    <div class="flex items-center">
      <h1><span>Thank</span> You!</h1>
    </div>
    <div class="flex flex-col items-center justify-center">
      <img
        src="../public/img/m4dz.png"
        alt=""
        class="
          rounded-full
          ring ring-6 ring-inset ring-cool-gray-300
          bg-light-200
          w-50
        "
      />
      <h2>m4dz</h2>
      <p>Developer Advocate · DX Lover</p>
      <ul class="flex flex-row content-center">
        <li><a href="https://talks.m4dz.net">m4dz.net</a></li>
        <li><a href="https://twitter.com/m4d_z">@m4d_z</a></li>
      </ul>
      <a href="https://divrots.com" class="flex flex-col items-center mt-8">
        <img
          src="../public/img/Divriots_-_Typo_Black_Square_Space_256x.png"
          alt=""
          class="w-20 mb-2"
        />
        https://divriots.com
      </a>
    </div>
  </div>
</template>

<style scopde lang="postcss">
  .slidev-layout.end {
    h1 {
      @apply text-6xl;

      span {
        color: var(--slidev-theme-primary);
      }
    }

    h2 {
      @apply no-underline border-none;
      @apply my-4 p-0;
    }

    p {
      @apply my-0;
    }

    ul,
    a {
      @apply list-none;
      @apply text-sm text-cool-gray-300;
      border-color: var(--slidev-theme-primary);
    }
  }
</style>