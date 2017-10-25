const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "./client/static")));
// app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

const routes_setter = require('./server/config/routes.js');
routes_setter(app);

var server = app.listen(port, () => console.log(`Listening on port ${ port }`));
