// const mongoose = require('mongoose');
// const Message = mongoose.model('Note');
// Same as...
const Note = require('mongoose').model('Note');

module.exports = {
    create: function(req, res) {
        Note.create(req.body).then((note) => {
            console.log('successfully added a note!');
            res.json(note);
        }).catch(err => {
            console.log(`We caught an error ${ err }`);
            res.status(500);
        });
    },
    show: function(req, res) {
        // console.log('In Show');
        Note.find({}).then((notes) => {
            res.json(notes);
        }).catch((err) => {
            console.log(`Error: ${ err }`);
        });
    }
}