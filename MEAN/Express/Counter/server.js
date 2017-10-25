const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));
app.use(session({secret: 'codingdojorocks', resave: true, saveUninitialized: true}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  req.session.count = ++req.session.count || 1;
  let postData = req.session.count;
  res.render("index", { postData });
});

app.post('/addtwo', function(req, res) {
 req.session.count += 1;
 res.redirect('/');
});

app.post('/reset', function(req, res) {
 req.session.destroy();
 res.redirect('/');
});

app.listen(port, () => console.log(`Listening on port ${ port }`));
