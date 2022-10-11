let express = require("express");
let app = express();
const PORT = 3000;

// let midterms = ["a", "b","c"];
let midterms = {
  "cso": {
    "name" : "Computer Systems Organisation",
    "date" : "12-Oct-22"
  }, 
  "cn": {
    "name" : "Computer Network",
    "date" : "12-Oct-22"
  }, 
  "geps" : {
    "name" : "global economic political",
    "date" : "13-Oct-22"
  }
}

app.use("/", express.static("public"));

// if I got to the route /next, should see the name of the next midterm
app.get("/next", (req,res)=>{
  res.send("CSO");
})

//if we go to the route /midterms, we should see a json of all the midterms
app.get("/midterms", (req,res) => {
  console.log(req.query.userselectedcourse);
  let courseName = req.query.userselectedcourse;
  if(midterms[courseName]) {
    res.json(midterms[courseName])
  } else {
    res.json({"name" : "this course does not"});
  }
})








app.get("/midterm/:selectedcourse",(req,res) => {
  let courseName = req.params.selectedcourse;
  console.log(courseName);
  res.json(midterms[courseName]);
})


//spin up a server on port 3000
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
})