window.addEventListener("load", () => {

  //get messages from server every 2 seconds
  setInterval(() => {
    console.log("checking for messages every 2 seconds");
    refreshMsgs();
  }, 2000);


  let chatForm = document.getElementById("chat-form");
  // on form submission
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let chatName = document.getElementById("chat-name").value;
    let chatMsg = document.getElementById("chat-msg").value;
    console.log("chat sent!", chatName, chatMsg);

    let msgObj = {
      "name" : chatName,
      "msg" : chatMsg,
      "updateAt" : new Date()
    };

    let msgObjJSON = JSON.stringify(msgObj);
    console.log(msgObjJSON);

    fetch('/message', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: msgObjJSON
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  })
})


function refreshMsgs() {
  console.log("inside refresh messages")
  fetch('/messages')
  .then(res => res.json())
  .then(data => {

    console.log(data, document.getElementById("chat-msgs"));
    document.getElementById("chat-msgs").innerHTML = "";
    let allChats = data.msgs;
    allChats.forEach((chat) => {
      let chatContainer = document.createElement('li');
      let nameElt = document.createElement('p');
      let msgElt = document.createElement('p');
      nameElt.innerHTML= chat.name;
      msgElt.innerHTML = chat.msg;
      chatContainer.classList.add("chat__list-item");
      nameElt.classList.add("chat__list-item-name");
      msgElt.classList.add("chat__list-item-msg");

      //append all the elements as per their hierarchy
      chatContainer.appendChild(nameElt);
      chatContainer.appendChild(msgElt);
      document.getElementById("chat-msgs").appendChild(chatContainer);


    })

      //clear out the HTML div that contains all the messages
      //add all the new messages that we have
  })
}


/* what happens on form submission?
1. get the value of what the user typed - DONE
2a. Sent message to the server - DONE
2b. store the message on server side
3. display the chat message on screen

*/
