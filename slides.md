---
theme: ./

permalink: https://m4dz.net/t/ssg

author: m4dz
twitter: m4d_z

info: >
  Shipping less to end-users isn't an easy task. We have to make choices between features, design, accessibility, and performance. Well, we thought we did have to make those choices. But it's less the developers' responsibility than of their dev tools responsibility.
  It's time to get the control back on what we deliver to our users, ensuring them the best experience they may expect without sacrificing the tools we need, the framework we want, or the features we planned. It's time for a new era, and Astro opens the path to it.
  Astro is like a static site generator, but it doesn't generate websites. It *builds* them, removing the useless client-side JS parts. Use whatever (J|T)S(X) framework you want, whatever library you're comfortable with, whatever embedded tool you need. Forgot complex CSS-in-JS stuff. Focus on your skills, but ship plain old-style HTML and CSS to your users. No compromise, no deal-breaker. Just the best of the Web Performance, directly from your toolkit.
  Let's take our revenge on the 90's 🚀

dates:
  - name: Codeurs en Seine
    lang: fr
    logo: codeurs.svg
    datetime: 2021-11-18T09:30:00+01:00
---

<p class="tagline">The Revenge of the</p>

# Static Builder

---
class: text-4xl
---

**As a** <span v-click=1>Developer</span>

**I want to** <span v-click=2>Build</span>

<v-clicks at=3>

- websites
- webapps
- PWA
- apps

</v-clicks>

**So I** <span v-click>can't recall what the Web looks like</span>

---
layout: media
url: <Gif id="10ZCiWCJCO4JMI" />
variant: left
overlay: true
---

# They're not the ==same==

<style>
.slidev-layout h1 { @apply text-7xl leading-22 }
</style>

---
layout: media
url: https://4.bp.blogspot.com/-5jM_GO-4xWs/UOutQyepd2I/AAAAAAAAB_c/MRvlwS-We-E/s1600/django-unchained-poster08.jpg
variant: right
---

# Time to free <br> the **Developer** <br> from the **Tools**

<style>
  .slidev-layout h1 { @apply text-6xl leading-22 }
</style>


---
layout: section
background: https://source.unsplash.com/ln5drpv_ImI/1600x900
---

# Tales from the JAMStack

---

# What's in **JAMStack**

<ul class="tiles">
  <v-clicks>
    <li><mdi:recycle-variant />Pre-rendered pages</li>
    <li><codicon:globe />CDN/Edge Architecture</li>
    <li><clarity:thin-client-line />Client-side JS</li>
    <li><clarity:blocks-group-line />API Services</li>
  </v-clicks>
</ul>

<style>
  .tiles {
    @apply grid grid-cols-2 gap-8;
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
class: text-2xl
---

# Progressive Enhancement w/ JS

1. Load a raw HTML to client
2. Plug onto JS logic
3. Call API for content manipulation

This is the well-known **Single Page App**

---
class: text-2xl
---

# Static Site **Generators**

- Raw set of static data (JSON)/content (MD)
- Template languages
- Pre-Render pages at build
- Extensions support

---
layout: media
url: <Gif id="OKHsKFTRGHqI8" />
variant: left
links:
  - https://jamstack.org/generators/
---

# Usual suspects

- Jekyll
- Hugo
- Gatsby
- Nuxt
- Eleventy
- ...

---

## Pros

- Blazingly fast
- More secured
- Better end-user performance
- Host anywhere
- Write offline

::col2::

## Cons

- Pages oriented
- Build time growth
- (Headless) CMS Complexity
- Lack of content customization

::header::

# Pros/Cons of the SSG

<style>
  .slidev-layout h1 { @apply mb-12 }
  .slidev-layout h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

---
layout: media
url: https://source.unsplash.com/AF6N3WRsyk4/1920x1080
variant: left
---

# Component Driven Development

- 🚀 Faster development
- 🐣 Simpler maintenance
- ♻️ Better reusability
- 🧪 Better TDD
- 📈 Shorter learning curves
- 📐 Better modeling of the system

<style>
  .slidev-layout h1 { @apply leading-12 }
</style>

---
layout: media
url: https://source.unsplash.com/PdTYsSgJJNA/1600x900
variant: right
---

# The **Hydration** Problem

<style>
  .slidev-layout h1 { @apply text-7xl leading-22 }
</style>

---
layout: media
url: <Gif id="Fovqc9MJoQ5K8" />
variant: left
overlay: true
---

# SSR + Isomorphic Codebase

- Nice on paper
- Not working at all
- Too complex
- Can't handle the hydration problem

<style>
  .slidev-layout h1 { @apply leading-12 }
</style>


---

# Lot of tries<span v-click>, many **fails**</span>

<style>
  .slidev-layout h1 { @apply text-7xl leading-22 }
</style>

---
layout: section
background: https://source.unsplash.com/xpsgubqxs-E/1600x900
---

# *Lost* in Reshaping Views

---
class: text-2xl
---

# Modern Web Design in 2022

- 🏆 Components first
- 🐬 Large Ecosystem
- 🧩 Design Systems
- 💥 Increased Complexity

---
class: text-4xl
---

# Web **Fundamentals**

(HyperLinks, HTML, CSS, JS)

<style>
  .slidev-layout h1 { @apply text-7xl leading-22 }
</style>

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
links:
  - https://m4dz.net/t/zero-build/ | The Eternal Sunshine of the Zero Build Pipeline
---

# Modern tooling

<ul class="tiles">
    <li><whh:codeigniter />Zero Build Dev Pipeline</li>
    <li><mdi:code-tags />MDX / MDJS / MD Vue</li>
    <li><clarity:tools-solid />Advanced frontend toolkits</li>
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
url: <Gif id="XI7rk6UYBM4LWp2rw0" />
variant: left
class: text-4xl leading-22
links:
  - https://docs.astro.build/comparing-astro-vs-other-tools/
---

# Migrate the JAMStack

---
layout: media
url: https://source.unsplash.com/cm_fEhCQCWM/1600x900
variant: right
class: text-2xl
---

# Best Effort

- <el-check /> Templates
- <el-check /> Styles
- <el-check /> Markdown Content
- <el-check /> Frontend Framework
- <el-check-empty /> ==Tooling==

---

# Explode our brains 🤯

<style>
  .slidev-layout h1 { @apply text-7xl leading-22 }
</style>

---
layout: section
background: https://source.unsplash.com/bMybTSV7RFY/1600x900
---

# Secrets of a New Hope

---
layout: media
url: ./img/lcd.png
variant: right
ratio: 2/3
links:
  - https://github.com/vuejs/awesome-vue
  - https://github.com/enaqx/awesome-react
  - https://github.com/TheComputerM/awesome-svelte
  - https://github.com/one-aalam/awesome-solid-js
  - https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/
---

# Building a Components Library

Mix frameworks
→ Components' **behaviors** centered library

  - Vue.js
  - [P]React
  - Svelte
  - Solid.js
  - Web Components


---
layout: media
url: ./img/bkl.png
---

# **Design Systems** to rule them all

---
layout: media
url: <Gif id="l0MYGb1LuZ3n7dRnO" />
variant: left
links:
  - http://m4dz.net/t/design-tokens | The Rosetta Stone of Your Design System
class: text-2xl
---

Design System **Best Practices**

- 🪙 Design Tokens
- 🧩 Build in isolation
  - src/
  - test/
  - stories/
  - doc/
  - design/
- 📦 1 component == 1 package

---
links:
  - https://mdxjs.com/
  - https://rocket.modern-web.dev/docs/markdown-javascript/overview/
  - http://m4dz.net/t/mdx-docs
---

# **MDX** for the best

- Include `<components />` along your MD
- Extend CommonMD
- Available to anyone
- MDX → JSX → HTML

# **MDJS** for all

- Markdown JavaScript
- Execute JS/TS
- Include `script` in MD
- Advanced use-cases (`story`, `preview-story`)

::col2::

```mdx
import {Chart} from './snowfall.js'
export const year = 2018

# Last year’s snowfall

In {year}, the snowfall was above average.
It was followed by a warm spring which caused
flood conditions in many of the nearby rivers.

<Chart year={year} color="#fcb32c" />
```

~~~md
## This is my-card

Here's an example of the component:

```html preview-story
<my-card>
  <h2>Hello world!</h2>
  <button>Click me!</button>
</my-card>
```

```js story
export const JsStory = () => html` <demo-wc-card /> `;
```
~~~

<style>
  .slidev-layout h1 { @apply mt-6 }
  .slidev-layout pre code { @apply !text-xs }
</style>

---
class: self-center
---

# **Scoped** Styles

- Single File Component (SFC)
- Overwrite styles *in* Components
- Overwrite styles *in* Markdown
- Atomic Utility CSS

::col2::

```astro
<style lang="scss">
  /* ✅ Locally scoped! */
  .btn {
    padding: 0.5em 1em;
    border-radius: 3px;
    font-weight: 700;
  }
</style>

<button type="button" class="btn">
  <slot></slot>
</button>
```

---
links:
  - https://astro.build/
  - https://iles-docs.netlify.app/
---

## Astro 🚀

- 🔋 Batteries included
- File-based routing
- Pagination
- RSS
- Data-fetching

::col2::

## îles 🏝

- 🔋 Batteries included
- File-based routing
- Vue based Devtools
- Meta-tags access
- Progressive Hydration

::header::

# The Challengers

<style>
  .slidev-layout h1 { @apply mb-12 }
  .slidev-layout h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

---
layout: media
url: https://source.unsplash.com/wLvyqqwXXpQ/1600x900
variant: left
---

# Basics

- Imports
  - JS(X)/TS(X)
  - JSON
  - CSS/CSS-Modules
  - Static assets
  - MD(X)
  - WASM
- Components + Layouts
- Front Matter
- Props support

---

**Static routes**
```
src/pages/index.astro
  → mysite.com/
src/pages/about/index.astro
  → mysite.com/about
src/pages/about/me.astro
  → mysite.com/about/me
```

**Dynamic routes**
```
pages/blog/[slug].astro
  → /blog/hello-world, /blog/post-2
pages/[username]/settings.astro
  → /fred/settings, /drew/settings
pages/[lang]-[version]/info.astro
  → /en-v1/info, /fr-v2/info
```

::col2::

**Spread params**
```
pages/[org]/[repo]/tree/[branch]/[...file]
```
```json
{
  "org": 'snowpackjs',
  "repo": 'astro',
  "branch": 'main',
  "file": 'docs/public/favicon.svg'
}
```

::header::
# File-based **Routing**

---
class: self-center
---

- `client:visible` → viewport-based
- `client:load` → page loading
- `client:idle` → `requestIdleCallback()` based
- `client:media={QUERY}` → responsive
- `client:only` → no build
- `client:none` → static html only

::col2::
```mdx
---
title: Song for You
audio: /song-for-you.mp3
---

I've recently recorded a song, listen:

<AudioPlayer {...frontmatter} client:visible />
```

::header::
# **Hydration** Directives

---
class: text-2xl
links:
  - https://iles-docs.netlify.app/guide/frameworks#bundle-size
---

# Which ==Framework== for which **component**

- UI Perf
- Bundle size
- Instances
  - less than 3 → Svelte for small size
  - between 3 and 10 → SolidJS
  - more than 10 → Preact
- Web Components for shared logics

---

# Composition for static concerns

```astro
---
// src/layouts/BaseHead.astro
const {title, description} = Astro.props;
---
<meta charset="UTF-8">
<title>{title}</title>
<meta name="description" content={description}>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Spectral&display=swap" rel="stylesheet">
```

```astro
---
// src/pages/index.astro
import BaseHead from '../layouts/BaseHead.astro';
import OpenGraphMeta from '../layouts/OpenGraphMeta.astro';
---
<html>
  <head>
    <BaseHead title="Page Title" description="Page Description" />
    <OpenGraphMeta />
    <link rel="alternate" type="application/rss+xml" href="/feed/posts.xml">
  </head>
</html>
```

<style>
  .slidev-layout pre code { @apply !text-xs }
</style>

---
layout: media
url: <Gif id="lrc1TZHRYxj7lGM3Vg" />
variant: left
overlay: true
---

# Extending

- Modern builders under the hood <br>
  (Vite, Snowpack...)
- Batteries included <br>
  (MDX, Components, static assets...)
- Vite/Rollup/Esbuild plugins

---
layout: media
class: text-left
url: <Gif id="FAivr32f90zWRHYGhD" />
variant: right
overlay: true
---

# **Production** <br>`npm run build`

- Hydrate on server
- Prepare client assets
- Deploy like JAMStack
  - Github Actions/Pages
  - Netlify
  - Vercel
  - Firebase
  - ...

<style>
  .slidev-layout h1 code { @apply text-3xl leading-18 }
</style>

---
logo: ./img/MdiStarOutline.svg
---

# Blend the **best** of ==all worlds==

<style>
  .slidev-layout h1 { @apply text-7xl leading-22 }
</style>

---

<!-- Outro -->

# It's definitely the ==future== but it's already ==here==

<style>
  .slidev-layout h1 { @apply text-7xl leading-22 }
</style>

---
layout: media
url: <Gif id="0DYipdNqJ5n4GYATKL" />
variant: right
---

# Rethink the web<span v-click>, the **modern** way</span>


<style>
  .slidev-layout h1 { @apply text-5xl leading-22 }
</style>

---
layout: author
---

---
layout: qa
---

---
layout: media
url: ./img/frank.jpg
variant: full
links:
  - https://sudweb.github.io/frank/
  - https://jekyllrb.com/news/2021/09/14/goodbye-dear-frank/
---

---
layout: thanks
---
