declare global {
	interface Element {
		onclickdown: (listener: Listener) => void
	}

	interface HTMLElement {
		onclickdown: (listener: Listener) => void
	}
}

export type Listener = (event: PointerEvent | MouseEvent | KeyboardEvent, target: Element) => void
