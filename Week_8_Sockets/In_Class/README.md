# Steps:

1) go to folder -> `npm init`
2) add script in package.json -> `"start" : "nodemon index.js"`
3) create index.js in the root folder
4) install npm packages express and socket.io
```
npm install -s express
npm install -s socket.io
```
5) Created a public folder with index.html
6) Set up the server so that it can server the public folder
```
//in index.js
let express = require('express');
let app = express();
app.use('/', express.static('public'));
```
7) Make sure to include http server
```
let express = require('express');
let http = require('http');

let app = express();
let server = http.createServer(app);

app.use('/', express.static('public'));

server.listen(8800, () => {
  console.log("server is up and running")
})
```

8) In the client side - include the p5.js libraries, and include an app.js file.
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
```


## Include Sockets
1) Require the socket package
```
let io = require('socket.io');
```
2) Wrap sockets around the http server
```
io = new io.Server(server); // use socket.io on the http app
```
3) in the server check for socket connection
```
//sockets
io.sockets.on('connection', (socket) => {
  console.log("we have a new client: ", socket.id);
})
```
4) in client, tell it to connect to the server via sockets
	a) add the library to index.html
  ```
  <script type="text/javascript" src="/socket.io/socket.io.js"></script>
  ```
  b) write the code in js
  ```
  // opens and connect to socket
  let socket = io();

  //listen for confirmation
  socket.on('connect', () => {
    console.log("client connected via sockets");
  })
  ```

5) Add a disconnect function on the server so that you know when the sockets disconnect
6) in the client side, write a function to draw on mouse dragged
7) within the mouse drag function emit the mousePos information with the label mousePositionData
```
//emit information of mouse positon everytime i move mouse
function mouseDragged() {
  ellipse(mouseX, mouseY, 10,10);
  let mousePos = {x: mouseX, y:mouseY};
  //emit this information to the server
  socket.emit('mousePositionData', mousePos);
}
```
8) in the server, get the information within the socket connections
```
//listen for a message from this client
  socket.on('mousePositionData', (data) => {
    console.log(data);
  })
```
9) now, the server has to send this information to ALL the clients. this has to be done WITHIN the socket.oin in the server
```
io.sockets.emit('mouseDataFromServer', data);
```
10) the client on reciving this data has to draw an ellipse
so within setup,
```
 socket.on('mouseDataFromServer', (data)=> {
    drawEllipseWithData(data);
  })
```
11) here is the function definition for drawEllipseWithData 
```
function drawEllipseWithData(data) {
  fill(255,0,0);
  ellipse(data.x, data.y, 10,10);
}
```

## Notes for Glitch
when you upload on glitch make sure to do the following - 
* change `nodemon index.js` to `node index.js` in *package.json*
* in *index.js* make sure to add a variable port (code below)
```
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});
```

