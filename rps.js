var rps = ["rock", "paper", "scissor"];

function computer_show_image() {
  var randomNumberComputer = Math.floor(Math.random() * 3);
  var randomChosenThing = rps[randomNumberComputer];
  var imgc = document.createElement("img");
  if(randomChosenThing === "rock") {
      imgc.src = "https://cdn.vox-cdn.com/thumbor/WlWxn9EANC85sKh1u7x5iyhTSdg=/12x0:589x385/1400x1400/filters:focal(12x0:589x385):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/48684787/Da_Rock.0.0.jpg";
  }
  else if(randomChosenThing === "scissor") {
      imgc.src = "https://c8.alamy.com/comp/X6X4BJ/scissors-cigarettes-X6X4BJ.jpg";
  }
  else if(randomChosenThing === "paper") {
      imgc.src = "https://thumbs.dreamstime.com/b/funny-happy-cute-smiling-toilet-paper-vector-flat-cartoon-character-illustration-icon-isolated-blue-background-kawaii-style-145277824.jpg";
  }
  imgc.alt = randomChosenThing;
  document.body.appendChild(imgc);
  return randomChosenThing;
}

function human_show_image(src, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    document.body.appendChild(img);
    return img.alt;
}

function handler() {
  $("img").remove();
  human_show_image(this.src, this.alt);
  var computerChoice = computer_show_image();
  var humanChoice = this.name;
  if(humanChoice === computerChoice) {
    $(".text").text("Draw! 😐");
    $("img").css("border", "5px solid yellow");
  }
  else if((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "scissor" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock") ) {
    $(".text").text("You Won! 😉");
    $("img").css("border", "5px solid green");
  }
  else {
    $(".text").text("I Won! 😁");
    $("img").css("border", "5px solid red");
  }
}
$("img").on("click", handler);
