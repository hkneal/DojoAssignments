const messages = require('../controllers/messages.js');
const comments = require('../controllers/comments.js');
module.exports = function(app) {

  app.get('/', function(req, res) {
    messages.show(req, res)
  });

  app.post('/message', function(req, res) {
    messages.create(req, res)
  });

  app.post('/comment/:id', function(req, res){
    comments.create(req, res)
    });

}
