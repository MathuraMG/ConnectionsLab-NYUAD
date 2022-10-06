## Class Plan

### Class 6 - Part 1
* Housekeeping - project grades, attendance
* What is module 2 about?
* What is node.js
* Set up the terminal and node - https://nodejs.org/en/
* Node.js
  * Check if it is already installed in your system
  * Run node in terminal
  * Write a js program and run it from the terminal
  * How to open VSCode from terminal - https://code.visualstudio.com/docs/setup/mac
* npm modules
  * What is an npm module
  * What is [express](https://www.npmjs.com/package/express) 
  * Run your first server!   

### Some terminal commands
* `cd folder1/folder2` - change directory to new folder
* `cd ../` - go one folder level back
* `pwd` - present working directory | In windows - `cd` - current directory
* `ls` - list everything in the present folder | Windows `dir`
* `ls -a` - list "all", includinh hidden files and folders

Brief steps to get your first server running
1. Create a project folder where you want to create your server
2. Navigate to that folder in your terminal using cd
3. Once inside the folder, run `npm init`
4. The following questions can all be answered by pressing the Enter Key
5. In the same location, you can also go ahead and install the express node package we need by saying `npm install --save express`
6. Once this step is done, open the folder in vscode, you should see a package.json file, and a node_modules folder.
7. Create an index.js file in the same folder
8. In index.js, type the below code.
  `let express = require(‘express’);`
  This code snipped allows us to bring express into the program.
1. Add the next line of code. 
  `let app = express();`
  This says to create an object app that we will be using to create the routes for the server
1. Add the below snippet. This chunk of code tells the server what to do when a client is trying to GET information from the ‘/’ route.
```
app.get('/', (request, response) => {
  response.send("Hello");
});
```
1. The next snippet tells the server to listen to the browser on port 3000.
```
app.listen(3000, ( ) => {
    console.log("app is listening at localhost:3000");
});
```

### Class 6 - Part 2
* Attendance
* Recap
  * Go over Express and Node
  * Go over Request and Response
  * Go over GET and POST

* Create additional Routes 
  * we can control responses, interpret requests and determine what exactly gets sent back to the server. 
  * Think of routes as event listeners on the server. If on the client we created logic to know what to do when a user clicks on an item, on the server we're creating logic to know what to do when a user makes a certain request. 
  * We define them and then the server is ready and waiting to respond to any type of request that comes in.
  * TODO : Create multiple routes

* Serving JSON and making your own API!
  * Just like we send responses which are text, we can send jsons too using response.json
  * If you think about it, this means we have created an API that can be used by others as well
  * You can also create multiple routes using req.params 
  * The Route can also recieve "variables" of sorts using req.
  * https://expressjs.com/en/guide/routing.html

* Serving a static folder
  * Just like we were using go live to serve up our web pages, we can do the same here using this code snippet - `app.use('/', express.static('public'));`
  * Ensure that your public folder has the files that need to be served
  * Now finally,let's tie this all together and use the API that you made and access it in your code using fetch.

* Points to remember
  * We now have 2 consoles to think off. The front end console is in the browser, and the servers is in the terminal
  * Remember to restart your server anytime you make a backend change. (There are easier ways to do this - we will look at them next week) 
  * Remember to refresh your browser page anytime you make a front end change
  * Since we are now working full stack, it is not possible to share github pages links anymore, as github only hosts front end pages. 


## Assignment
* MAKE a Node-Express app that serves a web page. This webpage should use an API that you need to fetch. The API should be from your server (a custom API). Make atleast 1 API that uses .params or query.
* DOCUMENT your progress and learnings from the making your first server in this class
* For this assignment you do not need to submit a working link. You can upload your code folder into this [google folder](https://drive.google.com/drive/folders/1OeZTE6uEKJ-qA1R-U0wX-MnoZMoYudoy?usp=sharing). Save the folder as <NAME>_<ASSIGNMENT_NAME> (NOTE: Do not upload the node_modules or package-lock.json)
* If you would like some extra practice, a good exercise would be to try and serve your Project #1. You should be able to launch your app from the command line using node, open your web browser, and see your project running.


 


