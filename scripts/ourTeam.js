let text = [
				{index: 1, h3:"JoJo", pInfoInParticipant: "Gwess Av", pParticipant: "#"},
				{index: 2, h3:"JoJo", pInfoInParticipant: "Jolyne Av", pParticipant: "#"},
				{index: 3, h3:"JoJo", pInfoInParticipant: "Jotaro", pParticipant: "#"},
				{index: 4, h3:"JoJo", pInfoInParticipant: "Star Platinim", pParticipant: "#"},
				{index: 5, h3:"JoJo", pInfoInParticipant: "Sports Maxx Av", pParticipant: "#"},
				{index: 6, h3:"JoJo", pInfoInParticipant: "Star Platinum6", pParticipant: "#"},
				{index: 7, h3:"JoJo", pInfoInParticipant: "Limp Bizkit Av", pParticipant: "#"},
				{index: 8, h3:"JoJo", pInfoInParticipant: "Planet Waves Av", pParticipant: "#"},
				{index: 9, h3:"JoJo", pInfoInParticipant: "Stray Cat Manga Av", pParticipant: "#"},
			]
			//add elements
			for(let i = 1; i <= text.length; i++){
				let toAppend = $(`
					<div class="participant"  data-tilt data-tilt-scale="1.5">
						<div>
							<img src="../img/jojo/${i}.png">
							<div class="infoInParticipant">
								<h3>${text[i-1].h3}</h3>
								<div class="bookmark"><span></span><span></span></div>
								<p>${text[i-1].pInfoInParticipant}</p>
							</div>
						</div>
						<p>${text[i-1].pParticipant + i}</p>
					</div>`)

				$(".participants").append(toAppend)
			}

			let positions = []
			for(let i = 1; i <= text.length; i++)
				positions[i-1] = i

			//change elements
			let infoInParticipant = $(`.infoInParticipant`)

			for(let i = 0; i < infoInParticipant.length; i++){
				let ifChange = true
				let main = $(`.participants .participant:nth-child(${positions[i]})`)
				let toChange = $(`.participants .participant:nth-child(${positions[i]}) div .infoInParticipant`)
				toChange.fadeOut(100)


				main.mouseover( ()=>{
					$(toChange).fadeIn(200)
					$(main).css({overflow: "visible"})
				})
				main.mouseleave( ()=>{
					$(toChange).fadeOut()
					$(main).css({overflow: "hidden"})
				})

				let bookmark = $(`.participants .participant:nth-child(${positions[i]}) div .infoInParticipant .bookmark`)

				bookmark.on("click", ()=>{
					let bookmark1 = $(`.participants .participant:nth-child(${positions[i]}) div .infoInParticipant .bookmark span:nth-child(1)`)
					let bookmark2 = $(`.participants .participant:nth-child(${positions[i]}) div .infoInParticipant .bookmark span:nth-child(2)`)

					if (ifChange){
						$(".participants").prepend(main)
						for(let j = 0; j < positions.length; j++){
							if(positions[j] < positions[i])
								positions[j]++
						}
								
						positions[i] = 1


						bookmark1.css({"border-color": "transparent transparent transparent grey"})
						bookmark2.css({"border-color": "transparent grey transparent transparent"})

						ifChange = false
					} else {
						$(".participants").append(main)
						for(let j = 0; j < positions.length; j++){
							if(positions[j] > positions[i])
								positions[j]--
						}
						positions[i] = positions.length


						bookmark1.css({"border-color": "transparent transparent transparent white"})
						bookmark2.css({"border-color": "transparent white transparent transparent"})
						
						ifChange = true

					}


					
				})

			}
