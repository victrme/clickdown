declare global {
	interface Element {
		onclickdown: (listener: Listener<Element>) => void
	}

	interface HTMLElement {
		onclickdown: (listener: Listener<HTMLElement>) => void
	}

	interface HTMLInputElement {
		onclickdown: (listener: Listener<HTMLInputElement>) => void
	}
}

export interface Listener<T extends Element> {
	(event: PointerEvent | MouseEvent | KeyboardEvent, target: T): void
}
