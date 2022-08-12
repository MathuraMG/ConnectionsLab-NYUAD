let socket = io('/input');

socket.on('connect', () => {
  console.log('socket connected to server');
})

window.addEventListener('load',()=>{
  let buttonA = document.getElementById('vote-a');
  let buttonB = document.getElementById('vote-b');
  
  buttonA.addEventListener('click',()=>{
    socket.emit('votedA');
  })

  buttonB.addEventListener('click',()=>{
    socket.emit('votedB');
  })
})