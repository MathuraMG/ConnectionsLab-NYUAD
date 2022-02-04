let counter = 0;
console.log("in the js file");
window.addEventListener('load', function() {
  console.log('html has loaded!!!!');
  //initialise the counter value displayed
  document.getElementById('counter-display').innerHTML = counter;
 
  //create a button and add a click listener to it
  let button = document.getElementById("increase-button");
  button.addEventListener('click', function() {
    
    //increment value of counter
    counter++;
    console.log('button is clicked, counter: ', counter);
   
    // show the counter value
    document.getElementById('counter-display').innerHTML = counter;
  })

});

//STEP 1 : Created HTML elements - display + button
//STEP 2 : Create a counter variable, set value to 0
//STEP 3 : Add functionality to the button
// -  get the button in javascript
// - increment the counter value
//STEP 4 : Have the counter displayed on screen


// Suggestions to make the app more intuitive
// - make the counter value bigger
// - add a clear button
// - all elements should be bigger - center all the elements
// = move - to the left, and + to the right, counter value in the center
// have arrows on the top and bottom of number instead of + and - buttons
// if mobile, add the interaction on bottom