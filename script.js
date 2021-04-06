let a = document.querySelector(".ph")
let b = a.getElementsByTagName("*")
for(el of b)
	el.style.width = window.innerWidth / 4 + "px"
