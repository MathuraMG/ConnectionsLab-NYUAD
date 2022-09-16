window.addEventListener('load', function() {
  fetch('https://api.le-systeme-solaire.net/rest/bodies') //access the json
  .then(response => response.json())
  .then(data => { // access the data IF the promise is fulfilled
    console.log(data);
    let desc = data.bodies[0].name; // accessing the "description" property of the object "data"
    let p = document.createElement('p');
    p.innerHTML = desc;
    p.classList.add("content");
    document.body.appendChild(p);
  })
  .catch(e => {
    console.log('there is an error', e);
  })
})




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


