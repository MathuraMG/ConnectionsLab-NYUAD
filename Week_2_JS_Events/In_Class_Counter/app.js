let count = 0;

window.addEventListener('load', () => {
  console.log('page loaded');

  //set the counter initial value
  let counterResult = document.getElementById("counter-result");
  counterResult.innerHTML = count;

  //get access to the button
  let addButton = document.getElementById('counter-button-add');

  addButton.addEventListener('click', () => {
    count += 1; // count = count + 1;
    counterResult.innerHTML = count;
  })

  //get access to the button
  let subButton = document.getElementById('counter-button-subtract');

  subButton.addEventListener('click', () => {
    count -= 1; // count = count + 1;
    counterResult.innerHTML = count;
  })


  //scroll event listener
  document.addEventListener('scroll', () => {
    console.log('scrolling');
  })
});

/*
window.addEventListener('load', function() {
  console.log('page loaded');
});
*/

/*
window.addEventListener('load', loadPage);

function loadPage() {
  console.log('page loaded');
};

*/