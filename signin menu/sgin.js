let btn = $("#toLogIn")
let sh = $(".shadow")
let panel = $("#logInPanel")

sh.css({height: $(document).height() + "px"})
panel.css({opacity: "1"})

panel.hide()
sh.hide()

btn.on("click", ()=>{
	if (!panel.is(':animated')) {
		panel.fadeToggle()
		sh.toggle()
		$("body").css({overflow: "hidden"})
	}
})
sh.on("click", ()=>{
	if (!panel.is(':animated')) {
		panel.fadeOut(100)
		sh.hide()
			
		$("body").css({overflow: "visible"})
	}
})


let ifEmail = false
let ifPsss= false
let e = $(".errMasages")

$("#email").on("input", ()=>{
	ifEmail = false
	let val = $("#email").val()
	let sub = val.substring(val.length-4, val.length)
	valP = $("#password").val()

	if (e.css("left") != "-500px")
		e.animate({ opacity: "0",  left: "-500px",}, 500)

	document.querySelector("#logbtn").setAttribute("onclick", "location.href='#'")

	if(sub === ".com") 
		ifEmail = true
})
$("#password").on("input", ()=>{
	ifPsss = false
	let valP = $("#password").val()
	valP = $("#password").val()
	if(valP.length > 5)
		ifPsss = true

	if (e.css("left") != "-500px")
		e.animate({ opacity: "0",  left: "-500px",}, 500)
})

$("#logbtn").on("click", ()=>{
	if(!ifEmail || !ifPsss){
		e.animate({ opacity: "1",  left: "500px",}, 500)
		$(".errMasages p").text("have no .com or password")
		return
	}

	document.querySelector("#logbtn").setAttribute("onclick", `location.href='${path}index.html'`)
})