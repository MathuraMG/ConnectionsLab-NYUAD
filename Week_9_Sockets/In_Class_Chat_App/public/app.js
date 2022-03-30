// client connects to the server
let socket = io();

//confirm that the client is connected
socket.on('connect',() => {
  console.log('connected to the server');
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
  let submitButton = document.getElementById('send-button');
  
  submitButton.addEventListener('click', () => {
    let name = document.getElementById('name-input').value;
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

