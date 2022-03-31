//Initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));

//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);

//Initialize socket.io
let io = require('socket.io');
io = new io.Server(server);

//create a variable to store all messages since server started
let messages = [];

//store all users
let users = {};

//when client tries to connect to server
io.sockets.on('connect', (socket)=> {
    console.log('new socket connection ,' , socket.id);



    //add cliecnt to room and users object
    
    socket.on('roomJoin', (data) => {
        socket.name = data.name;
        socket.room = data.room;
        socket.join(socket.room);
        users[socket.name] = socket.id;
        console.log(users);
    })

    //send old messages
    let data = {oldMessages: messages};
    socket.to(socket.room).emit('pastMessages', data );
    //on disconnection
    socket.on('disconnect', ()=> {
        console.log('connection ended, ', socket.id);
        delete users[socket.name];
        console.log(users);
    })

    //on receiving chat message
    socket.on('chatMessage', (data) => {
        messages.push(data);
        console.log(messages);
        //emit the data to ALL clients
        io.to(socket.room).emit('chatMessage',data);
    })

    //on rec someone is typing
    socket.on('userTyping',() => {
        console.log('user is typing')
        io.to(socket.room).emit('userTyping');
    })
})

//run the createServer
let port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});
