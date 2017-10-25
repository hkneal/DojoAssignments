const notes = require('../controllers/notes.js');
// const router = require('express').Router();

// module.exports = router

// .get('/', notes.show)
// .post('/', notes.create);

module.exports = function(app) {

    app.get('/notes', function(req, res) {
        console.log('In Route');
        notes.show(req, res)
    });

    app.post('/notes', function(req, res) {
        notes.create(req, res)
    });
}