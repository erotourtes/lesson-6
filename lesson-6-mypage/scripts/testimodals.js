let fstOr = $(".fastOrientation li")

			fstOr.eq(0).on("click", ()=>{
				let pos = $("#beggin").offset()
				$('body,html').animate({scrollTop: pos.top - 55 + "px"},500);
			})
			fstOr.eq(1).on("click", ()=>{
				let pos = $("#start").offset()
				$('body,html').animate({scrollTop: pos.top - 55 + "px"},500);
			})
			fstOr.eq(2).on("click", ()=>{
				let pos = $("#link").offset()
				$('body,html').animate({scrollTop: pos.top - 55 + "px"},500);
			})


			let h = $(".hidden")
			let ifOpenned = false
			h.hide()
			$(".openHide").on("click", ()=> {
				h.animate({
					height: "toggle",
				}, 250)
 	
				if(ifOpenned){
					$(".openHide p").text("Open ↓")
					ifOpenned = false
				}
				else {
					$(".openHide p").text("Close ↑")
					ifOpenned = true
				}
			})