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

$(window).on("scroll", ()=>{
	let scrollTop = $(window).scrollTop()

	$("#clParalax").css({
		top: `${scrollTop * 0.2}px`,
		left: `${scrollTop * 1}px`
	})
	$("#sunParalax").css({
		top: `${200 + -scrollTop * 2.2 / 5}px`,
		left: `${scrollTop * 0.5}px`
	})
	$("#rmParalax").css({
		top: `${scrollTop * 0.2}px`,
		left: `${scrollTop * 0.2}px`
	})
	$("#cmParalax").css({
		top: `${scrollTop * 0.2}px`
	})
	$("#lmParalax").css({
		top: `${scrollTop * 0.1}px`,
		left: `${-scrollTop * 0.9}px`
	})
	$("#btParalax").css({
		top: `${-scrollTop * 0.2}px`,
		left: `${scrollTop * 0.3}px`
	})
	$("#bt1Paralax").css({
		top: `${-scrollTop * 0.5}px`

	})

	$(".mainTextParalax").animate({
		top: `${50}%`,
		left: `${75 - scrollTop * 0.1}%`,
		opacity: `${1}`
	}, 0)
})