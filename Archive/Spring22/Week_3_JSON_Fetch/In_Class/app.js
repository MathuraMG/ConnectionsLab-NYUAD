let allColours;
window.addEventListener("load", () => {
  console.log("page is loaded");

  //*****************/
  //Display the colour inside the colour box
  //*****************/



  fetch("./crayola.json") // fetching the information from the URL/ file
  .then( response  =>  response.json() )  // returning the Promise Object which contains data
  .then((data) => {
    console.log(data); // seeing the data
    allColours = data.colors;
    // Create html elements that are of the colours in the array

    for(let i=0; i<allColours.length;i++) {
      // debugger;

      // create an li for each colour , and give it the class "list__item"
      let listItem = document.createElement('li');
      listItem.classList.add("list__item");
      // add style backgroundColor to each item
      listItem.style.backgroundColor = allColours[i].hex;
      listItem.textContent = allColours[i].hex;


      //add a p tag
      let listItemColor = document.createElement("p");
      listItemColor.classList.add("list__item-color");
      listItemColor.innerHTML = allColours[i].color;

      // get the list element using the id "list"
      let list = document.getElementById("list");
      
      //append the li to the ul
      list.appendChild(listItem);
      listItem.appendChild(listItemColor);

    }

  })

})

// 1. remove "function()arg" -- "(arg) => "
// 2. remove the {} if there is only online, and delete return
// 3. if its only 1 argument, you can remove the brackets. ie " (arg) =>"  -- "arg =>"


