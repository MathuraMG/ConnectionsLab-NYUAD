// client connects to the server
let socket = io();

//confirm that the client is connected
socket.on('connect',() => {
  console.log('connected to the server');
  // now that client has connected to server, emit name and room information
  let data = {
    'name' : sessionStorage.getItem('name'),
    'room' : sessionStorage.getItem('room')
  }
  socket.emit('userData', data);
})


// ADDED POST CLASS - limiting number of people in room
socket.on('maxUsersReached',() => {
  alert('This room is full. Please go back and try to join another room');
  // you can add more steps here. Grey out the chat box, etc.
})

//receive old messages
socket.on('pastMessages', (data) => {
  console.log(data);
})

socket.on('userTyping', () => {
  console.log('user is typing');
})

//receive the information from the server
socket.on('chatMessage',(data) => {
  console.log(data);
  let chatWindow = document.getElementById('chat-box-msgs');
  let chatMessageArea = document.createElement('p');
  chatMessageArea.innerHTML = data.name +  " : " + data.msg;
  chatWindow.appendChild(chatMessageArea);
})

//2) get the input from the user, on click event we get the information (c)

window.addEventListener('load', () => {
  
  let userName = document.getElementById('user-name');
  userName.innerHTML = sessionStorage.getItem('name');


  let chatForm = document.getElementById('chat-form');
  
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = sessionStorage.getItem('name');
    let msg = document.getElementById('msg-input').value;
    console.log(name, msg);

    //emit the information to the server
    chatObject = {
      'name': name,
      'msg': msg
    }
    socket.emit('chatMessage', chatObject);
  })

  //code to see if any user is typing
  let messageInput = document.getElementById('msg-input');
  messageInput.onkeypress = () => {
    console.log('typing')
    socket.emit('userTyping');
  }

})

