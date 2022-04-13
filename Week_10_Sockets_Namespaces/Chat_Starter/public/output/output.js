let socket = io('/output');

socket.on('connect', () => {
  console.log('socket connected to server');
})

socket.on('votes', (data)=> {
  console.log(data);
})