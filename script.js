class Figure {
  cont = $(".container")

  constructor() {
    this.onChange()

    this.posX = Math.round(Math.random() * (this.widthContainer - 200 - this.cont.offset().left) + this.cont.offset().left)
    this.posY = Math.round(Math.random() * (this.heightContainer - 200 - this.cont.offset().top) + this.cont.offset().top)

    this.straightX = [-1,1][Math.round(Math.random())]
    this.straightY = [-1,1][Math.round(Math.random())]

    this.speedMoveX = Math.round(Math.random() * 10) * this.straightX
    this.speedMoveY = Math.round(Math.random() * 10) * this.straightY
    this.deg = Math.round(Math.random() * 90)
    //make a figure

    this.figure = $("<div></div>")

    let classCss = ["triangle", "circle", "square", "pentagon", "hexagon", "octagon"]
    let colorCss = ["#007bff", "#00ff84", "#ff007b", "#ff8400", "#fbff00", "#ff0500"]


    this.figure.addClass(classCss[Math.round(Math.random() * (classCss.length-1))])
    this.figure.css({
      backgroundColor: `${colorCss[Math.round(Math.random() * (colorCss.length-1))]}`,
      left: `${this.posX}px`,
      top: `${this.posY}px`
    })

    this.cont.append(this.figure)


    this.moveFigure()
  }

  onChange() {
    this.widthContainer = this.cont.outerWidth() + this.cont.offset().left
    this.heightContainer = this.cont.outerHeight() + this.cont.offset().top


    this.cont.on("resize", ()=>{
      this.widthContainer = this.cont.outerWidth() + this.cont.offset().left
      this.heightContainer = this.cont.outerHeight() + this.cont.offset().top
    })
  }

  moveFigure(){
    setInterval(()=>{
      let figure = this.figure
      this.posX += this.speedMoveX 
      this.posY += this.speedMoveY

      figure.css({
        left: `${this.posX}px`,
        top: `${this.posY}px`
      })

      this.deg += 5 * -this.straightX / this.straightX 
      figure.css("transform", `rotate(${this.deg}deg)`);


      this.onFieldOut()
    }, 20)


  }

  onFieldOut() {
    let figure = this.figure

    //left right
    if(this.posX < this.cont.offset().left || this.posX + 200 > this.widthContainer){
      this.speedMoveX *= -this.straightX / this.straightX
    }

    if(this.posY < this.cont.offset().top || this.posY + 200 > this.heightContainer) {
      this.speedMoveY *= -this.straightY / this.straightY
    }
  }


}

let figure = new Figure()
//console.log(figure.straightX)


