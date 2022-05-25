---
theme: ./

permalink: https://m4dz.net/t/zero-build

author: m4dz
twitter: m4d_z

info: >
  For many years, we have migrated all our DevTools to Node.js for the sake of
  simplicity: a common language (JS/TS), a huge ecosystem (NPM), and a powerful
  engine. In the meantime, we moved a lot of computation tasks to the
  client side thanks to PWA and JavaScript Hegemony.


  So we made Webapps for years, developing with awesome reactive frameworks and
  bundling a lot of dependencies. We progressively moved from our simple to
  complex app toolchains. We've become the new Java-like ecosystem. It sucks.


  It's 2021, we have a lot of new technologies to sustain our users'
  experience. It's time to have a break and rethink our tools rather than going
  faster and faster in the same direction. It's time to redesign the developer
  experience. It's time for a bundle-free developers’ environment. It's time to embrace
  a new front end building philosophy, still with our lovely JavaScript.


  Introducing Snowpack, Vite, and other Bare Modules tools concepts!

themeConfig:
  permalink: https://m4dz.net/t/zero-build

  author: m4dz
  twitter: m4d_z

  dates:
    - name: Infobip Shift Conference
      datetime: 2021-09-08
    - name: ‹ React Global ›
      datetime: 2021-11-04T18:40:00+00:00
    - name: WeAreDevelopers JavaScript Congress
      logo: wearedevelopers.png
      datetime: 2021-11-25T21:00:00+01:00
    - name: SnowCamp
      datetime: 2022-02-03T10:45+0100
      permalink: https://snowcamp2022.sched.com/event/qHQU/the-eternal-sunshine-of-the-zero-build-pipeline
      logo: snowcamp.webp
    - name: Techorama NL
      datetime: 2022-10-11T17:45:00+02:00
      permalink: https://techorama-netherlands-2022.sessionize.com/session/332450
      logo: ./img/techorama.svg
---

<p class="tagline">The Eternal Sunshine of the</p>

# Zero Build Pipeline

---
class: text-2xl leading-18
---

# TL;**DR**

<v-clicks>

1. We're the only industry to ensure 30 years of backwards compatibility
2. You should upgrade your DevTools, now
3. It's no more than replacing a single file

</v-clicks>

---
layout: media
url: ./img/meme.jpg
variant: full
---

---

# The Modern ==Front end== Development Stack

<ul class="tiles">
  <v-clicks>
    <li><gg:template />Templates Engines</li>
    <li><ion:logo-sass />CSS Pre-processors</li>
    <li><ic:round-style />PostCSS</li>
    <li><ion:logo-react/>Reactive UI Framework</li>
    <li><clarity:bundle-solid />Packer/Bundler</li>
    <li><ic:baseline-local-fire-department />Web Dev Server/HMR</li>
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
class: text-3xl leading-22
---

# Did you see ==HTML/CSS/JS== <br> in the previous list?

---
layout: media
url: <Gif id="3og0ID5AW1SmPuG3u0" />
variant: left
overlay: true
---

`npm install`

<style>
  .slidev-layout code { @apply !text-4xl }
</style>

---
layout: section
background: ./img/danist-8Gg2Ne_uTcM-unsplash.jpg
---

# Why Do We Compile Websites?

---
class: text-2xl leading-22
---

# Developer eXperience is **bloated**, <br> thanks to our ==DevTools==

---
logo: ./img/IconParkOutlineRobot.svg
ratio: 1/3
class: self-center text-xl leading-18
---

# Coding in the **Browser**, the Antique Way

::col2::

```html
<!DOCTYPE html>
<html lang="en">
  <p id="text"></p>
  <script src="main.js"></script>
</html>
```

```js
window.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('text').textContent = `Hello World!`
});
```

---
logo: ./img/IconParkOutlineRobot.svg
ratio: 2/3
class: text-xl leading-14
links:
  - https://developer.mozilla.org/en-US/docs/Glossary/IIFE
  - https://requirejs.org/docs/whyamd.html#commonjs
  - https://browserify.org/
  - https://www.davidhaney.io/npm-left-pad-have-we-forgotten-how-to-program/
---

# **Modules** Everywhere

- IIFE pattern
- CommonJS vs. ES Modules
- Bundling for the Web (Browserify, etc.)

::col2::

```js
(function(w, d) {
  let bud = 'World';

  w.addEventListener('DOMContentLoaded', (e) => {
    d.getElementById('text').textContent = `Hello ${bud}!`
  });
})(window, document);
```

---
layout: media
url: <Gif id="3JNGvAym5kKzQrD4xt" />
variant: right
overlay: true
class: text-left
---

# The **Transpilers**

- Inherited from ActiveScript and CoffeeScript
- Better doesn't mean simpler
- Syntactic sugar on JS
- Still only one JavaScript

---

# The **Browser-as-a-VM** Era

```rust
mod utils;

use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-game-of-life!");
}
```

---
layout: media
url: <Gif id="b8l8TWWxcUcAAAPo/backpack-bag" provider="tenor" />
variant: right
overlay: true
class: text-left text-xl leading-14
---

# This is why we're now <br> **compiling** our Websites

<v-clicks>

- Modules
- Transpilers
- New formats to support (WASM...)
- ==Performance== still matters

</v-clicks>

---
class: text-2xl leading-14
---

# Web Evolved

<v-clicks>

# We still stand on its **foundations** <small>(HTML/CSS/JS)</small>

# But we needed ==high-level== tools

</v-clicks>

---
layout: section
background: ./img/sigmund-4CNNH2KEjhc-unsplash.jpg
---

# The '21 Web Building Pipeline

---
layout: media
url: <Gif id="OKHsKFTRGHqI8" />
variant: left
---

# The **Usual** Suspects

<v-clicks>

- Webpack: Pack every part of your app (JS, assets...)
- Rollup/Parcel: Bundle the logic
- Jest: Testing suite
- TypeScript: Improve the language
- Prettier: Reformat
- ESLint: Check the syntax
- NPM/Yarn: Manage dependencies
- any tools specific to your frameworks

</v-clicks>

---
class: text-3xl leading-22
---

# ==Easier== developers life <br> means **overly complex** <br> DevTools Stack

---
class: text-3xl
---

**As a...** <br>
Front-end Developer

**I want...** <br>
a shitload of tools that mimic my browser features

**So I...** <br>
can wait eternally rather than coding my stuff

---
class: text-3xl leading-22
---

# **Compiling** for production <br> doesn't mean we need it <br> during ==development==

---

# Web Developer **Superpowers**

<ul class="tiles">
  <v-clicks>
    <li><fa-solid:boxes />JS Modules</li>
    <li><ic:round-cached />Advanced Cache</li>
    <li><ic:baseline-https />HTTP/2</li>
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

# Improving the ~~User~~ **Developer eXperience**

- Standardized ESM
- Superset of languages (TS, JSX...)
- Free from loading the whole NPM Registry locally
- Instant Startup!
- Built-in HMR support
- Extensible
- Focusing on codebase

---
layout: section
background: ./img/emre-karatas-Ib2e4-Qy9mQ-unsplash.jpg
---

# Solving the bottleneck

---
class: text-2xl
---

# How does it **work**?

<v-clicks>

- Use native ESM support in the browser
- Tranform non-JS modules to ESM
- Cache Modules in the Browser
- Use HMR for on-the-fly updates
- Use HTTP[/2] features

</v-clicks>

---
layout: media
url: ./img/vite-react.png
variant: full
links:
  - https://vite.new/react
---

---

# Dependencies

- Loaded from `node_modules` directly
- _Not_ bundled
- Can be dynamically loaded from a CDN
- Use ESM versions

::col2::

<v-click>

```js
import confetti from 'https://unpkg.com/canvas-confetti';

confetti.create(document.getElementById('can'),
{
  resize: true,
  useWorker: true,
})({
  particleCount: 200,
  spread: 200 }
);
```

</v-click>

---
layout: media
url: ./img/esm.3070012d.png
links:
  - https://vitejs.dev/guide/why.html | Why Vite?
  - https://www.snowpack.dev/concepts/how-snowpack-works | How Snowpack Works
---

# **On-Request** Build Oriented

---
layout: media
url: <Gif id="s2qXK8wAvkHTO" />
variant: left
overlay: true
class: text-2xl leading-18
---

---
layout: media
url: ./img/snowpack-unbundled-example-3.png
variant: full
---

# Why a **Single File** approach?

- Fast builds
- Deterministic
- Easy to Debug
- Dev speed unrelated to project size
- Better cache

---
class: text-2xl
links:
  - https://jasonformat.com/islands-architecture/
---

# The Partial Hydration concept

<v-clicks>

- Most of the content is **static**
- Dynamic content **hydrated on the back**
- Client only loads **super-hot data**
- Components SSR
- `<script>` components loading

</v-clicks>

---
class: text-2xl
links:
  - https://www.youtube.com/watch?app=desktop&v=k-A2VfuUROg
---

# The Progressive Hydration concept

- Initialize **over time**
- **Scheduling**:
  - Idle
  - Viewport
  - Interaction
  - Update events
  - ..

---
layout: media
url: ./img/islands-architecture-1.png
variant: left
overlay: true
class: text-2xl leading-16
---

# The Component **Islands** Pattern

---
layout: media
url: <Gif id="dGtf1UhMLrcLm" />
variant: left
class: text-3xl leading-22
---

# The **Challengers**

---

## Snowpack

- The First of Its Kind
- Lightweight and fast
- Agnostic
- Webpack/Parcel support for builds
- Plugins API
- Highly configurable

::col2::

## Vite

- The Leader
- Compatible Vue/[P]React/Svelte/Lit
- `esbuild` for dev | Rollup for builds
- multi-Page support
- Library Mode
- CSS Code-Splitting
- Standard API

::col3::

## WMR

- The Tiny Mouse
- Native import from NPM
- JSX Debug in Browser
- Native CSS Modules
- HMR for Static Assets
- Rollup for builds
- HTTP/2 for dev

::header::

# The Challengers

<style>
  .slidev-layout h1 { @apply mb-4 }
  .slidev-layout h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 my-2 mt-6 }
</style>

---
class: text-center
links:
  - https://backlight.dev/ | Backlight.dev Design System IDE
---

# Vite <emojione-high-voltage /> as-a-backend service

<video playsinline autoplay loop>
  <source src="/img/backlight-simba-demo.webm">
  <source src="/img/backlight-simba-demo.mp4" >
  <img src="/img/backlight-simba-demo.png" alt="" >
</video>

<style>
  video { @apply h-4/5 mx-auto }
</style>

---
links:
  - https://github.com/divriots/vite | Browser Vite
---
## Pros

- Blazingly Fast
- Native HMR
- Quick preview even on large codebases
- MD Vue for embedding components

::col2::
## Cons

- Error-prone on code analysis for deps
- No MDX native support
- MD Vue isn't standard
- Dedicated Worker for Vite previews
  ```
  preview
    -> service-worker
    -> vite worker
    -> service-worker
  -> preview
  ```

::header::
# Is it **Hot**?

<style>
  .slidev-layout h1 { @apply mb-4 }
  .slidev-layout h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 my-2 mt-6 }
</style>

---
layout: section
background: ./img/caroline-selfors-r2jpr8MDw0I-unsplash.jpg
---

# Keep building for Production

---
class: text-4xl leading-22
---

# You're <small>(probably)</small> <br> **not** your ==end-user==

---
layout: media
url: ./img/olena-sergienko-3BlVILvh9hM-unsplash.jpg
variant: left
links:
  - https://rollupjs.org/guide/en/
  - https://esbuild.github.io/
---

# Behind the Hood

- Rollup/Parcel/esbuild
- Plugins Support
- Optimize for production
- Browserlist support for legacy browsers
- Code-splitting/Lazy-loading
- Treeshaking for ESM

---
layout: media
url: <Gif id="3sZv" provider="gifer" />
variant: left
overlay: true
class: text-3xl leading-22
links:
  - https://exploringjs.com/es6/ch_modules.html#_benefit-dead-code-elimination-during-bundling | Dead code elimination
---

# The **Treeshaking** Mystery

---
layout: media
url: ./img/cesar-carlevarino-aragon-NL_DF0Klepc-unsplash.jpg
class: text-2xl leading-14
variant: right
---

# **Extending** the Build

- Plugins Interface
- Snowpack: Custom API
- Vite/WMR: Rollup Plugins
- Support external asset types
- Allow types mix (MD Vue...)

--- <!-- Outro -->
class: text-2xl leading-18
---

# It's a new generation of Devtools <br> built by great **communities** <br> <small>(Skypack, Vue, Preact...)</small>

---
links:
  - https://github.com/vitejs/awesome-vite
---

## ESM-Oriented Registries

- [Skypack](https://www.skypack.dev/)
- [ESM.sh](https://esm.sh/)
- [JSPM](https://jspm.org/)
- [UNPkG](https://unpkg.com/)

::col2::
## New Advanced <emojione-high-voltage /> Tools

- [Vitest](https://vitest.dev/)
- [Vitepress](https://vitepress.vuejs.org/)
- [Slidev](https://sli.dev/)
- [Viteshot](https://viteshot.com/)
- [Astro](https://astro.build/)
- [îles](https://iles-docs.netlify.app/)

::header::
# <emojione-waving-hand />

<style>
  .slidev-layout h1 { @apply mb-4 }
  .slidev-layout h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 my-2 mt-6 }
</style>

---
ratio: 2/3
class: self-center text-xl leading-16
links:
  - https://framagit.org/kresusapp/kresus/-/merge_requests/1440 | kresus - Use Vite for bundling
---

# **Migrate** Your Code-base

<v-clicks>

1. Imports will still work
2. Few adjustments on edges (`resolve.alias`...)
3. Update `npm scripts`
4. Add `vite.config.js`, <br> and remove Webpack <emojione-party-popper class="inline" />

</v-clicks>

::col2::
<v-after>

```js
import { defineConfig } from 'vite';

import plainText from 'vite-plugin-plain-text';
import sprites from 'rollup-plugin-sprite';
import reactRefresh from 'vite-plugin-react-refresh'

export default defineConfig({
  /* ... */
});
```

</v-after>

---
layout: author
---

---
layout: quote
cite: George Orwell in 1984
author: https://www.telegraph.co.uk/multimedia/archive/02751/George-Orwell-_2751719k.jpg
---

> Who Controls the Past
> Controls the Future

---
layout: qa
---

---
layout: thanks
---
