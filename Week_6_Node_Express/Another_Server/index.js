let campusCats = {
  laalo : {
    colour : "orange",
    hangout : "D2",
    age: 2
  },
  grumpy : {
    colour : "black",
    hangout : "C2", 
    age : 4
  },
  snow : {
    colour : "white",
    hangout : "A5",
    age: 10
  }
}

//included the express module/package
let express = require('express');

//created an object app from express
let app = express();

// what should we actually serve?

app.use('/', express.static('public')); // http://expressjs.com/en/5x/api.html#express.static

app.get('/about', (req,res) => {
  res.send("this page is about me");
})

//serving JSON
app.get('/cats', (req,res) => {
  let minAge = req.query.ageGreaterThan;

  olderCampusCats = {};
  // respond with a json of cats greater than a certain age
  for(catName in campusCats) // loops through the keys in campusCats 
  {
    let cat = campusCats[catName];
    if(cat.age >= minAge) {
      olderCampusCats[catName] = cat;
    }
  }

// add conditions so that when user asks for all cats with no queries, the API should still work
  if(minAge) {
    res.json(olderCampusCats);
  } else {
    res.json(campusCats);
  }
})

app.get('/cats/:cat', (req,res) => {
  console.log(req.params.cat);
  let name = req.params.cat;
  if(!campusCats[name]) {
    res.json({error : "data not available"})
  } else {
    res.json(campusCats[name]);
  }
})

// what port should we listen to?
app.listen(9000, () => {
  console.log("the server is up and running!");
})