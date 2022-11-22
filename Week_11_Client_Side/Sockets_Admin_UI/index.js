let express = require('express');
let http = require('http');
let io = require('socket.io');
const { instrument } = require("@socket.io/admin-ui"); // for ADMIN-UI

let app = express();
let server = http.createServer(app); // wrap the express app with http
io = new io.Server(server, { // options added for ADMIN-UI
  cors: {
    origin: ["https://admin.socket.io"],
    credentials: true
  }
}); // use socket.io on the http app


instrument(io, { // for ADMIN-UI
  auth: false
});

app.use('/', express.static('public'));

//when a socket connects, take the socket object in callback, and display the id in the server
io.sockets.on('connect', (socket) => {
  console.log("we have a new client: ", socket.id);

  //drop a message on the server when the socket disconnects
  socket.on('disconnect', ()=> {
    console.log('socket has been disconnected: ', socket.id);
  })

  //listen for a message from this client
  socket.on('mousePositionData', (data) => {
    // console.log(data);
    io.sockets.emit('mouseDataFromServer', data);
  })

})



// server listening on port
server.listen(3000, () => {
  console.log("server is up and running")
})
