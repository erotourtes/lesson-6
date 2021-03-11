document.querySelector(".cardNumberInput").addEventListener("click", ()=>{
	let input = document.querySelector(".cardNumberInput")
	let output = document.querySelector(".cardNumberOutput")
	output.innerHTML = input.text
})