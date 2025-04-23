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
export function onclickdown<T extends Element>(target: T | null, callback: Listener<T>, options?: Options): void
