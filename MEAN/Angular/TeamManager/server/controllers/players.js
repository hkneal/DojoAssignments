const Player = require('mongoose').model('Player');

module.exports = {
    show: function(req, res) {
        // console.log('In Show');
        Player.find({}).then((players) => {
            res.json(players);
        }).catch((err) => {
            console.log(`Server Show Error: ${ err }`);
        });
    },
    get: function(req, res) {
        // console.log('In Show');
        Player.findOne({ _id: req.params.id }).then((player) => {
            res.json(player);
        }).catch((err) => {
            console.log(`Server Get Error: ${ err }`);
        });
    },
    create: function(req, res) {
        Player.create(req.body).then((player) => {
            console.log('successfully added a player!');
            res.json(player);
        }).catch(err => {
            console.log(`Server Create Error:  ${ err }`);
            res.status(500);
        });
    },
    update: function(req, res) {
        Player.findByIdAndUpdate(req.params.id, req.body).then((player) => {
            console.log('successfully updated player!');
            res.json(player);
        }).catch(err => {
            console.log(`Server Update Error: ${ err }`);
            res.status(500);
        });
    },
    remove: function(req, res) {
        Player.remove({ _id: req.params.id }).then(() => {
            console.log('successfully deleted player!');
            res.json(true);
        }).catch(err => {
            console.log(`Server Delete Error: ${ err }`);
            res.status(500);
        });
    }

}