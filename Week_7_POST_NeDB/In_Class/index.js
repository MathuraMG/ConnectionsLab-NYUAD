let express = require("express");
let Datastore = require('nedb'); 

//initialise app
let app = express();
//tell your express app to accept json information and parse it
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//intialise database
let db = new Datastore({
  filename:'posts.db',
  timestampData: true
}); //creates a new one if needed
db.loadDatabase(); //loads the db with the data

//app variables
let posts = [];

app.use(express.static('public'));

app.post('/message', (req,res) => {
  console.log(req.body);
  //add it into the db here?
  db.insert(req.body, function (err, newDoc) {   // Callback is optional
    console.log(newDoc)
  });
  res.json({"message": "OK"});
})

app.get('/messages', (req,res) => {
  let dataToSend;
  db.find({}, function (err, docs) {
    console.log(docs);
    dataToSend = {data: docs};
    res.json(dataToSend);
  });

  
})

app.listen(5000, () => {
  console.log("server is up");
})