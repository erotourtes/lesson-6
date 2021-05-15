let menu = $(".menu")

$(window).on("resize",()=>{
  menu.css({height: `${$(window.top).height()}`})
})
menu.css({height: `${$(window.top).height()}`})

menu.hide()
$(".menu *").hide()
$(".SHADOW").hide()

$(".menuBtn").on("click", ()=> {
	if (!menu.is(':animated')) {
      menu.animate({width:'toggle'}, 350)
      $(".menu *").fadeIn()
      $(".SHADOW").fadeIn()
  }

})
$(".SHADOW").on("click", ()=>{
    if (!menu.is(':animated')){
      menu.animate({width:'toggle'}, 300)
      $(".menu *").fadeOut(100)
      $(".SHADOW").fadeOut()
    }
})



///add events on color
const colors = ["yellow", "#d6d6d6", "#5aadff", "#191919"]

let allColors = $(".colors")

let allElementsToChange = [$(":header"), $("p"), $(".backgroundToChange")]


for(let i = 0; i < allColors.length; i++){
  let par = $(`.changeColor${i}`)
  let circles = $(`.changeColor${i} .colors`).children()

  for(let j = 0; j < circles.length; j++){
    let circle = $(circles[j])
    
    circle.on("click", ()=> {
      par.find(".selectedColor").removeClass("selectedColor")
      circle.addClass("selectedColor")


      if(i < 2)
        allElementsToChange[i].css({
          color: colors[j]
        })
      else
        allElementsToChange[i].css({
          backgroundColor: colors[j]
        })
    })
  }
}