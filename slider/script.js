let sliders = $(".sliderLeftRight")

$('.sliderLeftRight').each(function(index) {
    let btnLeft = $(this).find(".btnLeft")
    let btnRight = $(this).find(".btnRight")
    let slider = $(this).find(".slider")
      

    for(let i = 0; i < 4; i++) {
      slider.append(slider.find(`img:nth-child(${i+1})`).clone())
    }
    let img = $(this).find("img")
    

    
    let counterStep = 0
    let funcToSide = function(){
      let pos = $(img[img.length - 6]).position()

      if(pos.left <= 0){
        counterStep = 0
        
        slider.scrollLeft(0)

        setTimeout(()=>{
          counterStep++
          slider.animate({
            scrollLeft: `${slider.width()*counterStep}px`
          }, 550)
        }, 1) 
      } else {
        counterStep++
        slider.animate({
          scrollLeft: `${slider.width()*counterStep}px`
        }, 550)
      } 
    }
    let intStep = setInterval(funcToSide, 3000)

    let canSlide = true
    const POSITION_MAX = 3

    btnLeft.on("click", ()=>{
      clearInterval(intStep)

      if(counterStep > 0)
        counterStep--
      slider.animate({
        scrollLeft: `${slider.width()*counterStep}px`
      }, 550)
      
      if(canSlide) {
        canSlide = false
        setTimeout(()=>{
          intStep = setInterval(funcToSide, 3000)
          canSlide = true
        },3000)
      }
      
    })
    btnRight.on("click", ()=>{
      clearInterval(intStep)

      let pos = $(img[img.length - 6]).position()

      if(pos.left <= 0){
        counterStep = 0

        slider.scrollLeft(0)

        setTimeout(()=>{
          counterStep++
          slider.animate({
            scrollLeft: `${slider.width()*counterStep}px`
          }, 550)
        }, 1) 
      } else {
        counterStep++
        slider.animate({
          scrollLeft: `${slider.width()*counterStep}px`
        }, 550) 
      }
      
      if(canSlide) {
        canSlide = false
        setTimeout(()=>{
          intStep = setInterval(funcToSide, 3000)
          canSlide = true
        },3000)
      }
    })

})