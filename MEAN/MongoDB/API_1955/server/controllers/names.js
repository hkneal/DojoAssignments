const mongoose = require('mongoose');
const Name = mongoose.model('Name');

module.exports = {
  show: function(req, res) {
    Name.find({}).then((names) => { res.json( names ) })
      .catch((err) => { console.log(`Error: ${ err }`);
      });
  },
  create: function(req, res) {
    const name = new Name({name: req.params.name});
    name.save().then(() => { console.log('successfully added a name!');
        res.redirect("/");
      })
      .catch(err => { console.log(`We caught an error ${ err }`);
        res.redirect("/");
      });
  },
  removeName: function(req, res) {
    Name.deleteOne({name: req.params.name}).then(() => { res.redirect("/");
      }).catch(err => { console.log(`We caught an error ${ err }`);
        res.redirect("/");
      })
  },
  getOne: function(req, res){
    if(req.params.name === 'favicon.ico'){
      res.redirect("/");
    } else {
      Name.findOne({name: req.params.name}).then((name) => {
        console.log(`We found the name:  ${ name } `);
        res.json( {name} );
      }).catch((err) => { console.log(`We caught an error ${ err }`);
        res.redirect("/");
      });
    }
  }

}
