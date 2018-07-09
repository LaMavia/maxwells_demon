
export class Particle {
	constructor(p, x = 0, y = 0, dx = 2, dy = 0, s = 20) {
    this.p = p
		this.x = x
		this.y = y
		this.dx = dx
		this.dy = dy
		this.s = s
		// this.fs = fs
		const cv = Math.abs(this.dx * this.dy)

		this.color = cv >= 36 
			? [255,0,0] 
			: [0,0,255]
	}

	update(wallPos) {
		const p = this.p
		const cv = Math.abs(this.dx * this.dy)

		this.x += this.dx
		this.y += this.dy

		const [x, y] = wallPos
    const hs = this.s / 2
		
		const cantPass = () => {
			if(Math.abs(this.x - x) < hs && cv < 36) {
				debugger
				return true
			}
		}

    if (this.x + hs < 0 || this.x - hs > p.width || cantPass()) this.dx *= -1
    if (this.y + hs < 0 || this.y - hs > p.height) this.dy *= -1
	}

	draw() {
    const p = this.p
    p.noStroke()
    p.fill(...this.color)
		p.ellipse(this.x, this.y, this.s)
	}
}
