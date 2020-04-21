// Define Express
const exp = require('express');
const port = 3000;
const app = exp();

// Define Cors
const cors = require('cors');
app.use(cors());

// set web folder
app.use(exp.static('Demo'));

// Define body parser
const bodyparser = require('body-parser');
app.use(bodyparser.json());

// create server
const server = app.listen(port,function(req,res){
    console.log('Server Started');
});

// create get request
app.get('/index.html',function(req, res) {
    res.send('hello World');
});

// create post request
const data = [];
app.post('/add',function (req, res) {
    data.push(req.body);
    console.log(req.body);
});




