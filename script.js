function setButtons() {
	let divRow = document.createElement("div")
	let input = document.querySelector("#input")

	for(let i = 0; i <= symbols.length; i++) {
		//centralize
		let btn = document.createElement("button")
		if(i % 4 == 0) {
			calculator.append(divRow)
			divRow = document.createElement("div")
		}

		btn.type = "button"
		btn.className = "btn btn-secondary btnToDo" + symbols[i]

		//create onclick
		switch (symbols[i]) {
			case "c":
				btn.onclick = () => {
					toCalculate = ""
					input.value = toCalculate
				}
				break
			default:
				btn.onclick = ()=>{
					let isEqualSymb = !(toCalculate[toCalculate.length-1] >= 0 && toCalculate[toCalculate.length-1] <= 9)
					let isSymb = !(symbols[i] >= 0 && symbols[i] <= 9)
					if(document.querySelector(".switch").checked) {
						//input.readOnly = true
						if (isSymb && isEqualSymb)
							toCalculate[toCalculate.length-1] = symbols[i]
						else
							toCalculate += symbols[i]
						input.value = toCalculate
					} else {
						//input.readOnly = false
						if(!isSymb) {
							toCalculate += symbols[i]
							input.value = toCalculate
						} else if (isSymb && isEqualSymb) {
							toCalculate[toCalculate.length-1] = symbols[i]
							input.value = symbols[i]
						} else {
							toCalculate += symbols[i]
							input.value = symbols[i]
						}
					}
				}
		}
		btn.innerHTML  = symbols[i]

		divRow.append(btn)
	}
	input.addEventListener('input', () => {toCalculate = input.value})
	input.addEventListener('keydown', (e) => {
		switch (e.key) {
			case "Enter":
				input.value = eval(toCalculate)
				toCalculate = eval(toCalculate)
				break
		}
	})
}

const symbols = [
	"c","/", "*", "-",
	"7", "8", "9", "+",
	"4", "5", "6", "%",
	"1", "2", "3", "0"
]

let calculator = document.querySelector(".calculator")
let toCalculate = ""



setButtons()

