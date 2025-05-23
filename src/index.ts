/**
 * A Pointer, Mouse, or Keyboard event based on which user action triggered it.
 */
export type PointerMouseKeyboard = PointerEvent | MouseEvent | KeyboardEvent

/**
 * The listener event is a Pointer, Mouse, or Keyboard event
 * based on which user action triggered it.
 */
export interface Listener<T extends Element> {
	(event: PointerMouseKeyboard, target: T): void
}

/**
 * Clickdown options
 * @param {boolean} propagate - Apply clickdown to the target's children
 */
export interface Options {
	propagate?: boolean
}

/**
 * Clickdown creates "pointerdown", "keydown", and "click" listeners
 * to speed up actions. It toggles checkboxes and changes urls on "down".
 *
 * When no types are specified, the listener target will be an Element.
 */
export function onclickdown<T extends Element>(target: T | null, callback: Listener<T>, options?: Options): void {
	if (!target) {
		throw new Error('Target is undefined')
	}

	const isCheckbox = target.tagName === 'INPUT' && target.getAttribute('type') === 'checkbox'
	const isLink = target.tagName === 'A'
	let isFast = false

	target?.addEventListener('pointerdown', downEvent)
	target?.addEventListener('keydown', downEvent)
	target?.addEventListener('click', clickEvent)

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
			const details = target as unknown as HTMLDetailsElement
			details.open = !details.open
		}

		if (isCheckbox) {
			const checkbox = target as unknown as HTMLInputElement
			checkbox.checked = !checkbox.checked
		}

		if (isLink) {
			const link = target as unknown as HTMLAnchorElement
			globalThis.window.location.href = link.href
		}

		isFast = true
		callback(event as PointerEvent | KeyboardEvent, target as T)
	}

	function clickEvent(event: Event) {
		const path = event.composedPath()
		const onChild = path[0] !== target

		if (onChild && options?.propagate === false) {
			return
		}

		if (isFast === false) {
			callback(event as MouseEvent, target as T)
			return
		}

		isFast = false
		event.preventDefault()
	}
}
