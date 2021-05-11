let deg = 0
	let interval
	$("#midas").add(".weSponsored").on("mouseover", ()=>{
		interval = setInterval(()=>{
			deg+=15
			$("#midas").css("transform", `rotate(${deg}deg)`);
		}, 20)	
	})
	$("#midas").add(".weSponsored").on("mouseout", ()=>clearInterval(interval))

	$(".panelToSpon").on("click",()=>{
		let img = $("<img src='https://i.pinimg.com/originals/67/c1/a4/67c1a499333c5dcecbfa9f3a5c6027ac.jpg'>")
		img.css({
			"width": "150px",
			"height": "150px",
			"position": "absolute",
			"border-radius": "50%",
			"transform": "translate(-50%, -50%)",
			left: "-500px",
			top: "0px"
		})
		$(".aboutToSpon").append(img)
		img.animate({
			left: "50%"
			}, 700,"swing",()=>{
				img.animate({
				left: "150%",
			}, 4000,"swing", ()=>{
					img.remove()
				})
			})
		})
		
	

	let InSponsored = $(".InSponsored")
	let link = [{"link0":"https://www.spacex.com/static/images/share.jpg",
					"link1":"../img/tesla.png",
					"link2":"../img/neuralink.png"},
				{"link0":"../img/micro.png",
					"link1":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/BillMelindaGatesFoundation.svg/1200px-BillMelindaGatesFoundation.svg.png"
				}, {
					"link0": "https://www.likeni.ru/upload/iblock/b79/official-twitter-logo.jpg",
					"link1":"https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg",
					"link2": "https://www.visualcapitalist.com/wp-content/uploads/2017/06/bezos-share.png"
				}]


	for(let i = 0; i < 3; i++) {
		$(InSponsored[i]).on("click", ()=>{
			$(".ballInfo").remove()


			let leng = Object.keys(link[i]).length


			for(let key in link[i]) {
				let ballInfo = $(`<div class="ballInfo">
					<img src="${link[i][key]}">
				</div>`)
				ballInfo.hide()
				$(".INFOTOAPPEND").append(ballInfo)
				ballInfo.fadeIn()
			}
			

			let num = 3;
			let radius = 150;


		  	for (let i=0; i<num; i++){
		        let f = 45 / 57.2958 * i
		        let left = -radius * Math.sin(f) + 100 + 'px';
		        var top = -radius * Math.cos(f) + 'px';
		        $('.ballInfo').eq(i).css({'top':top,'left':left});
		  	}
		})
	}