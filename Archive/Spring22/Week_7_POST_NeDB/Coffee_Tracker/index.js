let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

let coffeeTracker = [];

//route that gets the number of coffees had and stores it in the array
app.post('/noCups', (req, res)=> {
    console.log(req.body);
    let currentDate = Date();
    let obj = {
        date: currentDate,
        coffee: req.body.number
    }
    coffeeTracker.push(obj);
    console.log(coffeeTracker);
    res.json({task:"success"});
})

app.use('/', express.static('public'));
app.listen(5000, ()=> {
    console.log('listening at localhost:5000');
})

//add route to get all coffee track information
app.get('/getCups', (req,res)=> {
    let obj = {data: coffeeTracker};
    res.json(obj);
})
