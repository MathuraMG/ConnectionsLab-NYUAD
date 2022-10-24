let express = require("express");
let app = express();

app.get("/", (req, res)=> {
  res.send("hello this is different");
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
