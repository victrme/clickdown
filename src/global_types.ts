import type { Options, PointerMouseKeyboard } from './index.ts'

declare global {
	interface Element {
		/**
		 * Clickdown creates "pointerdown", "keydown", and "click" listeners
		 * to speed up actions. It toggles checkboxes and changes urls on "down".
		 *
		 * When no types are specified, the listener target will be of type Element.
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
		 */
		onclickdown: (
			listener: (event: PointerMouseKeyboard, target: HTMLInputElement) => void,
			options?: Options,
		) => void
	}
}
