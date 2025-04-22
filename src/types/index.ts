export type PointerMouseKeyboard = PointerEvent | MouseEvent | KeyboardEvent

export interface Listener<T extends Element> {
	(event: PointerMouseKeyboard, target: T): void
}

/**
 * @param {boolean} [propagate] Apply clickdown to the target's children
 */
export interface Options {
	propagate?: boolean
}
