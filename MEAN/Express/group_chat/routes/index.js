module.exports = function Route(app, server) {
  var session = require('express-session')({
    secret: 'codingdojorocks',
    resave: true,
    saveUninitialized: true
  });
  var sharedsession = require('express-socket.io-session');
  app.use(session);
  var io = require('socket.io').listen(server);
  io.use(sharedsession(session), {
    resave:true,
    saveUninitialized: true
  });

  var commentList = [];

  io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected! to id: ", socket.id);

    socket.on( "log_new_user", function (data){
        commentList.push({
          name : data.name,
          comment: "Joined!"
        });
        socket.handshake.session.name = data.name;
        socket.handshake.session.save();
        io.emit( 'present_comments', { comments: commentList });
    });

    socket.on( "add_message", function (data){
      commentList.push({
        name : socket.handshake.session.name,
        comment: data.message
      });
      socket.handshake.session.save();
      io.emit( 'present_comments', { comments: commentList });
    });

  });

}
