declare global {
	type PointerMouseKeyboard = PointerEvent | MouseEvent | KeyboardEvent

	interface Element {
		/**
		 * Clickdown creates "pointerdown", "keydown", and "click" listeners
		 * to speed up actions. It toggles checkboxes and changes urls on "down".
		 *
		 * When no type is specified, the callback target will be of type Element.
		 *
		 * @param this - An Element
		 * @param callback - This callback passes an event and target as parameters
		 */
		onclickdown: (listener: (event: PointerMouseKeyboard, target: Element) => void) => void
	}

	interface HTMLElement {
		/**
		 * Clickdown creates "pointerdown", "keydown", and "click" listeners
		 * to speed up actions. It toggles checkboxes and changes urls on "down".
		 *
		 * Uses HTMLElement with `getElementById`.
		 *
		 * @param this - An HTMLElement
		 * @param callback - This callback passes an event and target as parameters
		 */
		onclickdown: (listener: (event: PointerMouseKeyboard, target: HTMLElement) => void) => void
	}

	interface HTMLInputElement {
		/**
		 * Clickdown creates "pointerdown", "keydown", and "click" listeners
		 * to speed up actions. It toggles checkboxes and changes urls on "down".
		 *
		 * You can specify the target as an input with `querySelector`, which exposes
		 * .value or .checked methods.
		 *
		 * @param this - An HTMLInputElement
		 * @param callback - This callback passes an event and target as parameters
		 */
		onclickdown: (listener: (event: PointerMouseKeyboard, target: HTMLInputElement) => void) => void
	}
}

export interface Listener<T extends Element> {
	(event: PointerMouseKeyboard, target: T): void
}
