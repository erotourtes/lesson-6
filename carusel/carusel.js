for(let i = 0; i < $(".carusel").length; i++){

	const dots = $(`.carusel${i} .dots`)
	
	const images = $(`.carusel${i} .photosCarusel`).children()

	images.hide()
	$(`.carusel${i} #caruselPhoto0`).show()
	
	let indexPhoto = 0
	let prevImg = $(`.carusel${i} #caruselPhoto0 `)


		let caruselFunction = function() {
			//indexPhoto - current image
			$(`.carusel${i} #caruselPhoto${indexPhoto}`).slideUp("fast")
				
			let next
			if (indexPhoto + 1 >= images.length){
				next = $(`.carusel${i} #caruselPhoto${0}`)
				indexPhoto = 0
			} else
				next = $(`.carusel${i} #caruselPhoto${++indexPhoto}`)

			next.fadeIn()

			dots.children().removeClass("selectedDot")
			$(`.carusel${i} .dots div:nth-child(${indexPhoto + 1})`).addClass("selectedDot")
		}
		let caruselInterval = setInterval(caruselFunction, 5000)
	let ifCanAddTimer = true
	for(let j = 0; j < images.length; j++) {
		let el = $("<div></div>");
		if (j == indexPhoto)
			el.addClass("selectedDot")


		
		el.click(()=>{
			clearInterval(caruselInterval)


			$(`.carusel${i} .photosCarusel img:nth-child(${indexPhoto + 1})`).slideUp("fast")
			let curImg = $(`.carusel${i} #caruselPhoto${j}`)

			indexPhoto = j
			
			prevImg.fadeOut("fast")
			curImg.fadeIn()
			
			prevImg = curImg
			dots.children().removeClass("selectedDot")
			el.addClass("selectedDot")

			if(ifCanAddTimer) {
				setTimeout(()=>{
					caruselInterval = setInterval(caruselFunction, 5000)
					ifCanAddTimer = true
				}, 3000)	
			}

			ifCanAddTimer = false
		})
		dots.append(el)
	}


	

}