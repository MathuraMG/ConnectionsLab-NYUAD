let express = require("express");
let app = express();

app.get("/", (req, res)=> {
  res.send("Hello from my own server!!!");
})

app.listen(3000, () => {
  console.log("app is runnning");
})




// app.get("/apples",(req,res)=> {
  //   let obj = {
  //     "apples" : 10
  //   };
  //   res.json(obj);
  // })