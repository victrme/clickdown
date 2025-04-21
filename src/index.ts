import type { Listener, Options } from './types.ts'

function clickdown<T extends Element>(this: T, callback: Listener<T>, options?: Options) {
	const self = this

	const isCheckbox = self.tagName === 'INPUT' && self.getAttribute('type') === 'checkbox'
	const isLink = self.tagName === 'A'
	let isFast = false

	self?.addEventListener('pointerdown', downEvent)
	self?.addEventListener('keydown', downEvent)
	self?.addEventListener('click', clickEvent)

	function downEvent(event: Event) {
		const isKeydown = event.type === 'keydown'
		const code = (event as KeyboardEvent)?.code ?? ''
		const target = event.target as Element
		const tagName = target.tagName ?? ''

		if (isKeydown && !code.match(/Space|Enter/)) {
			return
		}

		if (isLink && isKeydown && code === 'Space') {
			return
		}

		if (tagName === 'SUMMARY') {
			const details = self as unknown as HTMLDetailsElement
			details.open = !details.open
		}

		if (isCheckbox) {
			const checkbox = self as unknown as HTMLInputElement
			checkbox.checked = !checkbox.checked
		}

		if (isLink) {
			const link = self as unknown as HTMLAnchorElement
			globalThis.window.location.href = link.href
		}

		isFast = true
		callback(event as PointerEvent | KeyboardEvent, self)
	}

	function clickEvent(event: Event) {
		const path = event.composedPath()
		const onChild = path[0] !== self

		if (onChild && options?.propagate === false) {
			return
		}

		if (isFast === false) {
			callback(event as MouseEvent, self)
			return
		}

		isFast = false
		event.preventDefault()
	}
}

Element.prototype['onclickdown'] = clickdown
HTMLElement.prototype['onclickdown'] = clickdown<HTMLElement>
HTMLInputElement.prototype['onclickdown'] = clickdown<HTMLInputElement>
