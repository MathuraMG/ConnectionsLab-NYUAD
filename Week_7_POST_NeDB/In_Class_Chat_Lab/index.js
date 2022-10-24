let express = require("express");
let app = express();
app.use(express.json());

let Datastore = require("nedb");
let db = new Datastore("chat.db");
db.loadDatabase();


// let msgs = [];

app.use('/', express.static('public'));

app.post('/message', (req,res) => {
  // msgs.push(req.body);
  db.insert(req.body, (err, newDoc) => {
    if(err) {
      res.send({"task" :"failed"})
    } else {
      res.send({"latestMsg" : req.body});
    }
  })
  // console.log(msgs);

})

app.get('/messages', (req,res) => {
  db.find({}).sort({ updateAt: 1 }).exec(function (err, docs) {
    if(err) {
        res.json({task: "task failed"})
    } else {
        let obj = {msgs: docs};
        res.json(obj);
    }
  });

})


app.listen(3000, () => {
  console.log("app is runnning");
})
