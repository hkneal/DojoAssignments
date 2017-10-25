const Bike = require('mongoose').model('Bike');
const User = require('mongoose').model('User');
const multer = require('multer');
const storage = multer.diskStorage({ //multers disk storage settings
    destination: function(req, file, cb) {
        // cb(null, './uploads/');
        cb(null, './market/src/assets/images/');
    },
    filename: function(req, file, cb) {
        var datetimestamp = Date.now();
        // cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
        cb(null, file.originalname);
    }
});

const upload = multer({ //multer settings
    storage: storage
}).single('file');

module.exports = {
    upload: function(req, res) {
        upload(req, res, function(err) {
            console.log(req.file);
            if (err) {
                res.json({ error_code: 1, err_desc: err });
                return;
            }
            res.json({ error_code: 0, err_desc: null });
        });
    },

    show: function(req, res) {
        // console.log('In Show');
        Bike.find({}).populate('_user').exec(function(error, bikes) {
            if (error) {
                console.log(`There was an error retrieving bikes: ${ error }`);
                res.status(500);
            } else {
                console.log("Successfully Populated Bikes");
                res.json(bikes);
            }
        });
    },
    get: function(req, res) {
        // console.log('In Show');
        Bike.findOne({ _id: req.params.id }).then((bike) => {
            res.json(bike);
        }).catch((err) => {
            console.log(`Server Get Error: ${ err }`);
        });
    },
    getMine: function(req, res) {
        // console.log('In Show');
        Bike.find({ _user: req.params.id }).populate('_user').exec(function(error, bikes) {
            if (error) {
                console.log(`There was an error retrieving bikes: ${ error }`);
                res.status(500);
            } else {
                console.log("Successfully Populated Bikes");
                res.json(bikes);
            }
        });
    },
    create: function(req, res) {
        User.findOne({ _id: req.params.id }, (err, user) => {
            const bike = new Bike(req.body);
            bike._user = user._id;
            bike.save((err) => {
                if (err) {
                    console.log(`Error: ${ err }`);
                    res.status(500);
                } else {
                    console.log("Successfully saved bike!");
                    user.bikes.push(bike);
                    user.save((err) => {
                        if (err) {
                            console.log(`Error: ${ err }`);
                            res.status(500);
                        } else {
                            console.log("Successfully added a bike!");
                            res.json(bike);
                        };
                    });
                };
            });
        });
    },
    update: function(req, res) {
        Bike.findByIdAndUpdate(req.params.id, req.body).then((bike) => {
            console.log('successfully updated bike!');
            res.json(bike);
        }).catch(err => {
            console.log(`Server Update Error: ${ err }`);
            res.status(500);
        });
    },
    remove: function(req, res) {
        Bike.remove({ _id: req.params.id }).then(() => {
            console.log('successfully deleted bike!');
            res.json(true);
        }).catch(err => {
            console.log(`Server Delete Error: ${ err }`);
            res.status(500);
        });
    }

}