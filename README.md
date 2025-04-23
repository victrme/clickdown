# clickdown

[jsr](https://jsr.io/@victr/clickdown) - [npmjs](https://www.npmjs.com/package/clickdown) - [demo](https://clickdown.pages.dev/)

Speeds up clicks by combining the speed of pointerdown and the features of click in a single "clickdown" event.

It attaches the `onclickdown` function to Element and HTMLElement prototypes, which means you can use it with `getElementById`, `querySelector`, and others.

## Install

```bash
# With npm on npmjs.com
npm install clickdown

# With Deno on jsr.io
deno add jsr:@victr/clickdown
```

You can use it in two ways: by importing `onclickdown` from `clickdown/mod`, or by augmenting the Element prototype by importing `clickdown`.

```js
import { onclickdown } from 'clickdown/mod'

const input = document.getElementById('my-input')
const listener = () => console.log('Hello world !')

onclickdown(input, listener, {
  propagate: false,
})
```


```js
import 'clickdown'

const input = document.getElementById('my-input')
const listener = () => console.log('Hello world !')

input.onclickdown(listener, {
  propagate: false,
})
```

_jsr does not support augmenting the global type. Only named exports are available:_

```ts
import { onclickdown } from "@victr/clickdown"

onclickdown(document.body, (event) => console.log(event.type))
```
