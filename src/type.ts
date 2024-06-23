declare global {
	interface Element {
		onclickdown: (callback: (e: Event) => void) => void
	}
}

export {}
