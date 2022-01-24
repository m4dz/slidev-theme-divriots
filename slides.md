---
theme: ./

permalink: https://m4dz.net/t/wasm

author: m4dz
twitter: m4d_z

info: >
  WebAssembly is a new langage embedded into the Web Browser, close to the
  venerable assembly, able to improve and fasterize computational tasks.
  Power the Web at lightning speed!

dates:
  - name: DevFest Paris 2019
    place: 'Paris, FR'
    datetime: 2019-02-08T16:30:00
    url: 'https://devfest.gdgparis.com/schedule/2018-02-08?sessionId=106'
  - name: JSDay.it
    place: 'Verona, IT'
    datetime: 2019-05-09T10:00:00
    url: 'https://2019.jsday.it/talks.html#matthias-dugue'
  - name: Grill.JS
    place: 'Wrocław, PL'
    datetime: 2019-09-08T08:00:00
    url: 'https://grilljs.com/#agenda'
  - name: JSDay IE
    place: 'Dublin, IE'
    datetime: 2019-09-20T14:30:00
    url: 'https://www.jsday.org/speakers'
    xtras: '#JSDayIE2019'
    logo: jsdayie.png
    alt: en/short
  - name: Paris Web
    place: 'Paris, FR'
    datetime: 2019-10-12T07:30:00
    url: 'https://www.paris-web.fr/2019/ateliers/webassembly-un-etat-des-lieux.php'
    logo: paris-web.png
    alt: fr/workshop
  - name: Snowcamp
    place: 'Grenoble, FR'
    datetime: 2020-01-22T13:00:00
    url: 'https://sched.co/XoNZ'
    logo: snowcamp.png
    qrcode: 'https://alws.link/snowcamp2020'
  - name: Frontcon
    place: 'Riga, LV'
    datetime: 2020-08-13T09:20:00
    url: https://2020.frontcon.com/sessions/a-state-of-webassembly-the-browser-is-now-a-real-vm/
    logo: frontcon.png
    alt: en/short
  - name: Codeurs en Seine
    place: Online
    datetime: 2020-11-05T20:00:00
    url: 'https://www.codeursenseine.com/2020/programme'
    logo: codeurs-en-seine-logo-blanc.svg
    alt: fr
  - name: ESGI Meetup
    datetime: 2022-01-24T19:30:00+01:00
    place: Online
    url: https://www.meetup.com/fr-FR/Meetup-Paris-Ecole-Superieur-du-Genie-Informatique/events/283083407/
    alt: fr

---

<p class="tagline">A Taste of</p>

# WebAssembly

---
logo: ./img/VaadinTimeBackward.svg
class: text-xl
---

# Back In History

- 2001 <span v-click> - Prototype, Scriptaculo·us, Mootools</span>
- 2005 <span v-click> - jQuery</span>
- 2010 <span v-click> - SPA / Backbone</span>
- 2012 <span v-click> - Angular</span>
- 2015 <span v-click> - virtual-dom, React, Vue.js</span>
- 2018 <span v-click> - PWA</span>
- *2022* <span v-click> - How is your RAM today?</span> <span v-click>Good? 🤮</span>

---
class: text-4xl leading-22
---

# We are developping (Progressive Web) **Apps**!

---
layout: media
url: <Gif id="TH1doTnuEWR2Ntdnyy"/>
variant: left
class: text-2xl
---

# We need

- ==Secured== Environment
- ==Faster== Execution
- ==Shared== Domains Logics

---
layout: media
variant: full
background: "#fff"
url: ./img/web-assembly-logo.svg
---

---
layout: section
background: https://source.unsplash.com/6ywyo2qtaZ8/1920x1080
  # Photo by Eugenio Mazzone on Unsplash
---

# Webassembly: Origins

---
layout: media
url: <Gif id="QU1pSfyEynvgY" />
variant: left
overlay: true
class: text-3xl leading-18
---

# An Experiment: **ASM.js**

---
class: text-4xl
---

# Time to **Compile**!

---
class: text-3xl
---

# Emscripten

- Toolchain
- Compile from C/C++
- Uses LLVM

---
layout: media
url: <Gif id="p7xQlayxs6Uda"/>
variant: right
class: text-2xl leading-18
---

# What if we could compile ==all== of our **apps' logics**?

---
layout: quote
---

> WebAssembly is a binary instruction format for a stack-based virtual machine.
>
> Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.

---

# WASM Binary Format

```wasm
0200 20 00
0202 42 00
0204 51
0205 04 7e
0207 42 01
020A 05
020B 20 00
020D 20 00
0210 42 01
0211 7d
0212 10 00
0214 7e
0217 0b
```

---
layout: media
url: <Gif id="pPhyAv5t9V8djyRFJH"/>
variant: left
class: text-3xl leading-20
---

# Is this a... **language**?

---

# WASM Text Format

```wasm
get_local 0
i64.const 0
i64.eq
if i64
    i64.const 1
else
    get_local 0
    get_local 0
    i64.const 1
    i64.sub
    call 0
    i64.mul
end
```

---
class: text-3xl
---

# 🍀 Static Types

- 2 Integers
- 2 Floats

<small>(in reality, a bit more, but all derived from _Numbers_)</small>

---
layout: media
url: <Gif id="lrc1TZHRYxj7lGM3Vg"/>
variant: left
overlay: true
class: text-3xl leading-18
---

# Problem: I need **more** than numbers!

---
class: text-6xl
---

# **Rust** Do it!

---

# ~~WASM~~ Rust _Hello World_, Web version

```rust
pub fn greet(name: &str) {
    alert(&format!("Hello {}!", name));
}
```

---

# Why Rust?

<v-clicks>

- C++, thanks, but I only have ==one brain==
- No data-race by design
- Static types
- Iterators
- Excellent Memory Management
- Community 😍
- Toolchain (Rustup, Cargo, Rustc...)
- And much more... 👍

</v-clicks>

---
layout: section
background: https://source.unsplash.com/OFEvgVfr6iU/1920x1080
---

# **Build** The Web

---
class: text-3xl
---

# WASM **Modules**

- Works like a black box
- Declares Types and Functions
- Exposes an API

---
links:
  - https://webassembly.org/docs/security/
  - https://bytecodealliance.org/
  - https://www.forcepoint.com/blog/x-labs/webassembly-potentials-and-pitfalls
  - https://i.blackhat.com/us-18/Thu-August-9/us-18-Lukasiewicz-WebAssembly-A-New-World-of-Native_Exploits-On-The-Web-wp.pdf
---

# The **Security** Model

- Sandboxed Environment per Module
- Deterministic Execution
- Control-Flow Integrity
- Type Signature check for Indirect Calls
- Memory Safety

---

# Browser-side: Instantiate

```js
let importObject = {
    imports: {
        alert: window.alert
    }
}

WebAssembly
    .instantiateStreaming(fetch('my-module.wasm'), importObject)
    .then(mod => mod.instance.exports.greet('Hello World'))
```

---
logo: ./img/MdiReminder.svg
class: text-3xl
---

# I need **more** than numbers!

---
layout: media
url: <Gif id="l4lIagQE7agvu" />
variant: left
overlay: true
class: text-3xl leading-18
---

# I need ==Strings== 💩TF-8

---
class: text-4xl leading-22
---

# A number could be… <br><span v-click>a **memory** pointer!</span>

---

# Linear Memory

```js
const pointer = 0

const LM = new WebAssembly.Memory({ initial: 1 })
const sharedMem = new Uint8Array(LM.buffer)

const str = "Hello World"

[].forEach.call(
  btoa(str),
  (char, idx) => sharedMem[>pointer + idx] = char.charCodeAt(0)
)
// Uint8Array(65536) [ 83, 71, 86, 115, 98, 71, 56, 103, 86, 50, … ]
```

---
class: text-xl
---

# wasm-pack

> 📦✨ your favorite rust -> wasm workflow tool!

---

# Easy to use

```sh
$ cd my-module
$ wasm-pack build --target web --release
```

::col2::

# Ready to publish

```sh
$ tree
├── bridge.js
├── Cargo.toml
├── pkg
│   ├── my-module_bg.d.ts
│   ├── my-module_bg.wasm
│   ├── my-module.d.ts
│   ├── my-module.js
│   ├── package.json
│   └── snippets
│       └── my-module-91b01578bc1ce6c0
│           └── bridge.js
└── src
    └── lib.rs
```

---
links:
  - https://rustwasm.github.io/docs/wasm-bindgen/
class: text-xl
---

# wasm-bindgen

> Facilitating high-level interactions between wasm modules and JavaScript.

---
class: text-3xl
---

- High-level library
- Exposes:
  - Web sys (DOM, `window`, `document`, `fetch`,  `canvas`...)
  - JS sys (passing values, types, boxing...)
  - Promises
- Generate TypeScript bindings

<style>code { @apply @text-2xl }</style>

---

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen(module = "/bindings.js")]
extern "C" {
    fn updateState(state: &JsValue);
}

pub fn greet(name: &str) {
    alert(&format!("Hello {}!", name));

    let state = State { name }
    updateState(JsValue::from_serde(&state).unwrap());
}
```

---
class: text-xl
links:
  - https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html
---

# Embind

> Embind is used to bind C++ functions and classes to JavaScript, so that the compiled code can be used in a natural way by JavaScript.

---
layout: section
background: https://source.unsplash.com/0gkw_9fy0eQ/1920x1080
# Photo by Patrick Fore on Unsplash
---

# Production Ready

---
class: text-center text-2xl
---

# Production-**Proof**

- ![](/img/firefox.svg)
- ![](/img/chrome.svg)
- ![](/img/safari.svg)
- ![](/img/edge.svg)

<style>
ul {
  @apply list-none grid grid-cols-4 gap-8 mx-20 my-8
}
</style>

---
layout: media
url: <Gif id="6uGhT1O4sxpi8" />
variant: right
class: text-3xl leading-20
---

# WebAssembly, neither **Web** nor **Assembly**

<small>(c) Bnjbvr</small>

---
class: leading-12
---

# Coming from JS? Try **AssemblyScript**.

> AssemblyScript compiles a strict variant of TypeScript to WebAssembly using Binaryen.

::col2::

```ts
export function fib(n: i32): i32 {
  var a = 0, b = 1
  if (n > 0) {
    while (--n) {
      let t = a + b
      a = b
      b = t
    }
    return b
  }
  return a
}
```

---

# Coming from OS language? Check **LLVM support**.

- C / C++
- Rust
- C#
- GO + TinyGO + syscall/js
- Java

---
links:
  - https://github.com/GoogleChromeLabs/wasm-feature-detect
class: text-2xl
---

# Experimental

- Multi-threading
- JS Modules exchange/Garbage Collector
- Portability/Runtime/IoT

---
layout: media
url: <Gif id="pwDim0n9W8DUW205MF" />
variant: left
overlay: true
class: text-2xl leading-18
links:
  - https://webassembly.org/
---

# Open Standard: <br>Build The **Ecosystem**!

---
class: text-3xl
links:
  - https://webassembly.studio/
  - https://github.com/yewstack/yew
  - https://blazor.net/
---

# Know The **Web**!

- HTML/DOM <span v-click>→ Interfaces</span>
- CSS <span v-click>→ Layouts/Style</span>
- JS <span v-click>→ UI Thread</span>
- <span v-click>WASM → Background Processes</span>

---
layout: author
---

---
layout: qa
---

---
layout: thanks
---
