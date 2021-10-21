---
theme: ./

permalink: https://m4dz.net/t/mdx-docs

author: m4dz
twitter: m4d_z

info: >
  "In Space, No One Can Hear You Scream." The same goes for your super-brand-new-revolutionary project: Documentation is the key to get people speaking about it.
  Building well-fitted documentation can be tricky. Having it updated each time you release a new feature had to be a challenging part of your adventure. We tried many things to prevent the gap between doc and code: code-generated documentation, live examples a-la-Storybook, REPL...
  It's time for a new era of documentation where people-oriented content lives along with code examples: this talk will guide you from Documentation Best Practices – covered from years of FOSS collaborative documentation – to the new fancy world of Components in Markdown: MDX, MDJS, MD Vite, and all.
  Let's build shiny documentation for brilliant people!

dates:
  - name: React Advanced
    logo: react-advanced_logo_mini.svg
    datetime: 2021-10-25T16:55:00+02:00
---

<p class="tagline">The Legendary Fountain of Truth</p>

# Componentize Your Documentation!

---
layout: media
url: <Gif id="3oEjHCjgw4XMxXNLYQ" />
variant: left
overlay: true
---

# Documentation is a Success Key

---
class: text-5xl leading-18
---

Living documentation is a **pain** <br>
as it often ==desync from codebase==

---
layout: media
variant: right
url: https://source.unsplash.com/jbe0iCwo-U0/1920x1080
---

# We Tried...

<v-clicks>

- Storybook
- Embed REPL
- _etc._

</v-clicks>

<p v-after class="text-4xl">

We need a <br>
**single source of truth**!

</p>


---
layout: section
background: https://source.unsplash.com/ACt8ycSzpdE/1920x1080
---

# When a Plan Comes Together

---
links:
  - https://diataxis.fr/
---

# <mdi-reminder /> The Diátaxis Framework

<div class="grid grid-cols-2">
  <div class="h-40 p-4 grid border-r-1 border-b-1 relative">
    <div class="my-auto" v-click="1">
      <div class="font-heading w-full text-3xl">README</div>
      <div class="w-full">Entry Points</div>
    </div>
    <div class="absolute right-0 top-1/2 transform origin-top-right translate-x-1/2 -translate-y-1/2 text-xl font-bold -rotate-90 p-2 bg-dark-800 rounded"  v-click="5">Practice</div>
  </div>
  <div class="h-40 p-4 grid text-right border-b-1 relative">
    <div class="my-auto" v-click="2">
      <div class="font-heading w-full text-3xl">HOW-TO</div>
      <div class="w-full">Guides/Recipes</div>
    </div>
    <div class="absolute right-4 bottom-0 transform translate-y-1/2 text-xl font-bold p-2 bg-dark-800 rounded"  v-click="8">Use</div>
  </div>
  <div class="h-40 p-4 grid border-r-1 relative">
    <div class="my-auto" v-click="3">
      <div class="font-heading w-full text-3xl">FAQs</div>
      <div class="w-full">Discussions/History</div>
    </div>
    <div class="absolute left-4 top-0 transform -translate-y-1/2 text-xl font-bold p-2 bg-dark-800 rounded"  v-click="7">Learn</div>
  </div>
  <div class="h-40 p-4 grid text-right relative">
    <div class="my-auto" v-click="4">
      <div class="font-heading w-full text-3xl">MAN PAGES</div>
      <div class="w-full">Exhaustive Tech Content</div>
    </div>
    <div class="absolute left-0 top-1/2 transform origin-top-left -translate-x-1/2 -translate-y-1/2 -rotate-90 text-xl font-bold p-2 bg-dark-800 rounded"  v-click="6">Understand</div>
  </div>
</div>

<style>
.slidev-vclick-target {
  transition: all 500ms ease;
}
</style>

---

# <mdi-reminder /> Component Driven Development

<v-clicks>

- 🚀 Faster development
- 🐣 Simpler maintenance
- ♻️ Better reusability
- 🧪 Better TDD
- 📈 Shorter learning curves
- 📐 Better modeling of the system

</v-clicks>

---

# _Diátaxis_ & Components

- ==Practice==-oriented
- Easy to decorate
- Focus on component level
- _Readme_ sections: Live complex demos
- _How-to_ sections: Comprehensive live examples

---
layout: media
variant: left
url: <Gif id="PlnQNcQ4RYOhG" />
---

# Let's play with the doc, live!

---
layout: section
background: https://source.unsplash.com/B-x4VaIriRc/1920x1080
---

# MDX to Rule Them All

---

# Writing Doc: Markdown

- Syntactic sugar on HTML
- Easy to read
- Easy to contribute
- Raw text compatible
- Too simple for large documents

---
links:
  - https://mdxjs.com/
  - https://egghead.io/courses/mdx-conf-3fc2
---

# The MDX Syntax: What it is?

Markdown --> JSX --> HTML

```mdx
import {Chart} from './snowfall.js'
export const year = 2018

# Last year’s snowfall

In {year}, the snowfall was above average.
It was followed by a warm spring which caused
flood conditions in many of the nearby rivers.

<Chart year={year} color="#fcb32c" />
```

---
links:
  - https://egghead.io/lessons/egghead-mdx-v2-syntax | MDX v2 Syntax
  - https://egghead.io/lessons/mdx-demystifying-mdx | Demystifying MDX
---

# Under the hood

- Standard Markdown flavor
- JSX Native Syntax
- External Compoments Support
- Simple functions renderer
- Passing Props
- TypeScript Native Support
- MDX --> JAST --> HAST --> HTML

::col2::

```jsx
import Button from '../button'

export default function MDXContent({ components, ...props }) {
  return (
    <MDXLayout
      {...layourProps}
      {...props}
      components={components}
    >
      <h1>{`Hello Rioters!`}</h1>
      <Button>Let's Go!</Button>
    <MDXLayout>
  )
}
```

---

::header::

# Naked _vs._ Component Documentation Frameworks

::default::

## Naked

- Gatsby, Next.js (w/ `@next/mdx`), React-Static
- Very flexible
- No built-in support for documentation purposes

::col2::

## Component Documentation Framework

- Storybook in MDX pages, Docz
- Constraints (framework)
- Playgrounds and `props` tables built-in

---
layout: media
url: ./img/backlight.png
---

# Organizing your project

---
layout: media
variant: full
url: ./img/backlight_folders.png
---

---
class: text-4xl leading-18
---

JSX Components are **isolated elements** <br>
==reacting== to the wrapping **environment**

---
layout: section
background: https://source.unsplash.com/Yy-dHQP-Ax0/1920x1080
---

# Gardening Your Personal Playground

---
layout: media
url: <Gif id="Cu0Iqwal4cPyU" />
overlay: true
variant: left
---

# MDX only is <br> too ==low-level==

---

# Playgrounds Magic

- Write once, embed everywhere
- Visualize in multiple versions (Rendered, Compiled, ASTs...)
- Import your component in your doc
  ~~~mdx {3|9-11}
  ## Usage

  ```js preview-story
  import { html } from '@microsoft/fast-element';
  import { provideDesignSystem, getButton } from '@divriots/starter-furious';

  provideDesignSystem().register(getButton());

  export const usageStory = () => html`
    <fs-button appearance="primary">Submit</fs-button>
  `;
  ```
  ~~~

---

# Props tables: enrich the experience

- Components Props Reflector
- Auto-built previews/controls/knobs
- Up-to-date doc based on code
  ```mdx
  import { ArgsTable } from '@storybook/addon-docs';
  import { MyComponent } from './MyComponent';

  # My Component!

  <ArgsTable of={MyComponent} />
  ```

---
layout: media
variant: full
url: https://raw.githubusercontent.com/storybookjs/storybook/next/addons/docs/docs/media/args-controls.gif
---

---

# Code your Doc, finally

```mdx
import { Button } from '../index';

# Button

<Description of={Button} />

## Example

<Playground scope={{ Button }} code={`
<Button variant="primary" mr="2">Primary</Button>
<Button disabled>Disabled</Button>
`}
/>

## Props

<Props of={Button} />
```

---
class: text-4xl leading-14
---

MDX + CSF + Playgrounds + Props tables: <br>
the best of ==all worlds== 🤩 !

---
layout: media
variant: left
url: https://source.unsplash.com/btQt9i0Krag/1920x1080
---

# Migrating to MDX

<v-clicks>

1. 📖 Your Documentation is probably on MD already
2. ✂️ Organize in separated components
3. 🧩 Pick your tool (Naked, Framework, Doc platform)
4. 🕹 Play with you embed components

</v-clicks>

---

<!-- Outro -->

# MDX is just **paving** the way

(more frameworks are coming)

---
layout: media
url: <Gif id="9VnK2SUebgetTc9X7B" />
variant: right
overlay: true
---

# Writing Documentation outside of writing code is ==non-sense==

---
logo: ./img/Backlight_-_Icon_YW.svg
class: text-5xl leading-18
---

Focus on **advanced** and <br>
**integrated** devtools rather than <br>
reinventing the wheel

---
layout: qa
---

---
layout: thanks
---
