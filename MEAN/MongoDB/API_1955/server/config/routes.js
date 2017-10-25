const names = require('../controllers/names.js');
module.exports = function(app) {

  app.get('/', function(req, res) {
    names.show(req, res)
  });

  app.get('/new/:name/', function(req, res) {
    names.create(req, res)
  });

  app.get('/remove/:name/', function(req, res) {
    names.removeName(req, res)
  });

  app.get('/:name', function(req, res) {
    names.getOne(req, res)
  });

  app.get('/favicon.ico', function(req, res) {
    console.log("caught");
    res.redirect("/");
  });

}
