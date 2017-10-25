const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render("index");
});

var server = app.listen(port, () => console.log(`Listening on port ${ port }`));

var route = require('./routes/index.js')(app, server);
