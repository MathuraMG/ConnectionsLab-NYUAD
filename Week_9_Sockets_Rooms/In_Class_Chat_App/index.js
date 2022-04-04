const MAX_USERS_ROOM =  2;
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

//create a variable to store ALL messages since server started
let messages = []; // TODO : remember that since we have rooms now, this variable is not the best idea. Either we should add the room data too, or creatae multiple arrays within
let rooms = {}; // key value pair - 'roomname' : number of people in room
let users = {}; // key value pair - 'username' : userid
 
//when client tries to connect to server
io.sockets.on('connect', (socket)=> {
    console.log('new socket connection ,' , socket.id);

    //get user data
    socket.on('userData', (data) => {
        //save user name in an array
        socket.name = data.name;
        users[socket.name] = socket.id;

        console.log(users);

        // MODIFIED POST CLASS - limiting number of people in room
        if(rooms[data.room]) { //is the room already there?
            if(rooms[data.room]< MAX_USERS_ROOM) {
                //let the socket join room of choice
                socket.roomName = data.room; // we will add this data to the socket only after we can verify that there is space
                socket.join(socket.roomName);
                rooms[socket.roomName]++;
            } else {
                socket.emit('maxUsersReached');
            }
        } else {
            socket.roomName = data.room;
            socket.join(socket.roomName);
            rooms[socket.roomName]=1;   
        }

        console.log(rooms);
        
    })


    //send old messages
    let data = {oldMessages: messages};
    socket.emit('pastMessages', data );
    //on disconnection
    socket.on('disconnect', ()=> {
        console.log('connection ended, ', socket.id);
        rooms[socket.roomName]--;
        delete users[socket.name];
    })

    //on receiving chat message
    socket.on('chatMessage', (data) => {
        messages.push(data); //TODO : we should NOT be saving all the messages in the same array
        console.log(messages); 
        //emit the data to clients in THAT room
        io.to(socket.roomName).emit('chatMessage',data);
    })

    //on rec someone is typing
    socket.on('userTyping',() => {
        console.log('user is typing')
        io.to(socket.roomName).emit('userTyping');
    })
})

//run the createServer
let port = process.env.PORT || 4000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});
