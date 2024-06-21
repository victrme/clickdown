Element.prototype.onclickdown = clickdown()
HTMLElement.prototype.onclickdown = clickdown()
HTMLInputElement.prototype.onclickdown = clickdown()

function clickdown(element, callback) {
	let isPointerDown = false

	element?.addEventListener('pointerdown', function (event) {
		isPointerDown = true
		callback(event)
	})

	element?.addEventListener('click', function (event) {
		if (isPointerDown === false) callback(event)
		isPointerDown = false
	})
}
