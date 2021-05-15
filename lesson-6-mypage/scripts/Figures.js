class Figure {
  cont = $(".content")

  static colorCss = ["#007bff", "#00ff84", "#ff007b", "#ff8400", "#fbff00", "#ff0500"]

  static positions = []
  static figures = []

  constructor(index) {
    this.index = index

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


    this.figure.addClass(classCss[Math.round(Math.random() * (classCss.length-1))])
    this.figure.css({
      backgroundColor: `${Figure.colorCss[Math.round(Math.random() * (Figure.colorCss.length-1))]}`,
      left: `${this.posX}px`,
      top: `${this.posY}px`
    })

    this.cont.append(this.figure)

    this.moveFigure()

    Figure.positions.push({x: this.posX, y: this.posY})
    Figure.figures.push(this.figure)
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

      Figure.positions[this.index] = {x: this.posX, y: this.posY}

      figure.css({
        left: `${this.posX}px`,
        top: `${this.posY}px`
      })

      this.deg += 1 * this.straightX * this.straightY


      figure.css("transform", `rotate(${this.deg}deg)`);


      this.onFieldOut()
      //this.onSamePosition()
    }, 20)
  }

  onFieldOut() {
    let figure = this.figure

    //left right
    if(this.posX < this.cont.offset().left || this.posX + this.figure.width() > this.widthContainer){
      this.straightX = -this.straightX
      this.speedMoveX *= this.straightX
    }

    if(this.posY < this.cont.offset().top || this.posY + this.figure.height() > this.heightContainer) {
      this.straightY = -this.straightY
      this.speedMoveY *= this.straightY
    }
  }

  onSamePosition() {
    let arr = Figure.positions

    for(let i = 0; i < arr.length; i++){
      if(this.index == i)
        continue

      if(arr[this.index].x >= arr[i].x && arr[this.index].x + this.figure.width() <= arr[i].x) {
        console.log("l")
        this.straightX = -this.straightX
        this.speedMoveX *= this.straightX
        //console.log(this.straightX)
      } 

      console.log(this.straightY)
      
      if(this.straightY < 0 && arr[this.index].y <= arr[i].y && arr[this.index].y + this.figure.height() >= arr[i].y) {
        this.straightY = -this.straightY
        this.speedMoveY *= this.straightY
      }
    }
  }
}