let myCanvas; //Linh

let astros;
let emoji = [];
let noEmoji = 20;
let dataIsReady = false;
let buttonIsClicked = false;

window.addEventListener('load', ()=> {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1d4b59d2f9mshfcca3ba7c0ce0adp142592jsne67e79e42e9d',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
  };
  
  //Youssef : API Testing
  fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => console.error(err));


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
  //Linh
  myCanvas = createCanvas(window.innerWidth, window.innerHeight);;
  myCanvas.parent("container");
 
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


