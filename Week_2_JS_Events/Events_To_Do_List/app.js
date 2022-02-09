window.addEventListener("load", () => {
  let inputBox = document.getElementById("container__input");

  //add item to list when entered in the input box
  inputBox.addEventListener("change", (e) => {
    
    //create the required elements
    let list = document.getElementById("list");
    let listItem = document.createElement("li");
    let listContent = document.createElement("p");
    let doneButton = document.createElement("button");

    //give the list item the required values
    listContent.innerHTML = e.target.value;
    let listId = e.target.value.replace(/\s/g, '');
    listItem.classList.add("list__item");
    listItem.id = listId;
    doneButton.innerHTML = "DONE";
    doneButton.classList.add("list__button");

    list.appendChild(listItem);
    listItem.appendChild(listContent);
    listItem.appendChild(doneButton);
    doneButton.setAttribute("data-id", listId);
    inputBox.value = "";

    //what happens when you click the DONE button
    doneButton.addEventListener('click', (e) => {
      let item = document.getElementById(e.srcElement.dataset.id);
      item.classList.add("list__item--done")
    })
  });
  
})