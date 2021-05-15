$("html").append(`<DIV ID = "toTop" > ^ up </DIV >`)
$(function() {
		$(window).scroll(function() {
	 		if($(this).scrollTop() != 0) {
	 			$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
	 		}
		});
 
		$('#toTop').click(function() {
	 		$('body,html').animate({scrollTop:0},500);
	 	});
});

try {
	ScrollReveal().reveal("footer div", {
	    delay: 50,
	    duration: 500,
	    reset: true
	})
	ScrollReveal().reveal("header div", {
	    delay: 50,
	    duration: 500,
	    reset: true
	})
} catch (e) {
	console.log("have no SCROLLREVEAL " + e)
}

let changePhotoWH = ()=>{
	try {
		let a = document.querySelector(".ph")
		let b = a.getElementsByTagName("*")
		for(el of b)
			el.style.width = window.innerWidth / 4 - 5 + "px"

			let all = document.querySelector("div")
	} catch(e) {
		console.log(e)
	}
}
changePhotoWH()
$(window).on("resize", ()=>{
	changePhotoWH()
})

let fileName = document.location.href
let fileNameReady = ""
for(let i = fileName.length-1; i > -1; i--){
	let el = fileName[i]

	if (el == "/") 
		break
	fileNameReady +=el
}


fileNameReady = fileNameReady.split("").reverse().join("")
let path = "../"
if(fileNameReady === "index.html")
	path = ""

console.log(path)

let canAdd = true

$(window).scroll(()=> {
  	let scrollHeight = document.querySelector("html").scrollTop
	if (scrollHeight > 499 && canAdd && $(window).width() > 870) {
		let el = $(".toChangeOnScroll")
		canAdd = false
		let toAppend = $(`
					<div class= "linkA" style = "z-index:89; position: fixed; top:0px; width:100%; height: 50px; background-image: url('img/bg.jpg');">
						<div class="head" style = "position: relative; top:15px; width: 70%; margin: 0 auto">
							<div><a href="${path}index.html" id="SELECTED" class="COOLANIMATIONUp" data-text="ActiveBox">ActiveBox</a></div>
							<div>	
								<a href="${path}html files/features.html" class="COOLANIMATIONUp" data-text="Features">Features</a>
								<a href="${path}html files/works.html" class="COOLANIMATIONUp" data-text="Works">Works</a>
								<a href="${path}html files/ourTeam.html" class="COOLANIMATIONUp" data-text="Our Team">Our Team</a>
								<a href="${path}html files/testimonails.html" class="COOLANIMATIONUp" data-text="Testimonails">Testimonails</a>
								<a href="${path}html files/download.html" class="COOLANIMATIONUp" data-text="Download">Download</a>
							</div>
						</div>
					</div>`)

		$("body").append(toAppend)
	} else if (scrollHeight < 45 || $(window).width() < 870) {
		let el = $(".toChangeOnScroll")
		$(".linkA").animate({"top": "-500px"}, 500)
		setTimeout(()=>{
			$(".linkA").remove()
			canAdd = true
		}, 50)
		
		
	}
})
