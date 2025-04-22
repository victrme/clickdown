import type { Listener, Options } from './index.ts'
import { onclickdown } from './index.ts'

function onclickdownEvent<T extends Element>(this: T, callback: Listener<T>, options?: Options) {
	onclickdown<T>(this, callback, options)
}

if (Element) {
	Element.prototype['onclickdown'] = onclickdownEvent<Element>
}

if (HTMLElement) {
	HTMLElement.prototype['onclickdown'] = onclickdownEvent<HTMLElement>
}

if (HTMLInputElement) {
	HTMLInputElement.prototype['onclickdown'] = onclickdownEvent<HTMLInputElement>
}
