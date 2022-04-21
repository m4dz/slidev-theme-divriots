---
theme: ./

permalink: https://m4dz.net/t/painted-app/

author: m4dz
twitter: m4d_z

info: >
  Theming is one of the most common and most difficult tasks when building a consistent UI experience for our end-users. How should we variabilize elements and content? How should we adapt visual styles? What if our users need adapted modes for their disabilities? What if our users enable a Dark variant? Or disable animations? Or…
  There are many use-cases and many questions, only one answer: Design Tokens. Using Tokens, you should be able to embrace any situation without fearing unexpected behaviors. But how should we use those tokens?
  Here's a guide on using Tokens in your apps, from using regular CSS Custom Properties the right way in 2022; to extensively using styling libraries theming features like with Stitches or styled-components.

dates:
  - name: React Global Summit 22
    datetime: 2022-04-21T14:00+0200
    logo: geekle.png
---

<p class="tagline">Like a Newborn UI</p>

# I Want It Painted, App!

---
layout: media
variant: full
url: https://cdn.freebiesupply.com/logos/large/2x/rolling-stones-logo-png-transparent.png
---

---

# The **Web** fundamentals

<ul class="tiles">
  <v-clicks>
    <li><ri-layout-5-line class="inline" /> HTML</li>
    <li><ri-paint-brush-line class="inline" /> CSS</li>
    <li><mdi-code-braces class="inline" /> JS</li>
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
url: <Gif id="xT5LMCDfRuofkp7o08" />
variant: left
class: text-4xl leading-18
---

# The **Components** frameworks

---
layout: media
url: <Gif id="13FrpeVH09Zrb2" />
variant: left
class: text-4xl leading-18
links:
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
---

# CSS <span v-click>Specificity</span> <br> is **hard**

---
layout: media
url: <Gif id="322W3VduHG5elXisAh" />
variant: right
class: text-4xl leading-18
---

# This is not an **arty** talk

---
layout: section
background: https://source.unsplash.com/eo5Hrzyb4D0/1920x1080
---

# Styling for the components era

---
class: text-6xl leading-28
---

# 1. The Old way: <br> **Plain CSS**

---
links:
  - http://getbem.com/
  - https://caniuse.com/css-cascade-layers
class: text-3xl leading-18
---


# CSS is Hard

- Naming conventions
- BEM
- CSS ==@layer==

---
class: text-4xl leading-22
---

# 2. The Easy way: <br> **Pre-styled components** libraries

---
class: text-3xl leading-18
---

# **Same look**, everywhere

- Boostrap
- Material UI
- Ionic
- Chakra UI
- Fluent UI
- ...

---
class: text-4xl leading-22
---

# 3. The Mushin Way: <br> **Styling tools**

---
layout: media
url: <Gif id="yyhJaoPDhCbBu" />
variant: right
class: text-4xl leading-22
---

# **Masterize** your tools

---

# The ==expectations==:

<ul class="tiles">
  <v-clicks>
    <li><ri-paint-brush-line class="inline" /> Themable</li>
    <li><ic-outline-extension class="inline" /> Extensible</li>
    <li><ri-file-settings-line class="inline" /> Advanced Support (Colors, Fonts, MQ...)</li>
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
links:
  - https://www.invisionapp.com/inside-design/design-tokens/
  - https://backlight.dev/mastery/design-tokens
---

# **Design Tokens**

> [...] a pairing of the same code and visual properties, packaged in a format that’s deployable across all platforms

> [...] shared across Design Kits and Component Libraries for a cohesive experience

<style>
  blockquote { @apply my-2 }
</style>

---
links:
  - https://amzn.github.io/style-dictionary/
  - https://www.style-dictionary-play.dev/
---

```json
{
  "color": {
    "base": {
      "gray": {
        "light": {
          "value": "#CCCCCC"
        },
        "dark": {
          "value": "#111111"
        }
      },
      "red": {
        "value": "#FF0000"
      }
    }
  }
}
```

::col2::
```css
:root {
  --sd-color-base-gray-light: #cccccc;
  --sd-color-base-gray-dark: #111111;
  --sd-color-base-red: #ff0000;
}
```

```js
export const ColorBaseGrayLight = "#cccccc";
export const ColorBaseGrayDark = "#111111";
export const ColorBaseRed = "#ff0000";
```

::header::
# Style Dictionary

---
layout: author
---

---
layout: section
background: https://source.unsplash.com/wQLAGv4_OYs/1920x1080
---

# All the ways to paint a &lt;React&gt; app

<style>
  .slidev-layout.section h1 { @apply text-7xl }
</style>

---
class: text-4xl leading-22
---

# 1. **Class-based**

---
links:
  - https://tailwindcss.com
---

# Tailwind

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```jsx
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```

---
links:
  - https://twind.dev/
ratio: 1/3
---

# Twind

- Variants
- Shortcuts
- Grouping
- Overrides

::col2::
```jsx
import { tw } from 'twind'

export default function App() {
  return (
    <h1 className={tw`
      font-bold text(5xl white sm:gray-800 md:pink-700)
    `}>
      Hello world!
    </h1>
  )
}
```

---
links:
  - https://emotion.sh/docs/introduction
---

# Emotion

```jsx
import { css, jsx } from '@emotion/react'
import * as tokens from './sd-tokens.js';

const danger = css`
  color: ${tokens.ColorDangerFg};
`

const base = css`
  background-color: ${tokens.ColorBaseBg};
  color: ${tokens.ColorBaseFg};
`

render(
  <div>
    <div css={[danger, base]}>Hello World!</div>
    <div css={[base, danger]}>This will be an alert</div>
  </div>
)
```

---
class: text-4xl leading-22
---

# 2. **Modules-based**

---

```css
.container{
  width: var(--sd-base-width);
  margin: var(--sd-base-margin) auto;
  padding: var(--sd-base-margin);
}

.heading{
  font-weight: var(--sd-heading-bold);
  background: var(--sd-heading-color-bg);
  color: var(--sd-heading-color-fg);
}
```

::col2::
```jsx
import React from 'react';
import './sd-tokens.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Hello react
      </h1>
    </div>
  );
}
```

::header::
# CSS modules

---
links:
  - https://vanilla-extract.style/
---

```tsx
import { createTheme, style }
  from '@vanilla-extract/css';
import * as tokens
  from './sd-tokens.js'

export const [themeClass, vars] =
createTheme({
  color: { brand: tokens.ColorBase },
  font: { body: tokens.FontBase }
});

export const headerStyle = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  color: tokens.HeadingColorLight,
  padding: tokens.HeadingSpaceBase
});
```

::col2::
```tsx
import { themeClass, headerStyle }
  from './styles.css.ts';

function App() {
  return (
    <section class={themeClass}>
      <h1 class={headerStyle}>
        Hello world!
      </h1>
    </section>
  );
}
```

::header::
# Vanilla-extract

---
class: text-4xl leading-22
---

# 3. **Component-based**

---
links:
  - https://styled-components.com/
---

```js
import * as tokens
  from './sd-tokens.js'
export const Title = styled.h1`
  font-size: ${tokens.FontSizeBase};
  text-align: center;
  color: ${tokens.ColorBase};
`;

export const Wrapper = styled.section`
  padding: ${tokens.SpaceBase};
  background: ${tokens.ColorBaseLight};
`;
```

::col2::
```jsx
import {Title, Wrapper}
  from './my-components.js';

render(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
```

::header::
# styled-components

---
links:
  - https://stitches.dev/
---

# Stitches

```jsx
import { styled } from '@stitches/react';
import * as tokens from './sd-tokens.js';

const Button = styled('button', {
  backgroundColor: tokens.ColorBaseBg,
  borderRadius: tokens.RadiiPill,
  fontSize: tokens.FontSizeBase,
  padding: tokens.SpaceBase,
  '&:hover': {
    backgroundColor: tokens.ColorBaseLight,
  },
});

() => <Button>Button</Button>;
```

---
links:
  - https://theme-ui.com/
  - https://system-ui.com/
---

```js
import type { Theme }
  from 'theme-ui'
import * as tokens
  from './sd-tokens.js'

export const theme: Theme = {
  fonts: {
    body: tokens.FontFamilyBase,
    heading: tokens.FontFamilyHeading,
    monospace: tokens.FontFamilyMono,
  },
  colors: {
    text: tokens.ColorBaseFg,
    background: tokens.ColorBaseBg,
    primary: tokens.ColorPrimary,
  },
}
```

::col2::
```jsx
import { ThemeProvider } from 'theme-ui'
import { theme } from './theme'

export const App = () => (
  <ThemeProvider theme={theme}>
    <h1
      sx={{
        color: 'primary',
        fontFamily: 'heading',
      }}>
      Hello
    </h1>
  </ThemeProvider>
)
```

::header::
# Theme UI

---
layout: section
background: https://source.unsplash.com/yETqkLnhsUI/1920x1080
---

# It's more than "just" styling

---
layout: media
url: https://www.meme-arsenal.com/memes/5a080b9409e019c31d6242af4850e503.jpg
variant: right
class: text-3xl
---

# Using a Theme

- `<ThemeProvider>`
- `<ColorModeProvider>`
- ...

---
layout: media
url: <Gif id="xUOwGnLrHHA1uB4lsQ" />
variant: left
links:
  - https://mgearon.com/css/user-preference-media-features/
class: text-2xl leading-18
---

# User Prefs: <br> let'em **choose**!

- Contrast
- Theme
- Reduced Motion
- Reduced Data

---
class: text-4xl leading-22
---

# Motion as assistive UX: <br> Plug-in a **Motion lib**

---
links:
  - https://www.framer.com
---

# Framer Motion

```jsx
import { motion } from "framer-motion"
import * as tokens fron "./sd-tokens.js"

export const MyComponent = () => (
  <motion.div
    animate={{ scale: tokens.MotionScaleBase }}
    transition={{ duration: tokens.MotionDurationBase }}
  />
)
```

---
links:
  - https://react-spring.io/
---

```js
import { useSpring }
  from "@react-spring/web";
import * as tokens
  from "./sd-tokens.js";

const { animation } = useSpring({
  from: { animation: 0 },
  to: { animation: 1 },
});

export const style = {
  transform: animation.to({
    range: tokens.MotionEaseIn,
    output: tokens.MotionScaleSteps
  })
};
```

::col2::
```jsx
import { animated }
  from "@react-spring/web";
import { style }
  from "./animations.js"

const Header = () => {
  return (
    <animated.div style={style}>
      Hello World!
    </animated.div>
  );
};
```

::header::
# React Spring

---
links:
  - https://remix.run
  - https://nextjs.org/
  - https://www.gatsbyjs.com/
class: text-4xl leading-22
---

# **SSR** Support?

---
class: text-4xl leading-22
---

# **PostCSS** Support?

--- <!-- outro -->
layout: media
url: <Gif id="6uGhT1O4sxpi8" />
variant: right
class: text-4xl leading-22
---

# ==Which== one should I use?

---
layout: media
url: <Gif id="VFHtnsl3xp53a"/>
overlay: true
variant: left
---

# Choose **wisely**

<ul class="tiles">
  <li><ic-outline-generating-tokens class="inline" /> Design Tokens</li>
  <li><ri-paint-brush-line class="inline" /> Theme Config Object</li>
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
layout: qa
---

---
layout: thanks
---
