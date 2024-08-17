# clickdown

[npmjs](https://www.npmjs.com/package/clickdown) - [demo](https://clickdown.pages.dev/)

Speeds up clicks by combining the speed of pointerdown and the features of click in a single "clickdown" event.

It attaches the `onclickdown` function to Element and HTMLElement prototypes, which means you can use it with `getElementById`, `querySelector`, and others.

Like this:

```js
import 'clickdown'

document.getElementById('my-input').onclickdown(function (event, target) {
  console.log(event) // PointerEvent
  console.log(target) // <input type="..." />
})
```

With options:

```js
import 'clickdown'

const input = document.getElementById('my-input')
const listener = () => console.log('Hello world !')

input.onclickdown(listener, {
  propagate: false,
})
```
