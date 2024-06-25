import type { Listener } from './types'

function clickdown(this: Element, callback: Listener) {
	const self = this

	const isCheckbox = self.tagName === 'INPUT' && self.getAttribute('type') === 'checkbox'
	const isLink = self.tagName === 'A'
	let isFast = false

	self?.addEventListener('pointerdown', downEvent)
	self?.addEventListener('keydown', downEvent)
	self?.addEventListener('click', clickEvent)

	function downEvent(event: Event) {
		const isKeydown = event.type === 'keydown'
		const code = (event as KeyboardEvent)?.code ?? ''

		if (isKeydown && !code.match(/Space|Enter/)) {
			return
		}

		if (isLink && isKeydown && code === 'Space') {
			return
		}

		if (isCheckbox) {
			const checkbox = self as HTMLInputElement
			checkbox.checked = !checkbox.checked
		}

		if (isLink) {
			const link = self as HTMLAnchorElement
			window.location.href = link.href
		}

		isFast = true
		callback(event as PointerEvent | KeyboardEvent, self)
	}

	function clickEvent(event: Event) {
		if (isFast === false) {
			callback(event as MouseEvent, self)
			return
		}

		isFast = false
		event.preventDefault()
	}
}

Element.prototype['onclickdown'] = clickdown
HTMLElement.prototype['onclickdown'] = clickdown
