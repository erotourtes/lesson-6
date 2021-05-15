let leftH =-250
let topH = 0
for(let j = 0; j < $("#maunButtonsInDownload").height() / 200 + 1; j ++){
	for(let i = 0; i < $(window).width() / 200 + 1; i ++) {
		$("#maunButtonsInDownload").append(`
			<div style="position: absolute; z-index: -1; left:${leftH}px; top:${topH}px; background-color:white;" class="octagon">
			</div>
		`)
		leftH+=210
	}
	leftH =-250
	topH +=210
}

let moon = $("#mooon")
let cloud = $("#cloud")
let bird = $("#bird")
let bird1 = $("#bird1")
let mountain = $("#mountain")
let rocket = $("#rocket")
let tree = $("#tree")
let mooon = $("#mooon")


$(window).on("scroll", ()=>{
	let scrollTop = $(window).scrollTop()
	if(scrollTop < 500) {
		moon.css({
			top: `${50 + scrollTop* 0.9}px`,
			right: `${150 + scrollTop * 1.5}px`
		})
		bird.css({
			right: `${500 + scrollTop * 1}px`
		})
		bird1.css({
			top: `${550 + scrollTop * -0.9}px`,
			left: `${500 - scrollTop * 2}px`
		})
		mountain.css({
			bottom: `${-200 + scrollTop * -0.3}px`
		})
		$(".textClick") {
			
		}
	}
})