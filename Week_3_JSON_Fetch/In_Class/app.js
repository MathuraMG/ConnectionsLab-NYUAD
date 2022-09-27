

fetch('https://v2.jokeapi.dev/joke/Any')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



// To go over the button event lsiteners//
/*
window.addEventListener('load', function() {
  //get access to all the buttons
  let buttons = document.getElementsByClassName('button');
  //iterating through the buttons
  for(let i =0;i<buttons.length;i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener('click',function(e) {
      console.log(e.target.dataset.fruit);
    })
  }
})
*/


