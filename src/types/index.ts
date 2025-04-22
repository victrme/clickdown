export type PointerMouseKeyboard = PointerEvent | MouseEvent | KeyboardEvent

export interface Listener<T extends Element> {
	(event: PointerMouseKeyboard, target: T): void
}

export interface Options {
	propagate?: boolean
}
