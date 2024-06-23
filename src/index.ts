type Callback = (e: Event) => void

function clickdown(callback: Callback) {
	const self = this as Element
	const isCheckbox = self.tagName === 'INPUT' && self.getAttribute('type') === 'checkbox'
	const isLink = self.tagName === 'A'
	let isFast = false

	self?.addEventListener('pointerdown', downEvent)
	self?.addEventListener('keydown', downEvent)

	self?.addEventListener('click', function (event: Event) {
		if (isFast === false) {
			return callback(event)
		}

		isFast = false
		event.preventDefault()
	})

	function downEvent(event: Event) {
		if (isCheckbox) {
			const checkbox = self as HTMLInputElement
			checkbox.checked = !checkbox.checked
		}

		if (isLink) {
			const link = self as HTMLAnchorElement
			window.location.href = link.href
		}

		isFast = true
		callback(event)
	}
}

Element.prototype['onclickdown'] = clickdown
