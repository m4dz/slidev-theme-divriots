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
---

<p class="tagline">Design Systems of a Down</p>

# Steal This Guide!

---
layout: media
variant: right
overlay: true
url: <Gif id="3og0ISJtoddt1HkX9S" />
---

---
links:
  - "https://www.uxpin.com/create-design-system-guide/ | Design Systems: Step-by-Step Guide to Creating Your Own"
  - https://www.invisionapp.com/inside-design/guide-to-design-systems/ | A comprehensive guide to design systems
  - https://xd.adobe.com/ideas/principles/design-systems/ | UX Design Systems | Create & Maintain
  - https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969 | Everything you need to know about Design Systems
---

# We've got plenty of Designer's resources, but not that much dev oriented

---
layout: section
background: ./img/bill-oxford-tR0PPLuN6Pw-unsplash.jpg
---

# Reminder: Atomic Design

---
links:
  - https://www.linkedin.com/posts/georges-gomes-6580541_designsystem-designsystems-webdevelopment-activity-6839102889185607680-dOFX/ | Hey Georges, what is a Design System?
---

# Design System

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

# Devs may not be able to design well, but they know how to name things!

---

# We want to build components that are:

<ul class="tiles">
  <v-clicks>
    <li><clarity-recycle-solid /> reuseable</li>
    <li><clarity-flask-solid />testable</li>
    <li><clarity-atom-solid /> customizable</li>
    <li><clarity-employee-group-solid /> collaborative</li>
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

# Make a shareable definition of your components

---
layout: section
background: ./img/john-baker-UzOKDfoRrDU-unsplash.jpg
---

# Ground Control to the Moon

---
layout: media
variant: full
url: ./img/backlight_tokens_yogi.png
links:
  - https://www.w3.org/community/design-tokens/ | Design Token Community Group
---

---
links:
  - https://amzn.github.io/style-dictionary/
---

# Behind the Hood

- Common Standard Format
- Style Once, Use Everywhere
- Compatible w/ designers' and developers' tools
- Export to multiple platforms (JSON, iOS, Android...)

---
layout: media
variant: full
url:  ./img/backlight_buttons_yogi.png
---

---

# Documenting the Right Way

```mdx
### Button with icon

You can add left and right icons to the Button component using the `leftIcon`
and `rightIcon` props respectively.

> Note: The `leftIcon` and `rightIcon` prop values should be react elements NOT
> strings.

<Playground
scope={{ Stack, Button, EmailIcon, ArrowForwardIcon }}
code={`
<Stack direction="row" spacing={4}>
  <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
    Email
  </Button>
  <Button rightIcon={<ArrowForwardIcon />} colorScheme="teal" variant="outline">
    Call us
  </Button>
</Stack>
`}
/>
```

---

# Create your own toolkit

---
layout: section
background: ./img/jeremy-bezanger-3zDosGbsoW8-unsplash.jpg
---

# Use and reuse

---
layout: media
variant: full
url: ./img/backlight_hero-component_lcd.png
---

---

# Externalize all <mark>common elements</mark>

---
layout: media
variant: left
url: <Gif id="Ss985KhdNqpvW" />
---

# Be Ready for Hydration

- Templates (and Pages)
- Organisms w/ slots
- E.g.: Cards, Carousels, FAQ entries, etc...

---

# Share with your Stack

- Library Mode
- Packages export
- Multiple target
  - Web Component
  - Framework oriented
  - Non-web: iOS, Android...

---

# Designers have high-level tools, working on commons, Developers need the same

---
layout: quote
---

> Developers are users just like you.

---
layout: author
---

---
layout: qa
---

---
layout: thanks
---
