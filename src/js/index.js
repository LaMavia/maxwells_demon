import p5 from "./p5.min"
import { Particle } from "./Particle"
/**
 * @type Particle[]
 */
function s(p) {
	const particles = []
	p.setup = function() {
		document.body.innerHTML = ""
		p.createCanvas(window.innerWidth, window.innerHeight)
		for (let i = 0; i < 20; i++) {
			const x = p.random(p.width)
			const y = p.random(p.height)
			const [dx, dy] = Math.random() > 0.5 ? [6, 6] : [3, 3]

			particles.push(new Particle(p, x, y, dx, dy, 30))
		}
	}

	p.draw = function() {
		p.background(21)
		p.stroke(255)
		p.rect(p.width / 2, 0, 1, p.height)
		particles.forEach(particle => {
			particle.update([p.width / 2, p.height / 2])
			particle.draw()
		})
	}
}
const mys = new p5(s, document.body)