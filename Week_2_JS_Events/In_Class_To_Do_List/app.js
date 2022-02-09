/**
 * 1. DONE | How to add elements - create an input area - HTML
 * 2. DONE | Option to add item to the list (button/ enter key) - HTML, add interactivity in JS
 * 3. Create a space to show the item that we entered (Add a checklist box) - do this in JS
 * 4. Check off an item and "remove" it 
 */

window.addEventListener('load', function() {

  let inputBox = document.getElementById('input-box');
  inputBox.addEventListener('change', function(e) {
    //get the value  inside the input box
    console.log(e.target.value);

    //create the list item
    let listItem = document.createElement('p');
    listItem.innerHTML = e.target.value;

    // find out where it goes, and append it there
    let list = document.getElementById('list');
    list.appendChild(listItem);
  })

})
