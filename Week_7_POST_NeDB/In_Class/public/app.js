console.log("hello");
window.addEventListener("load", ()=> {

  //fetch the /messages api and load the information. Show it on the "feed" section when the page loads

  //hide the pop over on start
  let createPostDiv = document.getElementById("create__container");
  createPostDiv.style.display = "none";

  // button to display "create new post"
  let newPostButton = document.getElementById("new__button");
  newPostButton.addEventListener("click", () => {
    console.log("button clicked");
    if(createPostDiv.style.display == "flex") {
      createPostDiv.style.display = "none";
    } else {
      createPostDiv.style.display = "flex"
    }
  })

  //submit the post after its been created
  let createPostButton = document.getElementById("create__button");
  createPostButton.addEventListener("click", () => {
    //taken the name and post details from the input fields
    let cName = document.getElementById("name").value;
    let cPost = document.getElementById("post").value;

    //creating the object we want to send over the server
    let data = {
      name: cName,
      post: cPost
    }

    //send it over the server
    let msgObjectJSON = JSON.stringify(data);
    console.log(msgObjectJSON);

  //   //Send the data to the server
    fetch('/message', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: msgObjectJSON
    })
    .then(res => res.json())
    .then(data => { console.log(data)})


  })
})