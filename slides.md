---
theme: ./

permalink: https://m4dz.net/t/mushin-way/

author: m4dz
twitter: m4d_z

info: >
  Have you ever imagined that your task as a User Interface Developer would one day become that complex? We had to support responsive design, and it was already difficult at some point. Truth is it was only the smallest of our daemons.

  It's 2022. We still have to address devices with very non-homogeneous screen sizes, but also very diverse SoC, performance variations, users prefs-based themes, network issues from Edge to 5G or WiFi. And the list will go on growing.

  Facing this, we can't continue to handle interfaces the way we did for the last years. We need to shift left, and burn into our Design Systems how to address configurations depending on the context. By moving the responsibility to the components level, we would be able to test, adapt, and deploy at scale complex interfaces without having to fear unexpected issues on some configurations.

  Here's how to proceed to build context-proof UI as an Interface Developer in 2022.

dates:
  - name: Angular Global Summit 22
    datetime: 2022-03-30T20:05+0200
  - name: SnowCamp
    datetime: 2022-02-03T14:00+0100
    permalink: https://snowcamp2022.sched.com/event/vebU/the-mushin-way-to-frontend-performance-switch-left-to-a-pure-design-system
    logo: snowcamp.webp
---

<p class="tagline">The Mushin Way to Frontend Performance</p>

# Shift Left to a Pure Design System

---

# We build Web ==apps==

<ul class="tiles">
  <v-clicks>
    <li><oi-browser class="inline" /> Browsers</li>
    <li><oi-monitor class="inline" /> Desktops/Laptops</li>
    <li><oi-tablet class="inline" /> Mobiles/Tablets</li>
  </v-clicks>
</ul>

<style>
  .tiles {
    @apply grid grid-cols-3 gap-8;
    @apply my-10;

    li {
      @apply list-none m-0 text-center;
      @apply flex flex-col items-center;
      @apply max-w-2/3 mx-auto;

      &.slidev-vclick-target {
        transition-property: transform, opacity;
        transform: translateZ(0) scale(0); opacity: 0;
      }
      &.slidev-vclick-prior,
      &.slidev-vclick-current {
        transform: translateZ(0) scale(1); opacity: 1;
      }
    }

    .slidev-icon {
      @apply w-20 h-auto;
      @apply mb-4;
    }
  }
</style>

---
layout: media
url: <Gif id="24NFlkLka4VvwGVsjj"/>
variant: left
class: text-3xl leading-22
---

# The web is still a **World** of Inconsistencies

---
layout: media
url: <Gif id="zOvBKUUEERdNm"/>
variant: right
overlay: true
class: text-3xl leading-22
---

# How Could We Focus On **Features** ==Rather== than **Bugfixing**?

---
layout: section
background: https://source.unsplash.com/MskbR8VLNrA/1920x1080
---

# The 2022 complexity

---
layout: media
url: ./img/caniuse_container-queries.png
variant: full
---

<!-- browsers don't have all capabilities -->

---
layout: media
url: https://techcrunch.com/wp-content/uploads/2016/07/device_testing_lab_facebook.jpg
variant: left
class: text-3xl leading-22
links:
  - https://techcrunch.com/2016/07/13/facebook-lifts-the-veil-on-its-mobile-device-lab/
---

# Different ==Devices==, Different **Capabilities**

---
class: text-3xl leading-22
---

# Usage may vary **between** users,

<v-click>

# sometimes for the **same** user

</v-click>

---
layout: media
url: <Gif id="kvl2YhR110qsBrHid2"/>
variant: left
class: text-4xl leading-22
---

Issue #1:
# Screensizes

---
layout: media
url: <Gif id="908fS3eQFUodG"/>
variant: right
class: text-4xl leading-22
---

Issue #2:
# Network

---
layout: media
url: <Gif id="1xkMJIvxeKiDS"/>
variant: left
class: text-4xl leading-22
---

Issue #3:
# GPU / SoC / Hardware

---
layout: media
url: <Gif id="aZupxNI7bBNS0"/>
variant: right
class: text-4xl leading-22
---

Issue #4:
# Battery

---
layout: media
url: <Gif id="SKGo6OYe24EBG"/>
variant: left
class: text-4xl leading-22
---

Issue #5:
# Dark Mode, Color-blind Mode, a11y

---
layout: media
url: <Gif id="56ikf9jD4ZK6s"/>
variant: right
class: text-4xl leading-22
---

Issue #6:
# Captive Market
<small>_(I can see you iOS Safari 👀)_</small>

---
layout: media
url: <Gif id="dncu2L87Y5sT6"/>
variant: left
class: text-4xl leading-22
---

Issue #7:
# Performance, Best-practices, Dos & Donts

---
class: text-3xl leading-18
---

# You have to deal with **all of them** <span v-click>at the same time,</span> <span v-click>combined,</span> <span v-click>in **one** codebase</span><span v-click>? <mdi-sunglasses/></span>

---
layout: section
background: https://source.unsplash.com/5AiWn2U10cw/1920x1080
---

# Pure Design System

---
links:
  - https://www.designsystems.com/
  - https://backlight.dev/mastery/
---

# Design **System**

<ul class="tiles">
  <v-clicks>
    <li><clarity-atom-solid class="inline slidev-icon" /> Design Tokens</li>
    <li><clarity-design-solid class="inline slidev-icon" /> Design Kit</li>
    <li><clarity-blocks-group-solid class="inline slidev-icon" /> Components Library</li>
    <li><clarity-lightbulb-solid class="inline slidev-icon" /> Dynamic Documentation</li>
  </v-clicks>
</ul>

<style>
  .tiles {
    @apply grid grid-cols-4 gap-8;
    @apply my-10;

    li {
      @apply list-none m-0 text-center;
      @apply flex flex-col items-center;
      @apply max-w-2/3 mx-auto;

      &.slidev-vclick-target {
        transition-property: transform, opacity;
        transform: translateZ(0) scale(0); opacity: 0;
      }
      &.slidev-vclick-prior,
      &.slidev-vclick-current {
        transform: translateZ(0) scale(1); opacity: 1;
      }
    }

    .slidev-icon {
      @apply w-20 h-20;
      @apply mb-4;
    }
  }
</style>

---
layout: author
---

---
links:
  - https://youtu.be/mYmYJv-A2b8
---

# The Tokens **inheritance**

<ul class="tiles">
  <v-clicks>
    <li>
      <mdi-palette-swatch class="inline" /> Design Tokens
      <ul>
        <li><code>--color-red</code></li>
        <li><code>--width-lg</code></li>
        <li><code>--radius-sm</code></li>
      </ul>
    </li>
    <li>
      <mdi-application-array class="inline" /> Application Tokens
      <ul>
        <li><code>--app-c-primary: var(--color-red)</code></li>
        <li><code>--app-b-lg: var(--width-lg)</code></li>
        <li><code>--app-r-sm: var(--r-sm)</code></li>
      </ul>
    </li>
    <li>
      <icon-park-outline-components class="inline" /> Components Tokens
      <ul>
        <li><code>--key-surface: var(--app-c-primary)</code></li>
        <li><code>--key-size: var(--app-b-lg)</code></li>
        <li><code>--key-radius: var(--app-r-sm)</code></li>
      </ul>
    </li>
  </v-clicks>
</ul>

<style>
  .tiles {
    @apply grid grid-cols-3 gap-2;
    @apply my-10;

    li {
      @apply list-none m-0 text-center;
      @apply flex flex-col items-center;
      @apply max-w-2/3 mx-auto;

      &.slidev-vclick-target {
        transition-property: transform, opacity;
        transform: translateZ(0) scale(0); opacity: 0;
      }
      &.slidev-vclick-prior,
      &.slidev-vclick-current {
        transform: translateZ(0) scale(1); opacity: 1;
      }

      li {
        @apply p-0 py-1 m-0 w-full;
      }

      code {
        @apply whitespace-nowrap border-none m-auto px-2;
        @apply text-xs;
      }
    }

    .slidev-icon {
      @apply w-20 h-auto;
      @apply mb-4;
    }
  }
</style>

---
layout: media
url: <Gif id="1oEttHTW7Dh6WFabZd"/>
variant: left
class: text-3xl leading-22
---

# A **World** of Abstractions

---
layout: media
url: ./img/a-wordle-ds.png
class: text-sm text-center
---

# Live **Components** in a ==Design Sytems==

---
layout: section
background: https://source.unsplash.com/QN6NkYi3CKs/1920x1080
---

# The Mushin Way

---
layout: media
url: <Gif id="xT5LMyV3wwx20bNKtq" />
variant: right
overlay: true
class: text-3xl leading-22
---

# The **Shift Left** Principle

---
layout: media
url: <Gif id="xT1XGNoBS2mY59LWvu" />
variant: left
overlay: true
class: text-4xl leading-22
---

# **Burning** ==complexity== into the DS

---
links:
  - https://css-tricks.com/a-complete-guide-to-css-media-queries/
  - https://tomquinonero.com/blog/a-guide-to-css-container-queries/
  - https://css-tricks.com/say-hello-to-css-container-queries/
---

::header::
# Screensizes

::default::
## media-queries

```css
@media (30em <= width <= 50em ) {

}
```
```css
@media screen and (prefers-reduced-motion: reduce) {
  * {

  }
}
```
```css
@media (prefers-contrast: high) {
  :root {

  }
}
```

::col2::
## container-queries

```css
.parent {
  contain: layout inline-size;
}

@container (min-width: 400px) {
  .child {
    display: flex;
    flex-wrap: wrap;
  }
}
```

<style>
  .slidev-layout h1 { @apply mb-4 }
  .slidev-layout h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 my-2 mt-6 }
  .slidev-code code { @apply !text-xs }
</style>

---
links
  - https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
---

# Network: Network Information API

```js
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
var type = connection.effectiveType;

function updateConnectionStatus() {
  console.log("Connection type changed from " + type + " to " + connection.effectiveType);
  type = connection.effectiveType;
}

connection.addEventListener('change', updateConnectionStatus);
```
```js
let preloadVideo = true;
var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
if (connection) {
  if (connection.effectiveType === 'slow-2g') {
    preloadVideo = false;
  }
}
```

<style>
  .slidev-code code { @apply !text-xs }
</style>

---
links:
  - https://developer.mozilla.org/en-US/docs/Web/API/Media_Capabilities_API
---

# GPU/SoC: Media Capabilities API

```js
if ('mediaCapabilities' in navigator) {
  const audioFileConfiguration = {
    type : 'file',
    audio : {
      contentType: "audio/mp3",
        channels: 2,
        bitrate: 132700,
        samplerate: 5200
    }
  };

  navigator.mediaCapabilities.decodingInfo(audioFileConfiguration).then(result => {
    console.log('This configuration is ' +
        (result.supported ? '' : 'not ') + 'supported, ' +
        (result.smooth ? '' : 'not ') + 'smooth, and ' +
        (result.powerEfficient ? '' : 'not ') + 'power efficient.')
    })
    .catch(() => {
      console.log("decodingInfo error: " + contentType)
    });
}
```

<style>
  .slidev-code code { @apply !text-xs }
</style>

---
links:
  - https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API
---

# Battery: Battery Status API

```js
navigator.getBattery().then((battery) => {
  battery.addEventListener('chargingchange', function(){

    });

  battery.addEventListener('levelchange', function(){

    });

  battery.addEventListener('chargingtimechange', function(){

    });

  battery.addEventListener('dischargingtimechange', function(){

    });
});
```

<style>
  .slidev-code code { @apply !text-xs }
</style>

---
links:
  - https://codepen.io/argyleink/pen/XWaYyWe
---

```css
:where(html) {
  --color-white: #fff;
  --color-black: #212121;
  --color-purple: #639;
}

html {
  --light-primary: var(--color-white);
  --light-contrast: var(--color-black);

  --dark-primary: var(--color-black);
  --dark-contrast: var(--color-white);

  --purple-primary: var(--color-purple);
  --purple-contrast: var(--color-white);
}
```
```scss
[color-scheme=light] { @include light; }
[color-scheme=dark] { @include dark; }
[color-scheme=purple] { @include purple; }
```

::header::
# Theme/Variants

::col2::
```scss
@mixin theme-light {
  color-scheme: light;
  --app-color-surface: var(--light-primary);
  --app-color-text: var(--light-contrast);
}
@mixin theme-dark {
  color-scheme: dark;
  --app-color-surface: var(--dark-primary);
  --app-color-text: var(--dark-contrast);
}
@mixin theme-purple {
  color-scheme: dark;
  --app-color-surface: var(--purple-primary);
  --app-color-text: var(--purple-contrast);
}
```
```scss
:root {
  @include light;
  @media (prefers-color-scheme: dark) {
    @include dark;
  }
}

```

<style>
  .slidev-code code { @apply !text-xs }
</style>

---
links:
  - https://www.matuzo.at/blog/2022/cascade-layers/
  - https://developer.mozilla.org/en-US/docs/Web/CSS/@layer
---

# The Layout Design

```css
@layer base, third-party, components;

@layer base {
  /* Base styles */
}

@import url(slider.css) layer(third-party);

@layer third-party {
  @layer overwrites {
    .slider-item {
      /* 2rd party component overrides */
    }
  }
}

@layer components {
  /* Component styles */
}
```

<style>
  .slidev-code code { @apply !text-xs }
</style>


---
layout: media
url: <Gif id="fDNGJgYm6xIfm" />
variant: left
class: text-2xl leading-16
---

# Use-case: <br> **Video Player**

- Bandwidth Status (Pre)Load
- Adapt to Container Size
- Detect Battery Updates
- Use Tokens

---
layout: media
url: ./img/backlight-publish.png
variant: right
class: text-2xl leading-16
---

# Everything is a **stateless component**

---
layout: media
url: <Gif id="lVBtp4SRW6rvDHf1b6"/>
variant: right
overlay: true
class: text-2xl leading-16
---

# Fixing **issues** at component's level

--- <!-- outro -->
layout: media
url: <Gif id="3o7ZeEZUzRjyvWuuIg"/>
variant: left
class: text-3xl leading-22
---

# You can start <span v-click>right **now**!</span>

---
layout: thanks
---
