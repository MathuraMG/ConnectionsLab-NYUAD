# Connections Lab - Week 8

## Class 1  - Tue Oct 25th | 9:55am - 11:10am GST

### Class Plan
* Housekeeping - Attendance + Camera
* Guest speaker on Thursday
* Recap - nedb and completed ChatLab Application
* Glitch! (everyone try it out)
* Project 2 - timeline and pairing
* Comfort level with git?
* Intro to sockets

### Recap + Glitch
* Check in on homework
* Recap nedb
* Upload example code to glitch 

### Project 2
* Discuss Project #2 - https://github.com/MathuraMG/ConnectionsLabSpring22/blob/master/syllabus.md#project-briefs

### Sockets
* Intro to Socket.io 
    * Go over to the website  - https://socket.io
    * Demo : chat and whiteboard app  - https://socket.io/get-started/
    * Compare traditional HTTP client server - req res relationships with socket.io clients and servers 
    * socket.io page and how to use it - https://socket.io/docs/v4/ 
* Workshop: drawing app (also show Chat app if time permits) 
    * Whiteboard the flow of information first 


## Class 2  - Thu Oct 27th | 9:55am - 1:35pm GST

### Workshop - Steps
* STEP 1 : CLIENT side setup, HTML , CSS, JS - https://drive.google.com/drive/folders/1XHnX2w18dEWi7dqij7222TZ_Hbgxmmm7?usp=sharing 
* STEP 2: Server side express and socket.io 
```
//Initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));
```
```
//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});
```

* STEP 3: Server side socket connection 
```
//Initialize socket.io
let io = require('socket.io');
io = new io.Server(server);
```
```
io.sockets.on('connection', function(socket) {
    console.log("We have a new client: " + socket.id);

    //Listen for this client to disconnect
    socket.on('disconnect', function() {
        console.log("A client has disconnected: " + socket.id);
    });
});
```

* STEP 4 : Client side socket connection 
```
//Open and connect socket
let socket = io();
//Listen for confirmation of connection
socket.on('connect', function() {
  console.log("Connected");
});
```

* STEP 5: Client side emit - what do we need to send? 
```
function mouseMoved() {
  //Grab mouse position
  let mousePos = { x: mouseX, y: mouseY };
  //Send mouse position object to the server
  socket.emit('data', mousePos);

  //Draw yourself? or Wait for server?
  // fill(0);
  // ellipse(mouseX, mouseY 10, 10);
}
```

* STEP 6 : Server side “on” - what do we do when we receive information from the server? 

* STEP 7: Server side “emit” - share the information received from the client with other clients 
```
//Listen for a message named 'data' from this client
    socket.on('data', function(data) {
        //Data can be numbers, strings, objects
        console.log("Received: 'data' " + data);

        //Send the data to all clients, including this one
        //Set the name of the message to be 'data'
        io.sockets.emit('data', data);

        //Send the data to all other clients, not including this one
        // socket.broadcast.emit('data', data);

        //Send the data to just this client
        // socket.emit('data', data);
    });
```
* STEP 8: Client side “on” - now that the information is shared with all the clients, what should we do with it? 
```
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  //Listen for messages named 'data' from the server
  socket.on('data', function(obj) {
    console.log(obj);
    drawPos(obj);
  });
}
function drawPos(pos) {
  fill(0);
  ellipse(pos.x, pos.y, 10, 10);
}
```

Try and make changes to this now!
* Change the shape sent 
* Randomise the colours for each user and send that information across as well 

### Homework
MAKE a Node-Express app that incorporates Socket.io. You are welcome to continue working with a previous project or start a new one. Try to incorporate the following:
* At least one ‘emit’ event on the server-side and one ‘emit’ event on the client-side
* The ability to open 2 browser tabs and share data in real-time between the two

