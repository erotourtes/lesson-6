ScrollReveal().reveal("footer div")

try {
	let a = document.querySelector(".ph")
	let b = a.getElementsByTagName("*")
	for(el of b)
		el.style.width = window.innerWidth / 4 - 5 + "px"

		let all = document.querySelector("div")
} catch(e) {
	console.log(e)
}

$(window).scroll(()=> {




  	let scrollHeight = document.querySelector("html").scrollTop
	if (scrollHeight > 499) {
		let el = $(".toChangeOnScroll")

		let toAppend = $(`
					<div class= "linkA" style = "position: fixed; top:0px; width:100%; height: 50px; background-image: url('img/bg.jpg')">
						<div class="head" style = " position: relative; top:10px; width: 70%; margin: 0 auto">
							<div><a href="index/index.html" id="SELECTED">ActiveBox</a></div>
							<div>	
								<a href="html files/features.html">Features</a>
								<a href="html files/works.html">Works</a>
								<a href="html files/ourTeam.html">Our Team</a>
								<a href="html files/testimonails.html">Testimonails</a>
								<a href="html files/download.html">Download</a>
							</div>
						</div>
					</div>`)

		$("body").append(toAppend)
	} else if (scrollHeight < 45) {
		let el = $(".toChangeOnScroll")
		$(".linkA").remove()
		toChangeOnScroll = true
	}
})
