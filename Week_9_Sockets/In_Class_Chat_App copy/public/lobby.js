window.addEventListener('load', () => {
  let form = document.getElementById('room-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); //this stops the regular form submission and allows us to write our own js
    let name = document.getElementById('name-input').value;
    let room = document.getElementById('room-input').value;
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('room', room);
    window.location = '/chat.html'
  })
})