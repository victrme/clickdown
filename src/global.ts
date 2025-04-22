import type { Options, PointerMouseKeyboard } from './index.ts'

declare global {
	interface Element {
		/**
		 * Clickdown creates "pointerdown", "keydown", and "click" listeners
		 * to speed up actions. It toggles checkboxes and changes urls on "down".
		 *
		 * When no type is specified, the listener target will be of type Element.
		 *
		 * @param this - An Element
		 * @param listener - This listener passes an event and target as parameters
		 * @param options - Clickdown options
		 */
		onclickdown: (
			listener: (event: PointerMouseKeyboard, target: Element) => void,
			options?: Options,
		) => void
	}

	interface HTMLElement {
		/**
		 * Clickdown creates "pointerdown", "keydown", and "click" listeners
		 * to speed up actions. It toggles checkboxes and changes urls on "down".
		 *
		 * Uses HTMLElement with `getElementById`.
		 *
		 * @param this - An HTMLElement
		 * @param listener - This listener passes an event and target as parameters
		 * @param options - Clickdown options
		 */
		onclickdown: (
			listener: (event: PointerMouseKeyboard, target: HTMLElement) => void,
			options?: Options,
		) => void
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
		 * @param listener - This listener passes an event and target as parameters
		 * @param options - Clickdown options
		 */
		onclickdown: (
			listener: (event: PointerMouseKeyboard, target: HTMLInputElement) => void,
			options?: Options,
		) => void
	}
}
