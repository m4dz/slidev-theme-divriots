---
theme: ./

info: >
  You're offering a fantastic brand new service, and it'll revolutionize your customers' world! Because it's smart, it delivers an API-first solution wrapped in an edge architecture. And because you're smart, you're offering to your end-users several SDKs to let them use those APIs at their full potential: PHP, Java, Ruby, Go, Python, JavaScript… Wait, JavaScript?

  When entering the world of frontend architecture in an API-first world, we should take time to answer this simple question: SDK or Web Components? The frontend world comes with a UI-first paradigm, so should we switch our mindset?

  On the other hand, Web Components now have a mature ecosystem where you can build advanced UI elements that already embed all the logic they need.

  API-first backend only requires HTTP streams, and Web Components embed the required network primitives. Should we distribute a JS SDK or a library of Web Components for our service? Here's the match between the two giants! SDKs vs Web Components: Place Your Bets.

themeConfig:
  permalink: https://m4dz.net/t/sdk-vs-wc/

  author: m4dz
  twitter: m4d_z

  dates:
    - name: React Finland
      datetime: 2022-09-16T11:00:00+03:00
      permalink: https://react-finland.fi/speakers/#-sdks-vs-web-components-place-your-bets
      logo: ./img/react-finland.svg
    - name: JavaScript Global Summit'22
      datetime: 2022-09-28T11:30:00+02:00
      permalink: https://geekle.us/schedule/js
    - name: Techorama.nl 2022
      datetime: 2022-10-11T15:00:00+02:00
      permalink: https://www.techorama.nl/agenda/session/sdks-vs-web-components-place-your-bets/
---

<p class="tagline">Place Your Bets!</p>

# SDKs vs Web Components

---

# What's an **API**?

<ul class="tiles">
  <v-clicks>
    <li><fluent:code-16-filled class="inline" /> Programming Interface</li>
    <li><icon-park-outline:communication class="inline" /> Communication</li>
    <li><icon-park-outline:hold-interface class="inline" /> Protocols</li>
    <li><fluent:remote-16-filled class="inline" /> Remote control</li>
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
layout: media
url: <Gif id="fxIk8gAC4fHir5s8Su">
variant: right
overlay: true
class: text-2xl leading-18
---

# What's an API-**first** backend/service?

---
layout: media
url: <Gif id="xT5LMMYbPOGNyKnCtW">
variant: left
overlay: true
class: leading-12
---

# Different ==Types== of Remote APIs

(but mainly based-on HTTP Requests)

- SOAP
- RPC
- Websocket
- REST
- GraphQL

---
class: text-4xl
---

# You said, ==SDK==?

---
layout: author
---

<!-- time: 3' -->

---
layout: section
background: https://source.unsplash.com/pHw08h_EvO4/1920x1080
---

# A Components Philosophy

---
class: text-2xl leading-18
links:
  - https://itnext.io/a-guide-to-component-driven-development-cdd-1516f65d8b55
---

# Component ==Driven== Development

- Micro-services
- Decoupled
- Incremental Upgrade
- Flexibility-driven

---
layout: media
variant: left
url: https://source.unsplash.com/9PkcuHSzzsw/1920x1080
class: text-2xl leading-18
---

# Why a **CDD** approach?

<v-clicks>

- Faster development
- Simpler maintenance
- ==Better reusability==
- Better TDD
- ==Shorter learning curves==
- Better modeling of the system

</v-clicks>

---
layout: media
overlay: true
variant: left
url: ./img/what-is-a-design-system.png
class: text-3xl leading-18
links:
  - https://backlight.dev/mastery/what-is-a-design-system
---

# Thinking as a ==Design System==

---
layout: media
url: <Gif id="AiEzloQTXzAeid9xQR">
variant: right
overlay: true
class: text-3xl leading-18
---

# You said, ==Web Component==?

---
class: text-2xl leading-18
---

# Web Components are ==agnostic==

<ul class="tiles">
  <v-clicks>
    <li><mdi:domino-mask class="inline" /> Shadow DOM</li>
    <li><mdi:atom-variant class="inline" /> Attributes/Props</li>
    <li><ic:outline-timer class="inline" /> Events' Loops</li>
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
layout: section
background: https://source.unsplash.com/Q1p7bh3SHj8/1920x1080
---

# An API-Driven Edge World

---
class: text-4xl leading-24
---

# ==Frontend== Design<br> <span v-click>**UI**-first/**UI**-Oriented</span>

<!--
- lambda
- function as a service
-->

---
layout: media
url: <Gif id="l2Sq29cFXoF80ADlK">
variant: right
overlay: true
class: text-5xl leading-24
---

# <span v-click>Visual</span> <mark v-click>Feedback</mark>

---
class: text-2xl leading-18
---

# Web Components ==interface==

<ul class="tiles">
  <v-clicks>
    <li><mdi:atom-variant class="inline" /> Attributes/Props <br> → IN</li>
    <li><ic:round-loop class="inline" /> Events <br> → OUT</li>
    <li><mdi:package-variant class="inline" /> Internal logic</li>
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
url: <Gif id="d0NnEG1WnnXqg">
overlay: true
variant: left
class: text-4xl leading-24
---

# It'a basically <span v-click>an ==API== definition!</span>

<!--
visual representation of an API
-->

---
layout: media
url: ./img/api.video_home.png
---

# ==api.video== example

<!-- time: 8' -->

---
layout: media
variant: full
url: ./img/api.video_catalog.png
---

---
layout: media
url: ./img/api.video_getting_started.png
---

# **1.** Uploading

---
layout: media
url: ./img/api.video_player_sdk.png
---

# **2.** Playing

---
layout: section
background: https://source.unsplash.com/4icpQA-5eJY/1920x1080
---

# Web Components Wrapping

---

# Let's mimic it as a ==component API==

<ul class="tiles">
  <v-clicks>
    <li><ic:round-vpn-key class="inline" /> Prop: Token</li>
    <li><ph:coins class="inline" /> State: Counter/Progress</li>
    <li><ph:clock-counter-clockwise-bold class="inline" /> Events Lifecycle</li>
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
url: ./img/all-the-ways.png
links:
  - https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/
---

# Which ==Framework==...

---

#  ... and Why Stencil?

```tsx
/* @jsx h */
import { h, Component } from "@stencil/core";

@Component({
  tag: "av-uploader",
  styleUrl: "index.css",
  shadow: true,
})
export class ApivideoUploader {

}
```

---

# Properties


```tsx {all|5-7|9-12|15}
import { Prop, State } from "@stencil/core";

...
export class ApivideoUploader {
  @Prop() token: string = 'to1R5LOYV0091XN3GQva27OS';
  @Prop() chunkSize: number = 10;
  @Prop() sandbox: boolean = false;

  @State() counter: number = 0;
  @State() chunkProgress: number;
  @State() totalProgress: number;
  @State() status: string = STATES.WAIT;

  connectedCallback() {
    this.url = `https://${this.sandbox? 'sandbox' : 'ws'}.api.video/upload?token=${this.token}`;
    this.limit = this.chunkSize * 1000000; // chunkSize in MB
  }
}
```

---

# Upload

```tsx {all|10-12|3-7|6}
export class ApivideoUploader {
  ...
  upload(event:any) {
    this.file: VideoFile = { ... }
    this.chunks = Math.ceil(this.size / this.limit);
    this.createChunk(0);
  }
  render() {
    return (<Host>
      {this.status == STATES.WAIT &&
        <input type="file" onChange={(event) => this.upload(event)} />
      }
      {this.status == STATES.PROGRESS &&
        ...
      }
    </Host>);
  }
}
```

---

# Internals

```tsx {4-9|8|11-15|12}
export class ApivideoUploader {
  ...

  createChunk(start:number, id?:string) {
    this.status = STATES.PROGRESS;
    this.counter++;
    ...
    this.uploadChunk(form, start, end);
  }

  uploadChunk(form:any, start:number, end:number) {
    this.req = new XMLHttpRequest();
    ...
    this.req.send(form);
  }
}
```

---

# Lifecycle

```tsx
import { Event, EventEmitter } from '@stencil/core';

...
export class ApivideoUploader {

  @Event({
    cancelable: true
  }) uploadStarted: EventEmitter<VideoFile>;

  @Event({
    cancelable: true
  }) uploadInProgress: EventEmitter<VideoFile>;

  @Event() uploadCancelled: EventEmitter<VideoFile>;

  @Event() uploadCompleted: EventEmitter<VideoFile>;
}
```

---

# Events

```tsx {14-17|5|7|9,11}
export class ApivideoUploader {
  ...
  uploadChunk(form:any, start:number, end:number) {
    ...
    this.req.onload = (event) => {
      start += this.limit;
      if (start < this.file.size)
        this.createChunk(start);
        this.uploadInProgress.emit(this.file)
      else
        this.uploadCompleted.emit(this.file)
  }

  upload(event: any) {
    ...
    this.uploadStarted.emit(this.file)
  }
}
```

---
links:
  - https://studio.webcomponents.dev/edit/XIxGWDrNYzZCqFGZkzEr/
---

<iframe
  src="https://studio.webcomponents.dev/edit/XIxGWDrNYzZCqFGZkzEr/src/index.tsx?embed=1&sv=1&pm=1"
  title="apivideo-uploader"
  style="border:0; border-radius: 4px; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin allow-popups">
</iframe>

<style>
  iframe {
    width: 100%;
    height: 500px;
  }
</style>

---
layout: media
url: <Gif id="l2Je04QBGjaVCuVs4">
variant: left
overlay: true
class: text-2xl leading-18
---

# Create a **reactive** environment

---
layout: media
variant: right
ratio: 2/3
url: https://source.unsplash.com/w423NnHFjFg/1920x1080
---

# E.g. ==Hooks==

<v-clicks>

1. Emits Events
2. Hooks: <br>
   ```tsx
   document
     .querySelector('av-uploader')
     .addEventListener('uploadCompleted', upCompleteHandler)
   ```
3. Update your State Machine: <br>
   ```tsx
   ...
   const [isUploaded, setIsUploaded] = useState(false)

   const upCompleteHandler = (VideoFile: file) => {
      setIsUploaded = file.isUploaded
   }
   ```

</v-clicks>

<!-- time: 18' -->

---

# Before

```html
<script src="https://unpkg.com/@api.video/video-uploader" defer></script>
<form><input type="file" id="input" onchange="uploadFile(this.files)"></form>
<script type="text/javascript">
    function uploadFile(files) {
      const uploader = new VideoUploader({
        file: files[0],
        uploadToken: "YOUR_DELEGATED_TOKEN",
        chunkSize: 1024*1024*10, // 10MB
      });
      uploader.upload()
        .then((video) => console.log(video))
        .catch((error) => console.log(error.status, error.message));
      uploader.onProgress((event) => {
        console.log(`uploaded bytes: ${event.uploadedBytes}.`);
        console.log(`total size: ${event.totalBytes}.`);
      });
    }
</script>
```

---
layout: media
variant: left
url: ./img/upload.gif
overlay: true
links:
  - https://dribbble.com/shots/3520651-File-upload-icon-animation-Daily-UI-031
---

# After

```html
<av-uploader
  token="YOUR_DELEGATED_TOKEN"
/>
```

---

# **Control** the API with attributes

```tsx {all|5,7,8|10}
import { Prop, Watch } from '@stencil/core';

...
export class ApivideoUploader {
  @Prop() cancelled: boolean;

  @Watch('cancelled')
  watchCancelledPropHandler(new: boolean, old: boolean) {
    this.req.abort()
    this.uploadCancelled.emit(this.file)
  }
}
```

```html {none|1}
<av-uploader token="YOUR_DELEGATED_TOKEN" cancelled />
```

---
class: text-3xl leading-22
links:
  - https://backlight.dev/sessions/coding-design-systems-the-clever-cloud-web-components-collection-with-hubert-sablonniere
---

# Components ==as a Service==

<ul class="tiles">
  <v-clicks>
    <li><mdi:package-variant-closed class="inline" /> Packages Registry</li>
    <li><mdi:server-network class="inline" /> CDN</li>
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
layout: media
url: <Gif id="OI8TsOa9KFAPu">
variant: left
class: text-4xl leading-24
---

# What about **my** Design System!?

---

```css {all|2-6}
:host {
  --c-bg: var(--background-color, #222);
  --c-fg: var(--color, #e3e3e3);
  --c-bd: var(--border-color, var(--c-fg));
  --ff: var(--font-family, sans-serif);
  --fs: var(--font-size, 1rem);
}
.info {
  font-family: var(--fs) var(--ff);
}
.upload-btn {
  background: var(--c-bg);
  color: var(--c-fg)
}
.upload-bar {
  border: 0.25rem solid var(--c-bd);
}
```

::header::
# Customization

::col2::
```tsx {all|4-5}
<>
  <av-uploader
    style="
      --background-color: orange;
      --color: #222
    "
    token="..."
  />
</>
```

---
layout: media
variant: left
url: https://source.unsplash.com/KOUvMTHK64I/640x969
overlay: true
class: text-2xl leading-18
---

# Your Web **Component** <span v-click>is an ==abstraction layer==</span >

<!--
changes in the api doesn't have to be reflected in the WC
-->

---
class: text-4xl
---

# <mark v-click>SDKs</mark> <span v-click>or ==Web Components==</span>?

<!-- time: 23' -->

---
class: text-4xl leading-24
---

# For the frontend: <br> <mark v-click>Web Components</mark>
<p v-click>(+ fallback for edge-cases)</p>

---
class: text-4xl leading-24
---


# For the backend: SDKs

---
layout: thanks
---
