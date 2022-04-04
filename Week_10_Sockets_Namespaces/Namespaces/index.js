let express = require('express');
let app = express();
app.use('/', express.static('public'));

//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});

//Initialize socket.io
let io = require('socket.io');
io = new io.Server(server);

//create multiple namespaces
let outputSockets = io.of('/output');
let inputSockets = io.of('/input');

outputSockets.on('connection', (socket) => {
    console.log('output socket connected : ' + socket.id);
    socket.on('disconnect', () => {
        console.log('output socket disconnected : ' + socket.id);
    })
})

inputSockets.on('connection', (socket) => {
    console.log('input socket connected : ' + socket.id);
    socket.on('disconnect', () => {
        console.log('input socket disconnected : ' + socket.id);
    })
})