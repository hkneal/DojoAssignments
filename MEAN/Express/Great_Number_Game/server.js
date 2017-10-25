const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
var session = require('express-session');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use(session({secret: 'codingdojorocks', resave: true, saveUninitialized: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  req.session.random_num = getRandomInt(1, 101);
  let postData = "";
  console.log(`Our number is ${ req.session.random_num }`);
  res.render("index", { postData });
});

app.post('/checkGuess', function(req, res) {
  let postData = {
    numGuessed : req.body.numGuessed,
    guessedRight : false,
    guessedLow : false,
    guessedHigh : false,
  }
  if(postData.numGuessed == req.session.random_num) {
    postData.guessedRight = true;
  }
  else if (postData.numGuessed > req.session.random_num) {
    postData.guessedHigh = true;
    postData.guessedRight = false;
  }
  else {
    postData.guessedLow = true;
    postData.guessedRight = false;
  }
  res.render("index", { postData });
});

app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

app.listen(port, () => console.log(`Listening on port ${ port }`));
