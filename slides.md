---
theme: ./

info: >
  Remember Atomic Design? It's been a while since we started talking about
  Design Systems. They're supposed to solve our interfaces inconsistencies
  issues, as a single source of truth. But do you know well how to build and use
  them, from a developer perspective?

  Here's your ultimate guide to Design Systems, for Devs! From the fundamentals
  of Design Tokens definition, to how to build advanced versatile layouts.
  You'll learn all best practices, tips & tricks, components splicing
  strategies, from this comprehensive step-by-step handbook talk.

  Never be lost again in front of a creating Design System from scratch!

themeConfig:
  permalink: https://m4dz.net/t/steal-this-guide/

  author: m4dz
  twitter: m4d_z

  dates:
    - name: React Finland
      datetime: 2021-09-02T11:00:00+01:00
      permalink: https://react-finland.fi/2021/schedule/#the-eternal-sunshine-of-the-zero-build-pipeline
      video: https://www.youtube.com/watch?v=oUV2kZedlLU
    - name: Codemotion
      datetime: 2021-12-02T15:55:00+01:00
      logo: codemotion-logo.png
    - name: DevConf.CZ
      datetime: 2022-01-28T10:00+0100
      logo: devconf-logo-cz-reverse.svg
      permalink: https://devconfcz2022.sched.com/event/siHC/design-systems-of-a-down-steal-this-guide
---

<p class="tagline">Design Systems of a Down</p>

# Steal This Guide!

---
layout: media
variant: right
overlay: true
url: <Gif id="3og0ISJtoddt1HkX9S" />
---

# We Talked ==UX== For Years <br> but Developers Are **Users** Too

<style>
  .slidev-layout h1 { @apply text-6xl leading-18 }
</style>

---
links:
  - https://www.uxpin.com/create-design-system-guide/
  - https://www.invisionapp.com/inside-design/guide-to-design-systems/
  - https://xd.adobe.com/ideas/principles/design-systems/
  - https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969
---

# We’ve Got Plenty of ==Designers’ Resources==, <br> but Not That Much **Dev Oriented**

<style>
  .slidev-layout h1 { @apply text-6xl leading-18 }
</style>

---
layout: section
background: ./img/bill-oxford-tR0PPLuN6Pw-unsplash.jpg
---

# Reminder: Atomic Design

---
links:
  - https://www.linkedin.com/posts/georges-gomes-6580541_designsystem-designsystems-webdevelopment-activity-6839102889185607680-dOFX/ | Hey Georges, what is a Design System?
---

# Design **System**

<ul class="tiles">
  <v-clicks>
    <li><clarity-atom-solid class="inline" /> Design Tokens</li>
    <li><clarity-design-solid class="inline" /> Design Kit</li>
    <li><clarity-blocks-group-solid class="inline" /> Components Library</li>
    <li><clarity-lightbulb-solid class="inline" /> Dynamic Documentation</li>
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
      @apply w-20 h-auto;
      @apply mb-4;
    }
  }
</style>

<!--
- Design Tokens
  These are the foundation of the brand.

- Design Kit
  Also known as UI Kit, a Design Kit is a set of pattern or components existing in design tools like Sketch or Figma.

- Component Library
  A Component Library is the code side of the Design Kit. It's a list of reusable component.

- Documentation site
  The Documentation site, also called Reference site, aggregates all previous elements into a single explorable site.
-->

---
layout: quote
cite: Dan Mall
---

> Design systems help product teams deliver software to customers faster & better.

---
layout: media
variant: full
url: ./img/atomic-design.png
---

---
layout: media
variant: full
url: ./img/1630569192609.jpg
---

---

# We Want to Build **Components** That Are:

<ul class="tiles">
  <v-clicks>
    <li><clarity-recycle-solid /> Reuseable</li>
    <li><clarity-flask-solid />Testable</li>
    <li><clarity-atom-solid /> Customizable</li>
    <li><clarity-employee-group-solid /> Collaborative</li>
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
      @apply w-20 h-auto;
      @apply mb-4;
    }
  }
</style>

---
layout: section
background: https://source.unsplash.com/V_y81v_lI4k/1920x1080
---

# Design Systems Foundations

---
layout: media
variant: left
overlay: true
url: <Gif id="9UqRcQHzBou6A" />
---

# 1. Design **Tokens**

<style>
  .slidev-layout h1 { @apply text-6xl leading-18 }
</style>

---

# Writing Your ~~Atoms~~ Tokens

- Think them as variables
- Externalize as much as you can
- Composition:
  - realm: `color`, `spacing`, `typography`, `border`...
  - group: `color.font`, `spacing.sizes`, `typography.family`...
  - name: `color.font.base`, `spacing.sizes.md`, `typography.family.sans`...
  - value: `color.font.base.value = #121212`, `spacing.sizes.md.value = 1rem`...
  - attributes: `color.font.base.themeable = true`...

---

# From a Developer Perspective

```json
"tokens" = {
  "color": {
    "palette": {
      "gray-100": { value: "#121212" }
    },
    "font": {
      "base": {
        "value": "{colors.palette.gray-100}",
        "themeable": true,
        "comment": "Default font color"
    }
  }
}
```

---
layout: media
variant: full
url: ./img/style-dictionary-play.png
links:
  - https://www.style-dictionary-play.dev/
  - https://open-props.style/
---

---
layout: media
variant: left
overlay: true
url: <Gif id="26xBC0xYwcSWzTL2g" />
---

# 2. Creating Your <br> **Base Components**

<style>
  .slidev-layout h1 { @apply text-5xl leading-18 }
</style>

---
layout: media
variant: right
url: https://source.unsplash.com/FLAHpMC1Yp4/1920x1080
---

# Creating Molecules

- Component Driven Development
- Pick your Framework
- Stick to the basics
- Features, Features, Features!

---

```tsx
import { useButton } from '@react-aria/button';
import styles from './button.module.scss';

export type ButtonProps = AriaButtonProps<ElementType> & {
  size: 'small' | 'medium' | 'large';
};

export const Button = ({
  size = 'medium',
  ...rest
}: ButtonProps): ButtonAria<HTMLAttributes<any>> => {
  const ref = useRef();
  const { buttonProps } = useButton(rest, ref);
  const { children } = rest;

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`${styles.button} ${styles[size]}`}
    >
      {children}
    </button>
  );
};
```

::col2::
```tsx
import { Button } from '../index';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const small_button = () => (
  <Button
    size="small"
    onPress={() => alert('Button pressed!')}
  >
    Test
  </Button>
);

export const medium_button = () => (
  <Button
    size="medium"
  >
    Test
  </Button>
);
```

<style>
  .slidev-layout pre code { @apply !text-xs; }
</style>

---

```scss
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-width: 0px;
  border-radius: var(--aria-border-radius-medium);
  font-weight: var(--aria-font-weight-semibold);
  min-width: var(--aria-spacing-xx-large);
  padding-inline-start: var(--aria-spacing-medium);
  padding-inline-end: var(--aria-spacing-medium);
  background: var(--aria-color-primary);
  color: var(--aria-color-white);
}

```

::col2::
```scss
.small {
  font-size: var(--aria-font-size-small);
  height: var(--aria-spacing-x-large);
}
```

```scss
.medium {
  font-size: var(--aria-font-size-medium);
  height: var(--aria-spacing-xx-large);
}
```

::header::
# Exploiting Tokens

<style>
  .slidev-layout pre code { @apply !text-sm; }
</style>

---
layout: media
variant: left
overlay: true
url: <Gif id="WoWm8YzFQJg5i" />
---

# 3. **Documentation**, the Right Way

<style>
  .slidev-layout h1 { @apply text-5xl leading-18 }
</style>

---
layout: media
variant: full
url: ./img/diataxis.png
links:
  - https://diataxis.fr/
---

---

```mdx
import {Chart} from './snowfall.js'
export const year = 2018

# Last year’s snowfall

In {year}, the snowfall was above average.
It was followed by a warm spring which caused
flood conditions in many of the nearby rivers.

<Chart year={year} color="#fcb32c" />
```

::col2::
~~~md
```js script
import '@mdjs/mdjs-story/define';
```

## This is my-card

Here's an example of the component:

```html preview-story
<my-card>
  <h2>Hello world!</h2>
</my-card>
```

```js story
export const JsStory = () => html`
<demo-wc-card>JS Story</demo-wc-card>
`;
```
~~~

::header::
# Advanced Documentation: <br> MDX / Markdown JavaScript

<style>
  .slidev-layout h1 { @apply leading-10 }
  .slidev-layout pre code { @apply !text-sm; }
</style>

---
layout: media
variant: left
url: ./img/playground.gif
links:
  - https://github.com/divriots/dockit-react
---

# Coding Your Doc

- `<Playground />`
- `<PropsTable />`
- Utils: Descriptions, extracts, _etc._

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

<style>
  .slidev-layout pre code { @apply !text-xs; }
</style>

---
layout: media
variant: left
overlay: true
url: <Gif id="l0MYGb1LuZ3n7dRnO" />
---

# 4. **Test** 'em Hard

<style>
  .slidev-layout h1 { @apply text-5xl leading-18 }
</style>

---

# **Unit Test** Your Components

```js
import React, { Component } from 'react';
import { configure, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Snippet from './index';

configure({ adapter: new Adapter() })

it("has a default rendering", () => {
  const data = {
    title: 'This is my H1 title',
    content: 'Here is somme ipsum to test as content.',
    buttonText: 'Click me!'
  }

  const component = shallow( <Snippet { ...data } /> );
  expect(component.find('h1').text()).equal(data.title);
  expect(component.find('p').text()).equal(data.content);
  expect(component.find('button').text()).equal(data.buttonText);
});
```

<style>
  .slidev-layout pre code { @apply !text-sm; }
</style>

---
layout: media
variant: left
url: https://source.unsplash.com/-3wygakaeQc/1920x1080
---

# Test Extensively

- Default values
- Props
- Slots
- Regular testing frameworks: Mochai, Chai, Karma, Jest, Enzyme...

---
layout: section
background: https://source.unsplash.com/Kj2SaNHG-hg/1920x1080
---

# Future-Proof Architecture

---
layout: media
variant: left
overlay: true
url: <Gif id="R9zXHWAHyTjnq" />
---

# 5. Themes and **Variants**

<style>
  .slidev-layout h1 { @apply text-5xl leading-18 }
</style>

---
links:
  - https://codepen.io/argyleink/pen/XWaYyWe
---

```css
:where(html) {
  /* light */
  --brand-light: var(--orange-6);

  --text1-light: var(--gray-8);
  --text2-light: var(--gray-7);

  --surface1-light: var(--gray-2);
  --surface2-light: var(--gray-0);
  --surface3-light: var(--gray-1);
  --surface4-light: var(--gray-3);

  /* grape */
  --brand-grape: var(--grape-5);
  --text1-grape: var(--grape-9);
  --text2-grape: var(--grape-7);
  --surface1-grape: var(--grape-0);
  --surface2-grape: var(--grape-1);
  --surface3-grape: var(--grape-2);
  --surface4-grape: var(--grape-3);
  --surface-shadow-grape: 288 30% 20%;
  --shadow-strength-grape: .02;
}
```

::col2::
```css
:root {
  --brand: var(--brand-light);

  --text1: var(--text1-light);
  --text2: var(--text2-light);

  --surface1: var(--surface1-light);
  --surface2: var(--surface2-light);
  --surface3: var(--surface3-light);
  --surface4: var(--surface4-light);
}
```

```css
[color-scheme="grape"] {
  --brand: var(--brand-grape);

  --text1: var(--text1-grape);
  --text2: var(--text2-grape);

  --surface1: var(--surface1-grape);
  --surface2: var(--surface2-grape);
  --surface3: var(--surface3-grape);
  --surface4: var(--surface4-grape);
}
```

::header::
# Extends the defaults

<style>
  .slidev-layout pre code { @apply !text-xs; }
</style>

---
layout: media
variant: right
url: https://source.unsplash.com/d30sszrW7Vw/1920x1080
---

# Variants Queries

```css
@media (--OSdark) {
  :where(html) {
    color-scheme: dark;

    --brand: var(--pink-4);

    --link: var(--indigo-3);
    --link-visited: var(--grape-3);

    --text-1: var(--gray-1);
    --text-2: var(--gray-2);

    --surface-1: var(--gray-9);
    --surface-2: var(--gray-8);
    --surface-3: var(--gray-7);
    --surface-4: var(--gray-6);
  }
}
```

<style>
  .slidev-layout pre code { @apply !text-sm; }
</style>

---
layout: media
variant: full
url: ./img/livedoc.gif
---

---
layout: media
variant: left
overlay: true
url: <Gif id="OqprHEhrBpmdq" />
---

# 6. Advanced **Composition**

<style>
  .slidev-layout h1 { @apply text-5xl leading-18 }
</style>

---

# Organisms

```jsx
<Transition show={isOpen} as={Fragment}>
  <HDialog as="div" className="fixed inset-0 z-top overflow-y-auto">
    <div className="min-h-screen px-4 text-center">
      <HDialog.Overlay className="fixed inset-0 bg-light-blue-900 opacity-see-through" />
      <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left
                      align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <HDialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
          {title}
        </HDialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">{details}</p>
        </div>
        <div className="mt-4">
          <button onClick={closeModal} className="inline-flex justify-center px-4 py-2 text-sm font-medium
                                                  text-blue-900 bg-blue-100 border border-transparent rounded-md
                                                  hover:bg-blue-200 focus:outline-none focus-visible:ring-2
                                                  focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >{closeLabel}</button>
        </div>
      </div>
    </div>
  </HDialog>
</Transition>
```

<style>
  .slidev-layout pre code { @apply !text-xs; }
</style>

---

```jsx
<button
  type="button"
  className="inline-flex justify-center px-4 py-2
             text-sm font-medium
             text-blue-900 bg-blue-100
             border border-transparent rounded-md
             hover:bg-blue-200
             focus:outline-none focus-visible:ring-2
             focus-visible:ring-offset-2
             focus-visible:ring-blue-500"
  onClick={closeModal}
>
  {closeLabel}
</button>
```

```jsx
<button
  type="button"
  className="btn btn__modal btn__modal--close"
  onClick={closeModal}
>
  {closeLabel}
</button>
```

::col2::
```scss
@layer base {
  .btn {
    @apply inline-flex justify-center px-4 py-2;
    @apply text-sm font-medium;
  }
}

@layer components {
  .btn__modal { @apply border border-transparent rounded-md; }
  .btn__modal--close { @apply text-blue-900 bg-blue-100; }
}

@layer utilities {
  @variants hover {
    .btn__modal--close { @apply bg-blue-200; }
  }
  @variants focus {
    .btn { @apply outline-none; }
  }
  @variants focus-visible {
    .btn { @apply ring-2 ring-offset-2; }
    .btn__modal--close { @apply ring-blue-500; }
  }
}
```

::header::
# Composition Tokens

<style>
  .slidev-layout pre code { @apply !text-xs; }
</style>

---
layout: media
variant: left
overlay: true
url: <Gif id="GdJz3mScUhC5W" />
---

# 7. **Release** and Share

<style>
  .slidev-layout h1 { @apply text-5xl leading-18 }
</style>

---

# **Share** Your Design System

- <mdi-recycle-variant /> Library Mode
- <mdi-package-variant /> Packages export
- <clarity-blocks-group-line /> Mono-repo architecture
- <ph-target/> Multiple target

<style>
  ul {
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
      @apply w-20 h-auto;
      @apply mb-4;
    }
  }
</style>

---
layout: media
variant: full
url: ./img/release.gif
---

---
layout: media
variant: right
url: https://source.unsplash.com/TxP44VIqlA8/1920x1080
---

# Be Ready for **Hydration**

- Templates (and Pages)
- Organisms w/ slots
- E.g.: Cards, Carousels, FAQ entries, etc...

---

# Designers Have ==High-Level Tools==, **Developers Need** the Same

<style>
  .slidev-layout h1 { @apply text-5xl leading-18; }
</style>

---
layout: media
variant: right
url: <Gif id="32dfpYx8kBX1bXSEu8" />
---

# **Shift left** to your Design Sytems

<style>
  .slidev-layout h1 { @apply text-5xl leading-18; }
</style>


---
layout: quote
---

> Developers are users just like **you**.

---
layout: thanks
---
