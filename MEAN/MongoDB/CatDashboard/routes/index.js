module.exports = function Route(app, server, mongoose) {

  mongoose.Promise = global.Promise;

  const conn = mongoose.connect('mongodb://localhost/cat',{
    useMongoClient: true
  });

  conn.then(() => { console.log('mongodb connected!');
    }).catch((err) => {console.log(`error while trying to connect with mongodb: ${ err }`);
  })

  const CatSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    type: { type: String, required: true},
    age: Number,
    country: String,
    fact: String
    }, { timestamps: true
  });
  //same as: const { Schema: UserSchema } = mongoose;
  const Cat = conn.model('Cat', CatSchema);

  app.get('/', function(req, res) {
    Cat.find({}).then((catObjects) => {
      res.render("index", { catObjects });
    }).catch((err) => { console.log(`We caught an error: ${ err }`);
      res.redirect("/");
    })
  });

  app.get('/cat/new', function(req, res) {
    res.render("create_cat");
  });

  app.get('/cat/:id', function(req, res) {
    Cat.find({_id: req.params.id}).then((cat) => {
      let catObject = cat[0];
      res.render("viewCat", { catObject });
      }).catch((err) => {console.log(`We caught an error ${ err }`);
      res.redirect("/");
    })
  });

  app.post('/cat', function (req, res){
    Cat.create(req.body).then(cat => { console.log('successfully added a cat!');
        res.redirect("/");
        })
        .catch(err => { console.log(`We caught an error ${ err }`);
        res.redirect("/");
        });
      });

    app.get('/cat/edit/:id', function (req, res){
      Cat.find({_id: req.params.id}).then((cat) => {
        let catObject = cat[0];
        res.render("edit_cat", { catObject });
        })
        .catch(err => { console.log(`We caught an error ${ err }`);
        res.redirect("/");
      });
    });

    app.post('/cat/:id', function (req, res){
      Cat.findByIdAndUpdate(req.params.id, {$set:
        { name: req.body.name, type: req.body.type, age: req.body.age, country: req.body.country, fact: req.body.fact}
        }, { new: true }, function(err, cat){
          if(err) { console.log(`something went wrong: ${ err }`);
            res.redirect("/");
          } else { console.log('successfully edited a cat!');
            res.redirect("/");
            }
        });
      });

    app.post('/cat/destroy/:id', function(req, res){
      Cat.deleteOne({_id: req.params.id}).then(() => { res.redirect("/");
        }).catch(err => { console.log(`We caught an error ${ err }`);
          res.redirect("/");
        })
      });
}
