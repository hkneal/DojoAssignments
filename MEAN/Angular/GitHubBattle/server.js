const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./BattleFrontEnd/dist")));

require('./server/config/mongoose.js');

app.use('/api', require('./server/config/routes/routes.js'));
app.use(require('./server/config/routes/catch-all.js'));
// const routes_setter = require('./server/config/routes.js');
// // invoke the function stored in routes_setter and pass it the "app" variable
// routes_setter(app);

var server = app.listen(port, () => console.log(`Listening on port ${ port }`));