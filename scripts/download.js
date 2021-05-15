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

