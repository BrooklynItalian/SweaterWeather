const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

const path = require('path');

var http = require('http');
var fs = require('fs');


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

app.use(express.static('public'))

let weatherData = {};
let userData = {};

require("./app/routes/user.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// simple route
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname+'/index.html'));
  res.json({ message: "Hello Professor." });
  
  // res.send('Hello')
});

app.get('/allUsers', sendUsers);
function sendUsers (req, res)
{
  res.send(userData);
};


app.get('/allWeather', sendData);
function sendData (req, res)
{
  res.send(weatherData);
};

//Post route

app.post('/addWeather', addData);

function addData (req,res)
{
  newData =
  {
    temp: req.body.temp,
    date: req.body.date,
    content: req.body.content
  }
  weatherData=newData
  res.send(weatherData)
}