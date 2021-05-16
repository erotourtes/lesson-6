//import brain from 'brain.js'
//import * as brain from "./brain.js"
//const brain = require("brain.js")
class SetUp {
	radius = 0
	mouseDown = false
	pix = 30

	canvas = document.querySelector("#cs")
	ctx = this.canvas.getContext("2d")
	img = null
	arraData = []
	radiusValue = 0

	net = null
	trainData = []

	drawLine(x1, y1, x2, y2, color = 'gray') {
		this.ctx.beginPath()
		this.ctx.lineWidth = 1
		this.ctx.strokeStyle = 'red'
		this.ctx.moveTo(x1, y1)
		this.ctx.lineTo(x2, y2)
		this.ctx.stroke()
		this.ctx.beginPath()
		this.ctx.lineWidth = this.radius * 2
		this.ctx.strokeStyle = 'black'
	}
	drawCell = function(x, y, w, h) {
		this.ctx.fillStyle = 'blue';
		this.ctx.strokeStyle = 'blue';
		this.ctx.lineJoin = 'miter';
		this.ctx.lineWidth = 1;
		this.ctx.rect(x, y, w, h);
		this.ctx.fill();
	}
	drawGrid() {
		const w = this.canvas.width
		const h = this.canvas.height

		const xS = w / this.pix
		const yS = h / this.pix

		for(let x = 0; x < w; x+= xS){
			this.drawLine(x, 0, x, h)
		} 
		for(let x = 0; x < h; x+= yS){
			this.drawLine(0, x, w, x)
		} 
	}



	printArray(array) {
		let s = ""
		for(let i = 0; i < array.length; i++){
			s += array[i] + " "
			if ( (i + 1) % this.pix == 0) {
				console.log(s)
				s = " "
			}
		}
	}


	setUp () {
		let canvas = this.canvas
		canvas.width = (window.innerWidth - window.innerWidth % this.pix) / 2
		canvas.height = canvas.width
		canvas.style.border = "2px solid orange"
		this.radius = window.innerWidth / 100 * 0.3
		this.ctx.lineWidth = this.radius * 2
		

		//	this.drawGrid()
	}
	draw() {
		window.onresize = ()=>this.setUp()
		this.setUp()

		this.canvas.addEventListener("mousedown", ()=> this.mouseDown = true)
		this.canvas.addEventListener("mouseup", ()=> {
			this.mouseDown = false
			this.ctx.beginPath() //split lines after ckicking
		})
		this.canvas.addEventListener("mouseout", ()=> this.ctx.beginPath())
		
		document.addEventListener("click", ()=> {
  			this.mouseDown = false
  			this.ctx.beginPath()
		})
		document.querySelector(".Clear").addEventListener("click", ()=>
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height))


		this.canvas.addEventListener('mousemove', (param)=>{
			if(this.mouseDown) {
				this.ctx.lineTo(param.pageX - param.target.offsetLeft, param.pageY - param.target.offsetTop)
				this.ctx.stroke()

				this.ctx.beginPath()
				this.ctx.arc(param.pageX - param.target.offsetLeft, param.pageY - param.target.offsetTop, this.radius, 0, 2*Math.PI)
				this.ctx.fill()

				this.ctx.beginPath()
				this.ctx.moveTo(param.pageX - param.target.offsetLeft, param.pageY - param.target.offsetTop)
			}
		})
	}
	circle(){
		//let circle = document.querySelector(".circle")
		
		let range = document.querySelector(".range")
		let radiusV = document.querySelector(".radiusV")
		radiusV.innerHTML = range.value;
		range.oninput = () =>{
			this.radius = window.innerWidth / 100 * range.value
			this.ctx.lineWidth = this.radius * 2
 			//circle.style.width = range.value
 			//circle.style.height = range.value
 			radiusV.innerHTML = range.value;
		}
	} //change radius
	getArray() {
		this.arraData = []

		let width = this.canvas.width
		let height = this.canvas.height
		let xS = Math.round(width/this.pix)
		let yS = xS
		//console.log(width, height, xS, yS)
		//let yS =  Math.round(height/this.pix)
		for(let i = 0; i < this.pix; i++) { 
			for(let j = 0; j < this.pix; j++) {
				//console.log(i,j, width, height)
				const data = this.ctx.getImageData(i * xS, j * yS, xS, yS)
				
				let nonEP = 0
				for(let el of data.data) {
					if (el == 255) {
						nonEP++
						break
					}
				}
				this.arraData.push(nonEP >= 1 ? 1 : 0)

			}
		}


		console.log("\n\n\n\n\n")
		this.printArray(this.arraData)


		return this.arraData
	}

	calculate () { 
		//train & get a result
		document.querySelector(".Train").addEventListener("click", ()=>{
			let str = prompt("Input your symbol")
			this.trainData.push({
				input: this.getArray(),
				output: {[str]: 1}
			})
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
		})
		//train
		document.querySelector(".TrainNet").addEventListener("click", ()=>{
			this.net = new brain.NeuralNetwork() //new brain.recurrent.LSTM(); //new brain.NeuralNetwork()
			const config = {
 				//iterations: 1500,
  				log: false,
  				//logPeriod: 500,
  				//layers: [10],
  				//errorThresh: 0.005
			}

			try {
				this.net.train(this.trainData, config)
			}
			catch(e) {
				alert(e + "\nPush some items")
			}
		})
		//get a res
		document.querySelector(".buttonRes").addEventListener("click", ()=>{
			try {
				const result = brain.likely(this.getArray(), this.net)
				if(confirm(result)) {
					this.trainData.push({
						input: this.getArray(),
						output: {[result]: 1}
					})
					console.log(this.trainData)
					this.net.train(this.trainData)
				}
			} catch(e) {
				alert(e + "\nTrain your ai")
			} finally {
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
			}
		})
		//save array
		document.querySelector(".SaveOrErase").addEventListener("click", ()=>{
			let message = "Save? (yes will save trainig data, cancel will erase)"
			if(confirm(message)) {
				console.log("saved")
				localStorage.setItem('trainData', JSON.stringify(this.trainData))
			}
			else
				localStorage.setItem('trainData', JSON.stringify([]))
		})
		document.querySelector(".Applay").addEventListener("click", ()=>{
			this.trainData = JSON.parse(localStorage.getItem('trainData'))
			console.log("applayed")
		})
	}
}


//------------------
const sU = new SetUp

sU.setUp()
sU.draw()
sU.circle()
sU.calculate()
//sU.drawGrid()