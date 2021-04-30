	const dots = $(".dots")
	
	const images = $(".photosCarusel").children()

	images.hide()
	$("#caruselPhoto0").show()
	
	let indexPhoto = 0
	let prevImg = $("#caruselPhoto0")
	for(let i = 0; i < images.length; i++) {
		let el = $("<div></div>");
		if (i == indexPhoto)
			el.addClass("selectedDot")
		el.click(()=>{
			$(`.photosCarusel img:nth-child(${indexPhoto + 1})`).slideUp("fast")
			let curImg = $(`#caruselPhoto${i}`)
			indexPhoto = i
			
			prevImg.fadeOut("fast")
			curImg.fadeIn()
			
			prevImg = curImg
			dots.children().removeClass("selectedDot")
			el.addClass("selectedDot")
		})
		dots.append(el)
	}


	
	setInterval(()=>{
		//indexPhoto - current image
		$(`#caruselPhoto${indexPhoto}`).slideUp("fast")
		
		let next
		if (indexPhoto + 1 >= images.length){
			next = $(`#caruselPhoto${0}`)
			indexPhoto = 0
		} else
			next = $(`#caruselPhoto${++indexPhoto}`)

		next.fadeIn()

		dots.children().removeClass("selectedDot")
		$(`.dots div:nth-child(${indexPhoto + 1})`).addClass("selectedDot")
	}, 5000)