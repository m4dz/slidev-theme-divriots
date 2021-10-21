---
theme: ./

# Display avatar in footer
# Must have a PNG in `img` named as the value
author: m4dz
# Display Twitter link on cover
twitter: m4d_z

# Dates the talk is given, collection of objects:
# - name: string, event name
# - logo?: string, logo SVG file in `img`
# - datetime: datetime
# Only one date displayed, the closest upcoming one
dates:
  - name: Clever Age
    logo: cleverage.svg
    datetime: 2021-10-12T13:00:00+02:00
  - name: Clever Age
    logo: cleverage.svg
    datetime: 2021-10-15T13:00:00+02:00

# `light` or `dark`
colorSchema: dark
---

<p class="tagline">Front-end is Back!</p>

# Design Systems, Code-side

---
layout: author
---

---
layout: media
url: <Gif id="l0MYGb1LuZ3n7dRnO" />
variant: left
---

# Building Interfaces <br> is **Hard**

<style>
  h1 { @apply text-6xl leading-18; }
</style>

---
layout: media
url: <Gif id="McmLoTZCMUkoZGPXU6" />
variant: right
---

# Maintaining Frontend is a Nightmare

<style>
  h1 { @apply text-6xl leading-18; }
</style>

---
class: text-4xl leading-18
---

The UI/UX for end-users is a ==success key==, <br>
as developer you're a part of it.

---
layout: section
background: https://source.unsplash.com/sOK9NjLArCw/1920x1080
---

# Component Driven Development

---
layout: quote
links:
  - https://www.componentdriven.org/
---

> The development and design practice of building user interfaces with modular components. UIs are built from the “bottom up” starting with basic components then progressively combined to assemble screens.


---
layout: media
url: https://source.unsplash.com/AF6N3WRsyk4/1920x1080
variant: left
---

# Why Components-first?

<v-clicks>

- 🚀 Faster development
- 🐣 Simpler maintenance
- ♻️ Better reusability
- 🧪 Better TDD
- 📈 Shorter learning curves
- 📐 Better modeling of the system

</v-clicks>

---

# Starting a CDD project

<v-clicks>

1. Build one component at a time
2. Combine components
3. Assemble pages
4. Integrate pages into your project

</v-clicks>

::col2::

<h1 v-after class="!text-6xl !leading-16 !m-0">

Isn't that a **Design System** approach?

</h1>

<style>
  p { @apply p-0 m-0; }
</style>

---
class: text-4xl
---

# What about **Interfaces**?

---
layout: section
background: https://source.unsplash.com/Jt9syHEhrPE/1920x1080
---

# Design Systems

---
layout: media
url: https://i.makeagif.com/media/8-29-2015/Y-cBqg.gif
variant: right
overlay: true
---

# It's a <br> Hot Stuff!

<style>
  h1 { @apply text-8xl; }
</style>

---
links:
  - https://www.designsystems.com/
  - https://www.invisionapp.com/inside-design/guide-to-design-systems/ | A comprehensive guide to design systems
---

# A Visual Design Language

1. 🧩 Tokens
- Color
- Typography
- Sizing and spacing
- Imagery
2. 📦 Patterns library
3. 📖 Comprehensive Documentation

---
links:
  - https://medium.com/@aviaviaviii/10-tips-for-a-sustainable-component-library-as-a-part-of-your-design-system-7edc6d7697a9
  - https://twitter.com/aviaviaviii/status/1447612370109427712
---

::header::

# Designers Stuff

::default::

<Tweet id="1447612377491394561" scale=0.55 />

::col2::

<Tweet id="1447612444348616708" scale=0.6 />

::col3::

<Tweet id="1447612414212464641" scale=0.6 />

---
layout: section
background: https://source.unsplash.com/YLSwjSy7stw/1920x1080
---

# A Design System library

---
layout: media
url: https://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png
variant: full
links:
  - https://bradfrost.com/blog/post/atomic-web-design/
---

---
layout: media
url: https://amzn.github.io/style-dictionary/assets/property-definitions.png
links:
  - https://amzn.github.io/style-dictionary/
  - https://system-ui.com/
---

# Design tokens

---
layout: media
variant: left
url: ../img/dtcg.png
links:
  - https://www.w3.org/community/design-tokens/
---

# Interoperability: <br> W3C Design Token Community Group

<style>
  h1 { @apply text-5xl leading-16; }
</style>

---
links:
  - https://developers.google.com/web/fundamentals/web-components/best-practices
---

- (Shadow) DOM
- Attributes and properties
- Events

::header::

# Designing components <br> **Best practices**

<style>
  h1 { @apply leading-10; }
</style>

::col2::

<v-clicks>

1. Don't override the page author
2. Make properties lazy
3. Avoid reentrancy issues

</v-clicks>

---

# 📦 Publishing as a **library**

<style>
  h1 { @apply text-7xl; }
</style>

---
preload: false
class: text-center
---

<h1
  v-motion-pop
>
Demo!
</h1>

<style>
  h1 { @apply text-14xl; }
</style>

---
layout: media
url: <Gif id="5V9hAgndJLwcw" />
variant: left
overlay: true
---
<!-- Outro -->

# No **Lock-in**!

<style>
  h1 { @apply text-7xl; }
</style>

---
layout: media
url: <Gif id="MZQkUm97KTI1gI8sUj" />
variant: left
---

# It's another way of thinking

<style>
  h1 { @apply text-7xl leading-18; }
</style>

---

# Shifting **left** the Frontend

<style>
  h1 { @apply text-6xl leading-36; }
</style>

---
layout: qa
---

---
layout: thanks
---
