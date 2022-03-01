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


Brief steps to get your first server running
1. Create a project folder where you want to create your server
1. Navigate to that folder in your terminal using cd
1. Once inside the folder, run `npm init`
1. The following questions can all be answered by pressing the Enter Key
1. In the same location, you can also go ahead and install the express node package we need by saying `npm install --save express`
1. Once this step is done, open the folder in vscode, you should see a package.json file, and a node_modules folder.
1. Create an index.js file in the same folder
1. In index.js, type the below code.
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
11. The next snippet tells the server to listen to the browser on port 3000.
```
app.listen(3000, ( ) => {
    console.log("app is listening at localhost:3000");
});
```


