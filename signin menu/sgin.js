let toAppendGears = $(`
  <div class="gears">
    <div class="gear1">
      <img src="img/gears/1.png">
      <img src="img/gears/11.png">
    </div>
    <div class="gear2">
      <img src="img/gears/2.png">
      <img src="img/gears/22.png">
    </div>
    <div class="gear3">
      <img src="img/gears/3.png">
    </div>
  </div>
`)
let toAppendGearsRigth = $(`
  <div class="gears">
    <div class="gear1">
      <img src="img/gears/1.png">
      <img src="img/gears/11.png">
    </div>
    <div class="gear2">
      <img src="img/gears/2.png">
      <img src="img/gears/22.png">
    </div>
    <div class="gear3">
      <img src="img/gears/3.png">
    </div>
  </div>
`)
toAppendGearsRigth.css({
  position: "absolute",
  top: "240px",
  left: "-40px",
})

let errEmail = true
let errPassword = true

$("body").append(toAppendGears)
$("body").append(toAppendGearsRigth)

let gears1 = $(".gear1 img")
let gears2 = $(".gear2 img")
let gears3 = $(".gear3 img")

let degOnRight = 0
let degOnLeft = 0
let degO = 0
let gearInterval = setInterval(()=>{
  degOnRight += 1
  degOnLeft += 1.4
  degO += Math.random() * 10  
  for(let i = 0; i < gears1.length; i++){
    if (i % 2 == 0 && !errEmail) {
      $(gears1[i]).css({transform: `rotate(${degOnRight}deg)`})
      $(gears2[i]).css({transform: `rotate(-${degOnLeft}deg)`})
      $(gears3[i]).css({transform: `rotate(${degO}deg)`})
    }
    else if(i % 2 == 1 && !errPassword) {
      $(gears1[i]).css({transform: `rotate(-${degOnLeft}deg)`})
      $(gears2[i]).css({transform: `rotate(${degOnRight}deg)`})
      $(gears3[i]).css({transform: `rotate(${degO}deg)`})
    }
  }
},50)

//clearInterval(gearInterval)
//geears end

$("body").append("<div class = 'shadow'></div>")
let toAppendMenu = $(`
  <div class="signIn In">
    <h3>Sign In</h3>
    <div class="inSignIn">
      <h3>Email address</h3>
      <input id="email" type="text" name="email" placeholder="Enter your email">
      <h3>Password</h3>
      <input id="password" type="password" name="password" placeholder="Enter your password">
      <div id="rememberMe">
        <input type="checkbox" name="remember">
        <p>Remember me</p>
      </div>
      <h3 id="signInBtn">Sign in</h3>
      <div style="display: flex;flex-direction: row;justify-content: space-around; position: relative;top: -50px; ">
        <p id="ForgotPassword">Forgot Password</p>
        <p>Have no account <a id="CreateOne" href="#">Create one!</a></p>
      </div>
    </div>
  </div>
`)
$("body").append(toAppendMenu)

$("#email").on("input",()=>{
  errEmail = true
  let valEmail = $("#email").val()
  let sub = valEmail.substring(valEmail.length-10, valEmail.length)


  document.querySelector("#signInBtn").setAttribute("onclick", "location.href='#'")


  if(sub === "@gmail.com") 
    errEmail = false
})

$("#password").on("input",()=>{
  errPassword = true
  let valPassword = $("#password").val()

  $(".errMassage").remove()
  document.querySelector("#signInBtn").setAttribute("onclick", "location.href='#'")

  if(valPassword.length > 5) 
    errPassword = false
})


$("#ForgotPassword").on("click", ()=>{
  $("body").append("<p class='errMassage'>Just remember it</p>")
})

$("#CreateOne").on("click", ()=>{
  $(".In").fadeOut()
  $(".errMassage").remove()


  $("body").append( $(`
  <div class="signIn Out">
    <h3>Sign Up</h3>
    <div class="inSignIn">
      <h3>Email address</h3>
      <input id="email" type="text" name="email" placeholder="Enter your new email">
      <h3>Password</h3>
      <input id="password" type="password" name="password" placeholder="Enter your new password">
      <div id="rememberMe">
        <input type="checkbox" name="remember">
        <p>Remember me</p>
      </div>
      <h3 id="signInBtn" class = "upBtn">Sign up</h3>
      <div style="display: flex;flex-direction: row;justify-content: space-around; position: relative;top: -50px; ">
        <p>Have an account <a id="CreateOne" class="logUP" href="#">Log in!</a></p>
      </div>
    </div>
  </div>
`))

  $(".logUP").on("click", ()=>{
    $(".Out").fadeOut()
    $(".In").show()
  })
  $(".upBtn").on("click", ()=>{
    $(".Out").fadeOut()
    $(".In").show()
  })  

})

$("#signInBtn").on("click", ()=>{
  if(!errEmail && !errPassword)
    document.querySelector("#signInBtn").setAttribute("onclick", `location.href='${path}index.html'`)
})


$(".shadow").on("click", ()=>{
	$(".gears").fadeOut(400)
	$(".signIn").hide()
	$(".shadow").fadeOut(500)

	$("body").css({overflow: "visible"})
})



$(".gears").hide()
$(".signIn").hide()
$(".shadow").hide()

$("#toLogIn").on("click", ()=>{
	$(".gears").fadeIn()
	$(".signIn").fadeIn()
	$(".shadow").fadeIn()

	$("body").css({overflow: "hidden"})
})

