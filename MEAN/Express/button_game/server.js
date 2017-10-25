const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
var session = require('express-session')({
  secret: 'codingdojorocks',
  resave: true,
  saveUninitialized: true
});
var sharedsession = require('express-socket.io-session');

app.use(express.static(path.join(__dirname, "static")));
app.use(session);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render("index");
});

var server = app.listen(port, function() {
 console.log(`Listening on port ${ port }`);
});
var io = require('socket.io').listen(server);
io.use(sharedsession(session), {
  resave:true,
  saveUninitialized: true
});

io.sockets.on('connection', function (socket) {
  console.log("Client/socket is connected! to id: ", socket.id);

  socket.on( "button_clicked", function (){
      socket.handshake.session.count = ++socket.handshake.session.count || 1;
      socket.handshake.session.save();
      io.emit( 'updated_count', {count:  socket.handshake.session.count});
  });

  socket.on( "reset_hit", function (){
    delete socket.handshake.session.count;
    socket.handshake.session.save();
    io.emit( 'updated_count', {count: 0});
  });
});
