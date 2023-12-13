const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

//var jsonParser = bodyParser.json();

const port = 3000;

app.get('/', function (req, res) {
    res.send('hello World!')
})

app.post('/conversation', function (req, res) {
    console.log(req.body);
    res.send('baby don\'t hurt me no more')
})
app.listen(port)