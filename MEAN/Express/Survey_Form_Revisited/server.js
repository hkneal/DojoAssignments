const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render("index");
});

// app.post('/result', function(req, res) {
//  let postData = req.body;
//  res.render('results', { postData });
// });

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected!");
  console.log("Client/socket id is: ", socket.id);
  // all the server socket code goes in here
  socket.on( "posting_form", function (data){
      // console.log( 'Someone clicked a button!  Reason: '  + data.formData);
      let message = "You emitted the following information to the server: ";
      for(const formObject of data.formData){
        message += formObject.name + ": " + formObject.value + " ";
      }
      socket.emit( 'updated_message', {response:  message});
      socket.emit( 'random_number', {response:  getRandomInt(1, 1001)});
  });
});
