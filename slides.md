---
theme: ./

author: m4dz
twitter: m4d_z
permalink: http://m4dz.net/t/deno

dates:
  - name: Devfest Nantes
    logo: devfest_color_text_white_white.svg
    datetime: 2021-10-21T14:00:00+02:00
    permalink: https://devfest2021.gdgnantes.com/sessions/don_t_miss_the_deno_train/

colorSchema: dark
---

<p class="tagline">Aleph · Stencil · Web Components · SSR</p>

# Don't Miss the Deno Train

---
layout: media
url: ./img/js_sucks.png
class: no-border no-bg
---

---
layout: media
variant: left
overlay: true
url: <Gif id="wVcNP3TnXbl84" />
---

# This is **not** an angry talk

<v-click>

```
Undefined is not a function
```

</v-click>

<style>
  h1 { @apply text-6xl leading-18 }
</style>

---
class: self-end
---

# Don't blame JS

::col2::

- was here when no-one was
- was made in 10 days
- survive the Browsers War(s)
- wasn't made for this sh*t

<style>
  h1 { @apply text-6xl }
</style>

---

# Running on the ==server==, really?

<style>
  h1 { @apply text-8xl leading-30 }
</style>

---
layout: section
background: https://i0.wp.com/www.superpoweredfancast.com/wp-content/uploads/2017/06/jurassic-world-jurassic-park-4-ian-malcolm-1.jpg?ssl=1&w=2400
---

# Life uh... finds a way

---
layout: media
url: ./img/jsconf_eu.png
variant: full
links:
  - https://youtu.be/M3BM9TB-8yA | 10 Things I Regret About Node.js
---

---

# ==2009== <br> The IO challenge

<style>
  h1 { @apply text-7xl leading-24 }
</style>

---

# ==2018== <br> Fast, Secured, Servers

<style>
  h1 { @apply text-7xl leading-24 }
</style>

---
layout: media
url: <Gif id="9FZONYU8o41b63mil9" />
variant: right
overlay: true
---

# Dynamic Languages <br> _vs._ <br> Typed Languages

<style>
  h1 { @apply text-4xl }
</style>

---

# Could Node <br> and Javascript <br> be **fixed**?

<style>
  h1 { @apply text-8xl }
</style>

---
layout: media
url: https://source.unsplash.com/9Phf8qd1YAg/1920x1080
variant: left
---

# Node.js Regrets

<v-clicks>

- Promises
- Security
- GYP
- NPM and `package.json`
- IBM (Internal Black Magic)

</v-clicks>

---

# The modules ecosystems came ==after==

<style>
  h1 { @apply text-7xl leading-24 }
</style>

---
preload: false
---

# Needs

<ul class="tiles">
  <v-clicks>
    <li><ic:baseline-loop />IO</li>
    <li><ic:baseline-local-police />Security: sandbox, opt-ins</li>
    <li><carbon:network-4 />Message-passing based</li>
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
url: https://deno.land/logo.svg
variant: right
---

# **Deno** <br> JS/TS runtime in V8

<style>
  h1 { @apply text-7xl leading-22 }
</style>

---

# TypeScript <div>First-class citizen language</div>

<style>
  h1 {
    @apply text-8xl;

    div {
      @apply text-5xl my-2;
    }
  }
</style>

---

# **Deno** <div>friendly CDN</div>

<style>
  h1 {
    @apply text-8xl;

    div {
      @apply text-5xl my-2;
    }
  }
</style>

::col2::

- ES Module format
- Resolve all the dependencies
- Type definitions
- Polyfill the built-in Node.js modules
- Semver matching for packages

---
links:
  - https://deno.land/
---

# Running Deno

<v-clicks>

```ts
import { listenAndServe } from "https://deno.land/std@0.112.0/http/server.ts";

console.log("http://localhost:8000/");
listenAndServe(":8000", (req) => new Response("Hello World\n"));
```

```sh
$ deno run --allow-net hello.ts
```

</v-clicks>

---
layout: section
background: https://i.ytimg.com/vi/lONW8JauwQQ/maxresdefault.jpg
---

# Spared no expense

---
layout: media
url: <Gif id="1I2NwmjvSzNS0"/>
variant: left
links:
  - https://doc.deno.land/builtin/stable
---

# One runtime, <div v-click>endless possibilities</div>

<style>
h1 { @apply text-6xl; div { @apply text-4xl my-2 }}
</style>

---

# From CLI to Web apps backends

```ts
/**
 * cat.ts
 */
import { copy } from "https://deno.land/std@0.112.0/io/util.ts";
for (const filename of Deno.args) {
  const file = await Deno.open(filename);
  await copy(file, Deno.stdout);
  file.close();
}
```

```sh
deno run --allow-read https://deno.land/std@0.112.0/examples/cat.ts /etc/passwd
```

---
class: self-end
---

# Standard Modules

::col2::

- audited by deno maintainers
- located at `deno_std` workspace
- accessible at https://deno.land/std

---
layout: media
url: https://source.unsplash.com/BNBA1h-NgdY/1920x1080
variant: left
links:
  - https://www.skypack.dev/
  - https://jspm.org/
  - https://www.jsdelivr.com/
  - https://esm.sh/
  - https://unpkg.com/
---

# Community Modules

- Served from CDN
- Curated list at deno.land/x

---
links:
  - https://deno.land/manual@v1.15.2/runtime/web_platform_apis
---

# Overlap with the browser

- ES Modules
- Promises (+ top-level await)
- Top-level objects (`window`...)
- Wasm Support
- Private namespace for internal stuff (`deno.*`)

---
links:
  - https://deno.land/manual@v1.15.2/getting_started/permissions#permissions-list
  - https://www.youtube.com/watch?v=r5F6dekUmdE#t=34m57
---

# Permissions

```
--allow-env=<allow-env>        | Allow environment access
--allow-ffi=<allow-ffi>        | Allow loading dynamic libraries
--allow-hrtime                 | Allow high resolution time measurement
--allow-net=<allow-net>        | Allow network access
--allow-read=<allow-read>      | Allow file system read access
--allow-run=<allow-run>        | Allow running subprocesses
--allow-write=<allow-write>    | Allow file system write access
```

---
layout: media
url: ./img/deno_stats.png
variant: left
links:
  - https://github.com/denolib/awesome-deno
---

# Large community-based ==modules and Frameworks== for Deno

<style>
  h1 { @apply text-4xl leading-14 }
</style>

---

## Express

- Opine
- Attain
- Servest
- Snowlight
- http_wrapper
- Aqua

::col2::

## Koa

- Oak
- Denotrain
- Ako

::col3::

## Misc

- Fastro (Fastify)
- Pogo (Hapi)
- Drash (Laravel)
- Abc
- Fen

::header::

# For the Web

<style>
  h2 { @apply text-2xl mt-4 mb-2 }
</style>

---
links:
  - https://alephjs.org/docs
---

# React in Deno <div>**Aleph.js**, the Next.js inspired alternative</div>

<style>
  h1 { @apply text-8xl; div { @apply text-4xl my-2 }}
</style>

---
layout: section
background: https://img2.looper.com/img/gallery/the-real-reason-samuel-l-jacksons-jurassic-park-death-scene-got-cut/a-real-life-natural-disaster-intervened-1577389524.jpg
---

#  Hold onto your butts

---

# TSX, first-class citizen language

```tsx
import React from 'https://esm.sh/react'
import Logo from '../components/logo.tsx'

export default function Home() {
  return (
    <div>
      <Logo />
      <h1>Hello World!</h1>
    </div>
  )
}
```

---
layout: media
url: <Gif id="3og0IV7MOCfnm85iRa" />
variant: right
---

# Aleph

- Zero Config
- Typescript in Deno
- ES Module Ready
- Import Maps
- HMR with Fast Refresh
- File-system Routing
- SSR/SSG
- JSX Magic
- Plugins System
- Powered by Modern Tools

---


```tsx
// ~/pages/about.tsx
import React from 'https://esm.sh/react'
import Nav from '../components/nav.tsx'

export default function About() {
  return (
    <main>
      <Nav />
      <h1>About Me</h1>
    </main>
  )
}
```

::col2::

```tsx
// ~/components/nav.tsx
import React from 'https://esm.sh/react'

export function Nav() {
  return (
    <>
      <a rel="nav" href="/">Home</a>
      <a rel="nav" href="/about">About</a>
      <a rel="nav" href="/contact">Contact</a>
    </>
  )
}
```

::header::

# Pages and Routing

---
layout: media
url: <Gif id="IIgCwUflN7kHD6Itam" />
variant: right
ratio: 2/3
---

# First-class CSS support

```ts
import React from 'https://esm.sh/react'

import 'https://esm.sh/tailwindcss/dist/tailwind.min.css'
import '../style/main.css'

import styles from '../style/app.module.css'

export default function App() {
  return (
    <>
      <h1 className={styles.title}>Hi :)</h1>
    </>
  )
}
```

<!-- Don't do this at home -->

---
links:
  - https://deno.land/x/aleph_plugin_windicss@v0.0.2
---

# Plugins

```ts
// aleph.config.ts
import type { Config } from 'https://deno.land/x/aleph/types.d.ts'

import markdown from 'https://deno.land/x/aleph/plugins/markdown.ts'
import windicss from 'https://deno.land/x/aleph_plugin_windicss@v0.2.0/plugin.ts'

export default <Config>{
  plugins: [markdown(), windicss]
}
```

---
ratio: 2/3
---

## Why SSR
- Performance
- SEO
- It just (Web) Works

## Aleph
- Static pages generated server-side
- Client-side events hydration

::col2::

```tsx
import React from 'https://esm.sh/react'
import type { SSROptions } from 'https://deno.land/x/aleph/types.d.ts'

export const ssr: SSROptions = {
  props: async req => {
    return {
      $revalidate: 1, // revalidate props after 1 second
      username: await auth(req.headers.get('Auth-Token')),
      serverTime: Date.now()
    }
  }
}

export default function Page(props) {
  return (
    <p>
      Welcome back {props.username},
      the server time is {props.serverTime}
    </p>
  )
}
```

::header::

# SSR/SSG

<style>
  h2 { @apply text-2xl my-4 }
  ul { @apply mb-4 }
  pre code { @apply !text-sm }
</style>

---
layout: media
url: ./img/wcd.png
links:
  - https://webcomponents.dev
---

# Web Components, First-class interoperability

---
links:
  - http://stenciljs.com
---

# WebComponents w/ Stencil.js

```ts
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-name-is',
})
export class MyNameIs {
  @Prop() name: string;

  render() {
    return (
      <p>
        My name is {this.name}
      </p>
    );
  }
}
```

---

# Web Components SSR

> Rendering web components on the server is not possible because there is no way to declaratively represent shadow roots and their content in HTML — or to attach them to a host — without executing imperative JavaScript on the client.

---
layout: media
url: ./img/stencil_bg.svg
variant: left
links:
  - https://stenciljs.com/docs/static-site-generation
  - https://stenciljs.com/docs/hydrate-app
---

# Stencil SSR

> The "hydrate" app is automatically generated when the `--prerender` CLI flag is provided and by default the app is saved to `dist/hydrate`.

---

# Use Aleph Plugin API

```ts
import type { Plugin } from 'https://deno.land/x/aleph/types.d.ts'
import { hydrateDocument } from 'my-name-is/hydrate';

export default <Plugin> {
  name: 'my-name-is-hydrate',
  setup: async aleph => {
    aleph.onRender(async ({ html }) => await hydrate.renderToString(html, {
      prettyHtml: true,
      removeScripts: true
    }));
  }
}
```

---
ratio: 1/3
links:
  - https://github.com/skatejs/skatejs/tree/master/packages/ssr
  - https://github.com/developit/undom
---

# Skatejs/ssr

- Can use any Web Component
- Build on top of undom
- Not *real* SSG but can be hydrated on the server

::col2::

```ts
import type { Plugin } from 'https://deno.land/x/aleph/types.d.ts'
import 'http://esm.sh/@skatejs/ssr/register'
import render from 'http://esm.sh/@skatejs/ssr'

import { MyNameIs } from 'my-name-is'

export default <Plugin> {
  name: 'my-name-is-ssr',
  setup: aleph => {
    const myNameIs = new MyNameIs()
    aleph.onRender(async ({ html }) => {
      const rendered = await render(myNameIs)
      html.scripts.push(rendered)
    })
  }
}
```

---

<!-- Outro -->

# Deno is a bright future for any server-side tool, **secured**, with **Typescript** first-class citizen

<style>
  h1 { @apply text-6xl leading-20}
</style>

---

# Frontend performance implies **proper SSR**

<style>
  h1 { @apply text-6xl leading-20 }
</style>

---
layout: media
url: <Gif id="NSPRepE2PvAcg" />
variant: left
---

# Don't trust people who says Web Components can't be rendered on the server

<style>
  h1 { @apply text-4xl leading-12 }
</style>

---
layout: media
url: ./img/sd-play.png
variant: left
overlay: true
links:
  - WebComponents.dev | http://webcomponents.dev
  - Style Dictionary Playground | https://style-dictionary-play.dev
  - https://amzn.github.io/style-dictionary/
---

# Next step <div>~~Node~~ Deno in the browser?</div>

- Imports from CDN
- Multi-threads w/ workers
- Performance first

<style>
  h1 { @apply text-4xl leading-12; div { @apply text-2xl }}
</style>

---
layout: author
---

---
layout: qa
---

---
layout: thanks
---
