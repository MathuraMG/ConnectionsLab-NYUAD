let socket = io(); //opens and connects to the socket
//p5 variables
let r,g,b;
let shape;


//listen for confirmation
socket.on('connect', () =>{
  console.log('connected to the server via sockets')
})

//P5 code
function setup() {
  createCanvas(400, 400);
  background(220);
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  shape = floor(random(0,2));
  socket.on('mouseDataFromServer', (data)=> {
    drawEllipseWithData(data);
  })
  
}

//emit information of mouse positon everytime i move mouse
function mouseDragged() {
  let mousePos = 
  { x: round(mouseX), 
    y:round(mouseY),
    red:r,
    blue:b,
    green:g,
    shape: shape
  };
  //emit this information to the server
  socket.emit('mousePositionData', mousePos);
}

function drawEllipseWithData(data) {
  fill(data.red, data.blue, data.green);
  if(data.shape ==0) {
    ellipse(data.x, data.y, 20,20);
  } else {
    rect(data.x, data.y, 20,20);
  }
  
}
