---
theme: ./

permalink: https://m4dz.net/t/web-standards

author: m4dz
twitter: m4d_z

info: >
  Back in 1995, JavaScript was born at Netscape headquarters and brought with it the promise of dynamic pages right in the browser. A year before, CSS reached its first version, giving the Web a way to style and design information. With HTML, they’re the cornerstones of what will become 10 years later a new generation of Virtual Machines: the Web Platform.
  Fast forward almost 30 years to the present day, modern desktop and mobile apps are still largely powered by those very technologies. But as powerful as they are, the HTML/CSS/JS trinity is too low-level to be handy enough in a modern Developer Toolkit on a daily basis.
  Let’s cover the large field of technologies and patterns helping you to build advanced (web) apps: Reactive Frameworks, Web Components, Typed Languages, Isomorphic codebases, WebAssembly, SSR/SSG Web Servers, Web APIs, Design Systems, Packages distribution… Never heard of any nor all of them? No worries, here’s the talk to rule them all!

dates:
  - name: Sony CSL
    datetime: 2022-01-14T10:00:00+01:00
---

<p class="tagline">Always Bet On</p>

# Web Standards


---
layout: media
url: https://gameprogrammingpatterns.com/images/splash.jpg
variant: full
links:
  - https://gameprogrammingpatterns.com/ | Bob Nystrom
---

---
layout: author
---

---
layout: media
url: ./img/tumblr_oquio90QYS1qgdhs7o4_500.gif
variant: left
overlay: true
class: text-2xl
---

> The code is more what you'd call "guidelines" than actual rules.

---
layout: media
url: https://wallpapercave.com/wp/wp5191399.jpg
variant: left
class: text-4xl leading-22
---

# 1995: Birth of JS in **10 days**

---
layout: media
url: https://miro.medium.com/max/1200/1*KiMAQIa6dd_H2EiOsWmFTw.png
variant: right
class: text-3xl leading-18
---

# One year before: **CSS 1.0**

---
layout: media
url: https://www.destroyallsoftware.com/assets/posters/talks/the-birth-and-death-of-javascript.poster-1ba16f04a5f465924efa59e8d8c223d90c529fd79151503ff52e38cf2ca8d6d1.png
links:
  - https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript
class: text-center order
---

# ==2014== The Birth and Death of JS

---
class: text-3xl
---

# ==2022==

- +30 years of backward compatibility
- still 3 technologies supported by the browser
- a very fast growing ecosystem

---
layout: quote
cite: Edmund Burke
---

> Those who don't know history are doomed to repeat it.

<!--
Disclaimer: I’ll go through more than 30 years of web history in 60’ to help you better understanding nowadays best practices
-->

---
layout: section
background: https://source.unsplash.com/o6GEPQXnqMY/1920x1080
---

# Web Standards & APIs

---

# The browser as a VM

<ul class="tiles">
  <li><uil-html5-alt /> HTML (DOM)</li>
  <li><uil-css3-simple /> CSS (CSSOM)</li>
  <li><uil-java-script /> JS (Web APIs)</li>
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
url: https://source.unsplash.com/qEEQ5wkggCE/1920x1080
variant: left
class: text-4xl leading-20
---

# We ==can’t== control the execution **environment**

---
links:
  - https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
---

# DOM

> The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

---

## Data Types

- Document
- Node
- Element
- NodeList
- Attr

::col2::
## Interfaces

- document.querySelector(selector)
- document.querySelectorAll(name)
- document.createElement(name)
- parentNode.appendChild(node)
- element.innerHTML
- element.style[name]
- element.setAttribute()
- element.addEventListener()

::header::
# DOM Data types and Interfaces

<style>
  h1 { @apply mb-12 }
  h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

---
logo: ./img/MdiHistory.svg
layout: media
url: <Gif id="l41Yr5xsi3OmomsXS" />
variant: left
class: text-3xl leading-18
---

# **jQuery** and the ==Browsers’ War==

---
links:
  - https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model
---

# CSSOM

> The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML.

---
links:
  - https://developer.mozilla.org/en-US/docs/Web/CSS
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
  - https://polypane.app/css-specificity-calculator/
---

::header::
# Cascading styles and specificity

::default::
```css
main {
  color: red;
}
```

```html
<main>
  <header>
    <p>Hello World!</p> <!-- color: red -->
  </header>
</main>
```

::col2::
```css
header:where(#top) nav li:nth-child(2n + 1) {
  /* scores 013
   * id: 0
   * (pseudo) classes: 1
   * tags: 3
   */
}

#top nav li:nth-child(2n + 1) {
  /* scores 112
   * id: 1
   * (pseudo) classes: 1
   * tags: 2
   */
  color: white !important; /* adds 10000 */
}
```

---
links:
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
  - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries
---

# Media queries and user-detection

```css
@media (min-width: 30em) and (orientation: landscape) {
  /*  */
}

@media (prefers-color-scheme: dark) {
  /*  */
}

.container {
  container-type: inline-size;
}

@container (min-width: 700px){
  .card {
    /*  */
  }
}
```

---
logo: ./img/MdiHistory.svg
layout: media
url: ./img/caniuse.png
links:
  - https://caniuse.com/
---

---
links:
  - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction
---

# Web APIs

> Browser APIs are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it.

---
class: text-2xl
links:
  - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
---

# Document APIs

- Manipulating objects
- Interact with DOM/CSSOM
- Access primitives: `Window`, `Navigator`, `Document`…

<style>
  code { @apply text-xl }
</style>

---
class: text-2xl
---

# Network APIs

- Fetch Data
- Performing Async requests
- Handling URLs, Requests, Responses…

---
class: text-2xl
---

# Drawing APIs

- 2D with Canvas
- 3D/GPU with WebGL
- Animation, Loops…

---
class: text-2xl
---

# Audio/Video APIs

- Media Elements (Video, Audio)
- Audio API
- WebRTC

---
class: text-2xl
---

# Devices APIs

- Battery
- Notifications
- USB
- …

---
class: text-2xl
---

# Storage APIs

- Web Storage
- IndexedDB API
- Cache

---
logo: ./img/MdiHistory.svg
layout: media
url: <Gif id="ChmEWOL7Vaz5u" />
variant: left
class: text-2xl leading-16
---

# Consistency isn’t our ==best skill==

---
layout: quote
logo: ./img/MdiHistory.svg
---

# Web 2.0

> World Wide Web was built with the idea of sharing information, but it was so powerful it turned out from consumption to collaboration.

---
layout: media
url: <Gif id="CkYl1qlzkxPRbklfXx" />
overlay: true
variant: right
class: text-3xl leading-18
---

# Low-level **primitives** needed to power a **VM**


---
layout: section
background: https://source.unsplash.com/X3z1zud4wZ4/1920x1080
---

# Typed Languages

---
layout: media
url: https://source.unsplash.com/BIeC4YK2MTA/1920x1080
variant: right
class: text-4xl leading-22
---

# JavaScript as a **foundation**

---

# Prototyped, Dynamic Language

```js
const m4dz = {
  description: "Principal Developer Advocate",
  employer: "‹div›RIOTS",
  twitter: "https://twitter.com/m4d_z",
  <prototype>: Object {
    __defineGetter__: __defineGetter__()
    __defineSetter__: __defineSetter__()
    __lookupGetter__: __lookupGetter__()
    __lookupSetter__: __lookupSetter__()
    __proto__: null
    constructor: Object()
    hasOwnProperty: hasOwnProperty()
    isPrototypeOf: isPrototypeOf()
    propertyIsEnumerable: propertyIsEnumerable()
    toLocaleString: toLocaleString()
    toString: toString()
    valueOf: valueOf()
  }
}
```

---
layout: media
url: <Gif id="cF7QqO5DYdft6" />
variant: left
class: text-3xl leading-22
---

# **Event**-driven architecture

---
class: text-4xl leading-24
---

# ==Production== needs **robust** environment and **determinist** execution

---
logo: ./img/MdiHistory.svg
class: text-2xl leading-16
---

# Been there, done that.

JavaApplets, Flash & ActiveScript, CoffeeScript…

---
layout: media
url: <Gif id="7RsYleDzhKCVgaEaGG" />
variant: right
overlay: true
class: text-2xl leading-12 text-left
---

> JavaScript is and will always remain the only language supported by the browser.

---
layout: media
url: https://cdn-ak.f.st-hatena.com/images/fotolife/o/opttechnologies2015/20170802/20170802161755.png
variant: left
class: text-4xl leading-22
links:
  - https://www.typescriptlang.org/
---

# Transpilling ==for the Web==

---

::header::
# Transpillation

::default::
## pros

- Extend Language support and features
- Syntactic sugar
- Error-proof
- Runtime validation

::col2::
## cons

- Don't ship your code
- Extra-layer
- Introduce bugs
- Less control

<style>
  h1 { @apply mb-12 }
  h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

---
layout: media
url: https://codebelt.github.io/blog/wp/wp-content/uploads/2013/11/typescript-sourcemaps-error.png
class: text-center
---

# Sourcemaps/Native support in Devtools

---

::header::
# Static Typing and Determinism

::default::
## TypeScript
```ts
type AlbumAPIResponse = {
  title: string;
  artist?: {
    name: string;
    bio?: string;
    previousAlbums?: string[];
  };
};

declare const album: AlbumAPIResponse;
```

::col2::
## Rust
```rust
struct Artist {
  name: String,
  bio: Option<String>
  previousAlbums: Option<Vec<String>>
}
struct AlbumAPIResponse {
  title: String,
  artist: Option<Artist>
}

const album: Option<AlbumAPIResponse>;
```

<style>
  h1 { @apply mb-12 }
  h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

---
links:
  - https://webassembly.org/
---

# Compiling for the Web

```wasm
(module
  (func (export "addTwo") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add))
```

---
logo: ./img/MdiHistory.svg
layout: media
url: <Gif id="EZELNssmfIzni" />
variant: left
class: text-4xl leading-22
---

# **emscripten**, **asm.js**, and the History

---
layout: quote
---

> Neither Web nor Assembly.

---
layout: media
url: https://images-na.ssl-images-amazon.com/images/I/91oyjHAqzRL._RI_.jpg
variant: right
class: text-2xl leading-14
---

# The good candidates

- Rust
- Go(lang)
- C / C++
- C#
- AssemblyScript
- Kotlin

---
layout: section
background: https://source.unsplash.com/Wiu3w-99tNg/1920x1080
---

#  Front-end Frameworks

---
class: text-3xl
---

# JavaScript is

<v-clicks>

- inconvenient
- slow
- `undefined is not a function`

</v-clicks>

<v-click>

but simple/understandable/==everywhere==

</v-click>

<style>
  code { @apply !text-2xl }
</style>

---

::header::
# Events API (listeners) & Promises


::default::
```js
function clickHandler(event) {
  //
}

document
  .querySelector(selector)
  .addEventListener("click", clickHandler)
```
```js
window
  .addEventListener(
    'DOMContentLoaded',
    (event) => {
      //
    }
  )
```

::col2::
```js
const myPromise =
  new Promise((resolve, reject) => {
    setTimeout(() => { resolve('foo') }, 300)
  })
```
```js
myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
```
```js
(async function main (){
  try {
    const res = await myPromise()
    handleResolvedA(res)
  } catch (error) {
    handleRejectedA(res)
  }
})()
```

---

::header::
# Frameworks

::default::
## UI

- React/Preact
- Vue.js
- Svelte
- SolidJS
- Angular

::col2::
## Data binding

- Alpine.js
- Sidewind
- Mithril

::col3::
## Utility, animation

- GSAP
- PopMotion
- Lodash
- date.fns
- Charts.js
- D3.js

<style>
  h1 { @apply mb-12 }
  h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

---
layout: media
url: <Gif id="3orieTMPDvjkcSuupa" />
variant: right
overlay: true
class: text-3xl leading-20
---

# **State** & Data Management

---
links:
  - https://v3.vuejs.org/guide/reactivity.html#what-is-reactivity
---

# **Observability** & Reactivity

```js
const dinner = {
  meal: 'tacos'
}

const handler = {
  get(target, property, receiver) {
    track(target, property)
    return Reflect.get(...arguments)
  },
  set(target, property, value, receiver) {
    trigger(target, property)
    return Reflect.set(...arguments)
  }
}

const proxy = new Proxy(dinner, handler)
console.log(proxy.meal)
```

---
layout: media
url: <Gif id="3ohzdQhmr2YrxHT45y" />
variant: right
class: text-4xl
---

# **virtual**-dom

---
layout: media
url: https://source.unsplash.com/1rBg5YSi00c/1920x1080
variant: left
---

# **Styl**ing

## Processing

- Sass/Scss
- PostCSS

## Css in JS

- styled-components
- vanilla-extract
- Theme UI, Stitches…


## Frameworks

- Tailwind

<style>
  h1 { @apply my-6 }
  h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 my-4 }
</style>

---
links:
  - https://webcomponents.dev/
  - https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/
---

# Web **Components**

- HTMLElement
- Stencil
- Lit
- FAST
- …

```html
<template id="counter">
  <style> /* ... */ </style>

  <button id="dec">-</button>
  <span id="count"></span>
  <button id="inc">+</button>
</template>
```
```js
customElements.define('my-counter', MyCounter);
```

::col2::
```js
class MyCounter extends HTMLElement {
  constructor() {
    super()
    this.count = 0
    this.attachShadow({ mode: 'open' })
    this.template = document.getElementById('counter')
  }

  connectedCallback() {
    this.shadowRoot
      .appendChild(template.content.cloneNode(true))
    this.shadowRoot.getElementById('inc')
      .addEventListener('click', this.inc)
    this.shadowRoot.getElementById('dec')
      .addEventListener('click', this.dec)
    this.update(this.count)
  }

  inc() { this.update(++this.count) }
  dec() { this.update(--this.count) }
  update(count) {
    this.shadowRoot.getElementById('count').innerHTML = count
  }
}
```

<style>
  pre code { @apply !text-xs }
</style>

---
layout: media
url: <Gif id="dXICCcws9oxxK" />
variant: left
overlay: true
---

# Which one should I use?

- Working on a Web/Simple page <br><strong v-click>Utility framework (Alpine…)</strong>
- Working on a desktop/mobile-like (Web)App <br><strong v-click>Reactive Framework (Vue.js…)</strong>
- Distributing a collection of components <br><strong v-click>Web Components</strong>

---
layout: section
background: https://source.unsplash.com/QdAAasrZhdk/1920x1080
---

#  Architecture of a Modern WebApp

---
class: text-4xl
---

# **Isomorphic** codebase

---
class: text-4xl
---

# Node/**Deno**

```ts
import { serve } from "https://deno.land/std@0.121.0/http/server.ts";

console.log("http://localhost:8000/");
serve((req) => new Response("Hello World\n"), { port: 8000 });
```

---
class: text-4xl
---

# **API-first** architecture

---

::header::
# **REST** _vs_ **GraphQL**

::default::
## REST

- HTTP Verbs
- Request/Response Headers
- URI
- HTTP Codes

::col2::
## GraphQL

- JSON Native
- Dynamic Requests
- Single Endpoint
- Query Language

<style>
  h1 { @apply mb-12 }
  h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

---
layout: media
url: <Gif id="gMayS1vx4gYeV1cvoX"/>
variant: left
class: text-2xl
---

# SSR/**SSG** Servers

- Next.js
- Aleph
- Nuxt.js

---
layout: media
url: https://res.cloudinary.com/ddxwdqwkr/image/upload/v1616962404/patterns.dev/Rendering-ProgressiveHydration.svg
class: text-center
links:
  - https://www.patterns.dev/posts/progressive-hydration/
---

# The Island Pattern

---

::header::
# Builders and **Packers**

::default::
## Builders

- Rollup
- Esbuild
- Parcel

## Packers

- Vite.js
- Snowpack
- Webpack
- WMR

::col2::

## Features

- Dev Server
- HMR
- Building pipeline
- Extensibility

<style>
  h1 { @apply mb-12 }
  h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

---

::header::
# Workers

::default::
## **Web** Workers

- Threading
- Run in background
- Subset of `GLOBALS`

::col2::
## **Service** Workers

- Proxying Requests
- Hot-pluggable
- Cache strategies, transforms…

<style>
  h1 { @apply mb-12 }
  h2 { @apply text-xl font-bold border-b-1 border-primary border-opacity-75 pb-1 mb-4 }
</style>

---
layout: section
background: https://source.unsplash.com/WPmPsdX2ySw/1920x1080
---

#  Working as a team

---
class: text-3xl
---

# Code **fencing**

- Eslint
- Prettier
- Husky
- …

---
class: text-3xl
---

# Frontend **Devtools**

---
class: text-3xl
---

# **Toolkits** & Templates

```sh
$ npm create <...>
```

---
layout: media
url: https://backlight.dev/Landing_Hero_Illustration.png
variant: left
overlay: true
links:
  - http://backlight.dev
class: text-2xl
---

# **Design** Systems

- Design Tokens
- Collection of components
- Shift left complexity
- Theming features

--- <!-- Outro -→
class: text-3xl
---

# Frontend is a ==wild ecosystem==

---
class: text-3xl
---

# Great Foundations

- **HTML** → UI Description
- **CSS** → UI Styling and animation
- **JS** → UI and State Reactivity
- **WASM** → High-load Computing Tasks

---
class: text-6xl leading-32
---

# ==Always== bet on **Web Standards**

---
layout: qa
---

---
layout: thanks
---
