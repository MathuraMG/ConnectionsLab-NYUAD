let express = require("express");
let app = express();
// let {helperFunction} = require('./new.js'); // METHOD 1
let helpers = require('./new.js'); // METHOD 2

app.get('/', (request, response) => {
  response.send("Hello");
});

app.listen(9000, () => {
  console.log("app is listening at localhost:3000");
  // helperFunction(); // METHOD 1
  console.log(helpers.helperFunction()); // METHOD 2
});