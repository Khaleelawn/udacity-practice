// create express
const exp = require('express');
const app = exp();

// require cors
const cors = require('cors');
app.use(cors());

// require body parser
const bdyPrser = require('body-parser');
app.use(bdyPrser.json());

// point project Folder
app.use(exp.static('Project'));

//create Server
const port = 3001;
app.listen(port, function(){
    console.log(`Server Running in Port No. ${port}`);
});

// make get request
app.get('/', function(req, res) {
    res.send('index.html');
});

// make post request
let data = {};
app.post('/add', function(req, res) {
    data = req.body;
    res.send(data);
    console.log("Request Body "+req.body);
});

app.get('/add', function(req, res){
    res.send(data);
});
