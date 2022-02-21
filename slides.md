---
theme: ./

colorSchema: dark

info: >
  Here is the slides content description for SEO

themeConfig:
  # Display a permalink on the cover / end slides
  # with an automated QRCode
  permalink: https://domain.tld/t/permalink
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
    - name: ConfName
      logo: /img/confname.svg
      datetime: 2030-01-01T14:00+0200
---

<p class="tagline">Here is the Intro tagline</p>

# Here Is The Complete Title

---
links:
  - http://backlight.dev/
  - https://divriots.com/blog/kaelig-joins-our-advisory-board | Kaelig joins our Advisory board - ‹div›RIOTS
---

# This is the default layout

It can has a regular `<p>` content.

- As well as lists
- With multiple items
- 🧩 Some with regular emojis
- <mdi-light-bullhorn /> Others with inlined icons

`links` prop enable the linkrolls in the footer 👇

---
logo: ../img/confname.svg
---

# The default layout can also contains

<v-clicks>

1. Items appearing on click
2. Or at the next step
3. For an impressive effect 🤯

</v-clicks>

Note: If you add a `logo` prop in layout config with a filepath, then a logo is automatically embedded in the slide.

---

# In any layout, you can add

any kind of content, that can be *in italic form*, in a **bold version**, can be ~~strikethrough parts~~, or ==marked for highlighting==.

You can also have codeblocks:

```ts
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = {...user, ...update}
  saveUser(id, newUser)
}
```

---
layout: section
background: ../img/unsplash/133200.jpg
---

# To Separate Parts, use a section layout

---
layout: media
url: https://source.unsplash.com/collection/94734566/1920x1080
---

# Layout: media helps you to embed content

The content is centered by default
(next slide is `variant: full`)

---
layout: media
variant: full
url: https://source.unsplash.com/collection/94734566/1920x1080
links:
  - https://talks.m4dz.net
---

---
layout: media
url: https://source.unsplash.com/collection/94734566/1920x1080
variant: left
---

# You can have content with lefty media

Then you have you content on the right side

```
with code blocks content
```

Or more regular content

- like
- list
- of items

---
layout: media
url: https://source.unsplash.com/collection/94734566/1920x1080
variant: right
ratio: 2/3
---

# You content can also be righty

And you can also specify a `ratio` for your content

The layout's _props_ are:

```yaml {3-4}
layout: media
url: # local path | url | <Gif /> co  mponent
variant?: right # full | left | right
ratio?: 2/3 # cols ratio,
  # defaults: `1/2` for `left|right` variants
```

---
layout: media
url: <Gif id="3orieJI3IdkKWIsAGA" caption="Web is 30 years old" />
variant: left
overlay: true
---

# You can enable an Overlay

With the `variant: left|right`, add an `overlay: true` layout prop, so the media is duplicated as an overlay on the content.

Oh, and you can pass a `<Gif />` component as `url` as well 💥

---
layout: quote
cite: Tim Berners-Lee
url: https://amazingworkz.com/wp-content/uploads/2019/12/00_13-930x620.jpg
---

> The goal of the Web is to serve humanity. We build it now so that those who come to it later will be able to create things that we cannot ourselves imagine.

You can add `quote` blocks everywhere, but the `quote` layout with a proper `cite` prop enables a view with a portrait.

---

# Built-in support for cols

All layouts come with a build in support for up to 3 cols.

::col-2::

Simply prefix content with the marker `::col-2::` to start the second one.

---

# For a 3 cols view

Do the same

::col-2::

Just start a new col

::col-3::

With the `::col-3::` prefix.

---
class: center
---

# The `center` layout prop class center the contentn horizontally

---
class: text-8xl
---

Important content can be emphasized using the regular tailwind `text-` classes.

---

You can also rely on built-in [Slidev](https://sli.dev) components, like tweets:

<Tweet id="20" />

---

Or YouTube embeded videos:

<!-- <Youtube id="luoMHjh-XcQ" /> -->

---
layout: qa
---

<!-- The `qa` layout is a variant of the `section` one to introduce Q/A sessions. -->
