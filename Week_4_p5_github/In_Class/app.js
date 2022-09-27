
let astros;
let emoji = [];
let noEmoji = 20;
let dataIsReady = false;
let buttonIsClicked = false;

window.addEventListener('load', ()=> {
  //fetch the data
  fetch("http://api.open-notify.org/astros.json")
  .then(resp => resp.json()) 
  .then(data => {
    console.log(data.people);
    astros = data.people;
    dataIsReady = true;
  })

  //add a button
  // debugger;
  let peopleButton = document.getElementById("people-button");
  peopleButton.addEventListener("click",()=>{
    buttonIsClicked = true;
    for (let i = 0; i < noEmoji; i++) {
      let xPos = random(0, width);
      let yPos = random(0, height);
      emoji[i] = new Emoji(xPos, yPos);
    }
  })


})


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
 
}

function draw() {
  background(230,124,34);
  fill(43,54,128);
 
  for (let i = 0; i < emoji.length; i++) {
    emoji[i].drawEmoji();
    emoji[i].moveEmoji();
  }

  if(dataIsReady) {
    for(let i =0;i<astros.length;i++) {
      ellipse(width/2,50*i, 50,50);
    }
    text(astros.length, 200,200);
  }
}


