let inputValue = document.querySelector("#input")
let toDo = document.querySelector(".toDo")

let maxCounter = 6
let counter = 0


function clearInput() {
	inputValue.value = ""
}
function addTask() {
	if(counter < maxCounter) {
		let newDiv = document.createElement("div")
		newDiv.className = "task class" + counter
		
		//checkbox
		let newCheckBox = document.createElement("input")
		newCheckBox.className = "form-check-input"
		newCheckBox.type = "checkbox"
		newDiv.append(newCheckBox)


		//input
		let newInput = document.createElement("input")
		newInput.type = "text"
		newInput.className = "form-control newInput"
		newInput.value = inputValue.value
		//newInput.disabled = true
		newDiv.append(newInput)


		//button
		let btn = document.createElement("button")
		btn.className = "btn-close toClose"
		btn.ariaLabel = "Close"
		btn.setAttribute("onclick", `removeElement(".class${counter}")`)
		newDiv.append(btn)


		//add
		toDo.prepend(newDiv)
		counter++
	}
}

function removeElement(el){
	toDo.removeChild(document.querySelector(el))
	counter--
}


function deleteAll() {
	let toDelete = document.getElementsByClassName("task")
	while(toDelete[0])
		toDo.removeChild(toDelete[0])
	counter = 0
	toDoArray = []
}