window.addEventListener('load', () => {
  let inputBox = document.getElementById('todo-item');
  inputBox.addEventListener('change', (e) => {
    console.log(e.target.value);
    //create a new li - let list = document.createElement('li'); list.innerHTML = e.target.value;
    // add it into the ul - select the ul using id, and "appendChild"
  })
})