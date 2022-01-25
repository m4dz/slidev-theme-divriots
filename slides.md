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
  - name: HolyJS
    logo: holyjs.svg
    datetime: 2021-11-02T18:45:00+03:00
    permalink: https://holyjs-moscow.ru/en/talks/dont-miss-the-deno-train/
  - name: SFEIR QuarterBack
    logo: sfeir.png
    datetime: 2022-01-25T19:30+0100

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
url: <Gif id="wVcNP3TnXbl84" />
variant: left
overlay: true
class: text-4xl leading-20
---

# This is **not** an angry talk

<v-click>

```
Undefined is not a function
```

</v-click>

---
class: self-end text-2xl
---

# Don't ==blame== JS

::col2::

- was here when no-one was
- was made in 10 days
- survived the Browsers War(s)
- wasn't made for this sh*t

<style>
  .slidev-layout h1 { @apply text-9xl }
</style>

---
class: text-5xl leading-28
---

# Running on the ==server==, really?

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
class: text-5xl leading-26
---

# ==2009== <br> The IO challenge

---
class: text-5xl leading-26
---

# ==2018== <br> Fast, Secured, Servers

---
layout: media
url: <Gif id="9FZONYU8o41b63mil9" />
variant: right
overlay: true
class: text-xl leading-16 text-left
---

# Dynamic Languages <br> ==_vs._== <br> Typed Languages

---
class: text-6xl leading-28
---

# Could Node <br> and Javascript <br> be **fixed**?

---
layout: media
url: https://source.unsplash.com/9Phf8qd1YAg/1920x1080
variant: left
links:
  - https://martinmck.com/posts/deno-a-simple-guide/
class: text-2xl
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
class: text-3xl leading-22
---

# The Main Mistake: <br> modules ecosystem came ==after==

---
preload: false
---

# Modern Needs

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
url: ./img/deno.svg
variant: right
class: text-4xl leading-22
---

# **Deno** <br> JS/TS runtime in V8

---
class: text-3xl leading-16
---

# <small>**TypeScript**</small> <br>First-class citizen language

---
class: text-xl
---

# Promises at top-level

- No callbacks
- Deno async APIs always return a `<Promise>`
- Top-level async encapsulation

::col2::
```ts
const file = await Deno.open("/etc/passwd");

try {
  await Deno.readFile(file, Deno.stdout);
} catch (err) {
  console.error("Error reading file!", err);
}

file.close();
```

---
class: text-2xl leading-12 self-center
---

# <small>**Deno**</small> <br>friendly CDN

::col2::
<v-clicks>

- No package manager
- No local dependencies
- Resolve all the dependencies from CDNs
- ES Module format only
- Types definitions
- Polyfill the built-in Node.js modules
- Semver matching for packages

</v-clicks>

---
layout: media
url: <Gif id="GB0lKzzxIv1te" />
variant: right
class: text-3xl leading-16
---

# Get rid of the **package.json** pain point

---
links:
  - https://deno.land/
class: text-2xl
---

# **Running** Deno

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
class: text-4xl leading-18
---

# <small>One runtime,</small> <br><span v-click>**endless** possibilities</span>

---
class: text-xl
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
class: self-center text-2xl
---

# **Standard** Modules

::col2::

- audited by Deno maintainers
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
class: text-2xl
---

# **Community** Modules

- Served from CDN
- Curated list at deno.land/x

---
links:
  - https://deno.land/manual@v1.15.2/runtime/web_platform_apis
class: text-2xl
---

# Overlap with the browser

- ES Modules
- Promises
- Top-level objects (`window`...)
- Wasm Support
- Private namespace for internal stuff (`deno.*`)

---
links:
  - https://deno.land/manual@v1.15.2/getting_started/permissions#permissions-list
  - https://www.youtube.com/watch?v=r5F6dekUmdE#t=34m57
class: text-2xl
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
class: text-2xl leading-14
---

# Large community-based modules and Frameworks **for Deno**

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
  .slidev-layout h1 { @apply mb-12 }
  .slidev-layout h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

---
links:
  - https://alephjs.org/docs
class: text-4xl leading-20
---

# <small>React in Deno</small> <br>**Aleph.js**, the Next.js inspired alternative

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

<style>
  .slidev-layout h1 { @apply mb-4 }
  .slidev-layout h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

::col2::
```tsx
import React from 'https://esm.sh/react'
import type { SSROptions } from 'https://deno.land/x/aleph/types.d.ts'

export const ssr: SSROptions = {
  props: async req => {{
    $revalidate: 1, // revalidate props after 1 second
    username: await auth(req.headers.get('Auth-Token')),
    serverTime: Date.now()
  }}
}

export default function Page(props) {
  return (<p>
    Welcome back {props.username},
    the server time is {props.serverTime}
  </p>)
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
url: ./img/stencil.svg
variant: left
links:
  - https://stenciljs.com/docs/static-site-generation
  - https://stenciljs.com/docs/hydrate-app
class: text-2xl leading-10
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

--- <!-- Outro -->
class: text-3xl leading-18
---

# Deno is a bright future for any server-side tool, **secured**, with **Typescript** first-class citizen

---
class: text-4xl leading-20
---

# Frontend performance implies **proper SSR**

---
layout: media
url: <Gif id="NSPRepE2PvAcg" />
variant: left
class: text-2xl leading-14
---

# Don't trust people who says Web Components can't be rendered on the server

---
layout: media
url: ./img/sd-play.png
variant: left
overlay: true
links:
  - WebComponents.dev | http://webcomponents.dev
  - Style Dictionary Playground | https://style-dictionary-play.dev
  - https://amzn.github.io/style-dictionary/
class: text-2xl leading-12
---

# Next step <div>~~Node~~ Deno in the browser?</div>

- Imports from CDN
- Multi-threads w/ workers
- Performance first

---
layout: author
---

---
layout: qa
---

---
layout: thanks
---
