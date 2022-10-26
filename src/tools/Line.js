import Tool from './Tool'

export default class Line extends Tool {
	constructor(canvas) {
		super(canvas)
		this.listen()
		// this.name = 'Line'
	}

	listen() {
		this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
		this.canvas.onmousedown = this.mouseDownHandler.bind(this)
		this.canvas.onmouseup = this.mouseUpHandler.bind(this)
	}

	mouseDownHandler(e) {
		this.mouseDown = true
		this.currentX = e.pageX - e.target.offsetLeft
		this.currentY = e.pageY - e.target.offsetTop
		this.ctx.beginPath()
		this.ctx.moveTo(this.currentX, this.currentY)
		this.saved = this.canvas.toDataURL()
		this.ctx.moveTo(this.currentX, this.currentY)
		console.log(e)
	}

	mouseMoveHandler(e) {
		if (this.mouseDown) {
			this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
		}
	}

	mouseUpHandler(e) {
		this.mouseDown = false
		console.log(this.onmouseDown)
	}

	draw(x, y) {
		const img = new Image()
		img.src = this.saved
		img.onload = async function () {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
			this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
			this.ctx.beginPath()
			this.ctx.moveTo(this.currentX, this.currentY)
			this.ctx.lineTo(x, y)
			this.ctx.stroke()
			console.log('draw')
			// this.ctx.closePath()
		}.bind(this)
	}
}
