ScrollReveal().reveal("div")

let header = document.querySelector("header")
header.style.backgroundImage = "url(img/bg.jpg)"


let a = document.querySelector(".ph")
let b = a.getElementsByTagName("*")
for(el of b)
	el.style.width = window.innerWidth / 4 - 5 + "px"

let all = document.querySelector("div")
