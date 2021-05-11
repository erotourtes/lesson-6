let textindex = 0
	function wave(toChange, tag) {
		const ELEMENTINDEX = textindex
		let h = $(toChange)
		let parent = h.parent()
		let text = h.text().split("")

		h.remove()

		let div = $(`<div class = 'text ELEMENTINDEX${ELEMENTINDEX}'></div>`)
		for(let i = 0; i < text.length; i++){
			let newText = $(`<${tag}>${text[i]}</${tag}>`)
			div.append(newText)
		}
		parent.prepend(div)

		const time = 400
		let interval = 100
		if (text.length > 10)
			interval = 1
		let index = 1
		setInterval(()=>{			

			let a = $(`.ELEMENTINDEX${ELEMENTINDEX} ${tag}:nth-child(${index})`)
			a.animate({top:'-20px', opacity: "1"},time)
			
			a.animate({top:'0px', opacity: "0.5"},time)
			/*a.css({color: "#5a5aff"})*/
			if (index > text.length)
				index = 1
			else
				index++
		}, interval)
		textindex++
	}
	
	wave("h1", "h1")

	//start resume


	//------------------------check width
	let canAddWidthIs = true
	$(window).on("resize", ()=>{
		if($(window).width() < 730 && canAddWidthIs) {
			alert("width is too small")
			canAddWidthIs = false
		} else if ($(window).width() >= 730) {
			canAddWidthIs = true
		}
	})

	//--------------------------check inputs
	let n = "", a= "", p= "", e= "", iSp = 50, iSm = 50, iSc = 50, iP="", iE=""

	let checkIfEnd = ()=>{
		//if(n.length <= 0 || a.length <= 0 || p.length <= 0 || e.length <= 0 || iP.length <= 0  || iE.length <= 0)
		//	return

		$("#nameT").text(n)
		$("#aT").text(a)
		$("#pT").text(p)
		$("#eT").text(e)
		$("#ehT").text(iE)
		$("#profileT").text(iP)
	}

	$("#name").on("input", ()=>{
		n = $("#name").val()
		checkIfEnd()
	})
	$("#address").on("input", ()=>{
		a = $("#address").val()
		checkIfEnd()
	})
	$("#phone").on("input", ()=>{
		p = $("#phone").val()
		checkIfEnd()
	})
	$("#email").on("input", ()=>{
		e = $("#email").val()
		checkIfEnd()
	})


	$("#iSp").on("input", ()=>{
		iSp = $("#iSp").val()

		$(".PhysicalC").css({
			width: `${iSp}%`
		})

		$("#iStext").text(`Input in percent your physical(${iSp}), moral(${iSm}) and conceptual(${iSc}) characteristics`)
	})
	$("#iSm").on("input", ()=>{
		iSm = $("#iSm").val()

		$(".MoralC").css({
			width: `${iSm}%`
		})

		$("#iStext").text(`Input in percent your physical(${iSp}), moral(${iSm}) and conceptual(${iSc}) characteristics`)
	})
	$("#iSc").on("input", ()=>{
		iSc = $("#iSc").val()

		$(".ConceptualC").css({
			width: `${iSc}%`
		})

		$("#iStext").text(`Input in percent your physical(${iSp}), moral(${iSm}) and conceptual(${iSc}) characteristics`)
	})


	$("#iP").on("input", ()=>{
		iP = $("#iP").val()
		checkIfEnd()
	})
	$("#iE").on("input", ()=>{
		iE = $("#iE").val()
		checkIfEnd()

		console.log(p, n, e, iP, iE)
	})
	


	//-------------------------resumes
	let resumes = 0

	$("#sendResume").on("click", ()=>{
		let resume = $(`
			<div class="createResume resumeNumber${++resumes}">
					<h3 style="font-size: 25pt;">${n}</h3>
					<div class="inCreateResume">
						<div class="firstCol">
							<h3>Info</h3>
							<div>
								<h4>Address</h4>
								<h5>${a}</h5>
							</div>
							<div>
								<h4>Phone</h4>
								<h5>${p}</h5>
							</div>
							<div>
								<h4>Email</h4>
								<h5>${e}</h5>
							</div>


							<h3>Skills</h3>
							<div>
								<h4>Physical</h4>
								<div class="stats">
									<div style = "width: ${iSp}%" class="Physical"></div>
								</div>
							</div>
							<div>
								<h4>Moral</h4>
								<div class="stats">
									<div style = "width: ${iSm}%" class="Moral"></div>
								</div>
							</div>
							<div>
								<h4>Conceptual</h4>
								<div class="stats">
									<div style = "width: ${iSc}%" class="Conceptual"></div>
								</div>
							</div>
						</div>
						<div class="secondCol">
							<div style="border-bottom: 2px solid  rgba(0,0,0, 0.2);">
								<h3>Profile</h3>
								<h5>${iP}</h5>
							</div>
							<div>
								<h3>Employment history</h3>
								<h5>${iE}</h5>
							</div>
							

						</div>
					</div>	
			</div>`)

		resume.css({
			transform: `scale(.5)`
		})

		$(".peopleSugestion").append(resume)


		let ball = $(`<div class="ballToFindResume"><h3>${resumes}</h3></div>`)

		let k = resumes
		ball.on("click",()=>{

			$(".peopleSugestion").scrollTop(`${0}px`)
			let pos = $(`.resumeNumber${k}`).position()


			
			$(".peopleSugestion").animate({scrollTop: `${pos.top - 150}`}, 550)


			//$(".peopleSugestion").scrollTop(`${pos.top - 150}`)

			

			//$(".peopleSugestion").scrollTop(`${1010*(k-1) + 150}`)

		})

		$(".peopleWithMessage").append(ball)
	})


	$(".templateResume").hide()

	let ifCloseTemplate = true
	$("#showTemplate").on("click", ()=>{

		if(ifCloseTemplate) {
			ifCloseTemplate = false
			$("#showTemplate h3").text("Hide template")
			$(".templateResume").fadeIn()
		} else {
			ifCloseTemplate = true
			$("#showTemplate h3").text("Show template")
			$(".templateResume").fadeOut()
		}


		let pos = $(".templateResume").offset()
		$('body,html').animate({scrollTop: pos.top - 55 + "px"},500);
	})

	$(".clearAll").on("click", ()=>{
		$("#iE").val("")
		$("#iP").val("")
		$("#email").val("")
		$("#phone").val("")
		$("#address").val("")
		$("#name").val("")
		$("#iSc").val("50")
		$("#iSp").val("50")
		$("#iSm").val("50")
		iSp = 50
		iSm = 50
		iSc = 50
		$("#iStext").text(`Input in percent your physical(${iSp}), moral(${iSm}) and conceptual(${iSc}) characteristics`)
	})



	//----------------------move element
	let canMove = false
	$(".templateResume").on("click", ()=>{
		let tEl = $(".templateResume")

    	$(document).mousemove( (e) => {
        	if(canMove)
        		tEl.css({left: e.pageX, top: e.pageY})
        })

       	if (canMove)
			canMove = false
		else
			canMove = true
    	
	})
	
