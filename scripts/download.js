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

/*$("section").css({
	width:$(window).width() + "px",
	height:$(window).height()+ "px",
})

let bird1 = $(".bird1")
let bird2 = $(".bird2")
let bird3 = $(".bird3")

let mountain1 = $(".mountain1")
let mountain2 = $(".mountain2")
let mountain3 = $(".mountain3")
let mountain4 = $(".mountain4")
let mountain5 = $(".mountain5")

$(window).on("scroll", ()=>{
	let scrollTop = $(window).scrollTop()
	if(scrollTop < 150){
		$(".textCenterParalax").css({
			bottom: `${-450 - scrollTop * 0.5}px`
		})

		bird1.css({
			left: `${50 - scrollTop * 0.3}px`,
			bottom: `${550 - scrollTop * 0.5}px`
		})
		bird2.css({
			left: `${850 + scrollTop * 1.3}px`,
			bottom: `${250 + scrollTop * 0.5}px`
		})
		bird3.css({
			left: `${150 - scrollTop * 0.3}px`,
			bottom: `${250 + scrollTop * 1.5}px`
		})

		mountain1.css({
			bottom: `${-200 - scrollTop * 0.5}px`
		})
		mountain2.css({
			bottom: `${-200 - scrollTop * 0.2}px`
		})
		mountain3.css({
			bottom: `${-200 - scrollTop * 0.6}px`
		})
		mountain4.css({
			bottom: `${-200 - scrollTop * 0.8}px`
		})
		mountain5.css({
			bottom: `${-150 - scrollTop * 1}px`
		})
	}


	
})*/