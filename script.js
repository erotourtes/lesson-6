function months (el) {
	let outS = document.querySelector(el)
	let counter = 0
	months = [
	'January', 
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
	].reverse().forEach(e =>{
		let b = document.createElement("option")
		b.value = counter++
		b.innerHTML = e
		outS.append(b)
	})
}

function date (el) {
	let outS = document.querySelector(el)
	for(let i = 1990; i < 2022; i++) {
		let b = document.createElement("option")
		b.value = i
		b.innerHTML = i
		outS.append(b)
	}
}

function change (inputV, outputV) {
	
	let inV = document.querySelector(inputV)
	let outV = document.querySelector(outputV)
	inV.oninput = ()=>{
		outV.innerHTML = inV.value
	}
}

function changeInp (inputV, outputV) {
	
	let inV = document.querySelector(inputV)
	let outV = document.querySelector(outputV)
	inV.oninput = ()=>{
		outV.value = inV.value
	}
}

months(".months")
date(".date")
changeInp(".cardNumberInput", ".cardNumberOutput")
change(".cardNameInput", ".cardNameOutput")