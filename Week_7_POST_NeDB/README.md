#Week 7 - Class 1
##March 8 - 10:25am - 11:40am

###Class Today
* Housekeeping - attendance
* Go through assignments
* Recap - any questions?
* Nodemon
* POST request

**Recap**
* What is node?
* What is Express
* Routes and sending information over them
* Using query and params
* Serving static pages

**Nodemon**
* Up until now, we have had to restart the server everytime we make a change.
* There is a node package that will automatically do this for us - `nodemon`
* Go ahead and install it globally in your system by saying `npm install -g nodemon`. You can run it from any location.
* This will install it across your system as opposed to just this one project
* now go ahead and make a change to your server. You will automatically see it refresh

**POST request**
* POST is used to send data to a server to create/update a resource.
* STEPS (to make a "chirp" application)
1. CLIENT - add an input box + button
```
    <section>
      <input id="msg-input"/>
      <button id="msg-submit"> Submit </button>
    </section>
```

2. CLIENT - add an event listener that gets the value of the string in the input box on click event
```
window.addEventListener('load', function(){
  let msgButton = document.getElementById("msg-submit");
    msgButton.addEventListener('click', function(){
        let msg = document.getElementById("msg-input").value;
        console.log(msg);
      })
})
```

3. CLIENT - on clicking, create a fetch POST request to the server
  a. First create an object of the info you want to sent
  b. JSON.stringify the object
  c. Pass it in the the fetch post request
  ```
  let msgObject = {
          "msg" : msg
        }
        let msgObjectJSON = JSON.stringify(msgObject);
        console.log(msgObjectJSON);

        //Send the data to the server
        fetch('/message', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: msgObjectJSON
        })
        .then(res => res.json())
        .then(data => {  console.log(data )})
```

4. SERVER - add a post route to your app, console.log req and req.body
  a. NOTE: remember to send back a response, otherwise the client will keep waiting for a response
  ```
  app.post('/message', (req, res) => {
    console.log(req);
    console.log(req.body);
    res.send({task: "success"});
  })
  ```

5. Run the example
  a. You will notice that req has data, but req.body is undefined
  b. This is because the server does not know how to parse the data yet.

6. SERVER - Include the below lines in your code. This is so that the server can go through the information in its appropriate format.
```
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
```

7. SERVER - check req.body now

8. SERVER - save this message on an array in the server
  `messages.messages.push(req.body.msg);`

9. Now we can create a GET request on the SERVER that returns all the chirps/messages. We can then fetch this from the client to verify that everything is there

SERVER
```
app.get('/messages', (req,res) => {
  res.json(messages);
})
```

CLIENT
```
let viewMsgButton = document.getElementById("view-msgs");
viewMsgButton.addEventListener('click', function(){
    fetch('/messages')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.messages.forEach(msg=> {
        let li = document.createElement('li');
        li.innerHTML = msg;
        document.getElementById('msgs').appendChild(li);
        console.log(msg)
      })
    })
})
```

10. Now when we refresh - we lose everything!! Let's add a database!



### Misc Notes
* Note :If you are using a version of express lesser than v4.16.0, you may need to use a npm package called body-parser. Details on that included below
```
// Express v4.16.0 and higher
// --------------------------
const express = require('express');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// For Express version less than 4.16.0
// ------------------------------------
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
```
* A stackoverflow answer I enjoyed on express parser



## What is NeDB ? What is a database? What is a NoSQL database?
* Description
* An “In-Memory” Database - lives “with the server”
* A NoSQL Database - a “non-relational” database

*  STEPS to add it in the code - all taken from here - https://www.npmjs.com/package/nedb
1. Install : npm install --save nedb
1. Include it in index.js
```
//DB initial code
let Datastore = require('nedb');
let db = new Datastore('coffee.db'); //creates a new one if needed
db.loadDatabase(); //loads the db with the data
```

1. In the post route in the server, remove the lines that save the messages into the local array
```
  // messages.messages.push(req.body.msg);
  // res.send({task: "success"});
```

And create an object to save in the DB instead (added date to this as well)
```
let currentDate = Date();
let obj = {
    date: currentDate,
    message: req.body.msg
}

db.insert(obj,(err, newDocs)=>{
    if(err) {
        res.json({task: "task failed"});
    } else {
        res.json({task:"success"});
    }

})
```
1. In the GET route, use the db.find function to retrieve all the messages.
```
db.find({}, (err, docs)=> {
       if(err) {
           res.json({task: "task failed"})
       } else {
           let obj = {messages: docs};
           res.json(obj);
       }
   })
```
REMEMBER - we have to make changes on the client side code so that we can access the object. Right now, it will display [Object object]
