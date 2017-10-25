module.exports = function Route(app, server, mongoose) {

  mongoose.Promise = global.Promise;
  // Worked: const conn = mongoose.createConnection('mongodb://localhost/basic_mongoose');
  // Workedpt2: conn.on('connected', () => console.log('mongodb connected!!'));
  const conn = mongoose.connect('mongodb://localhost/basic_mongoose',{
    useMongoClient: true
  });
  // conn.on('connected', () => console.log('mongodb connected!!'));
  conn.then(function (){
    console.log('mongodb connected!');
  }).catch(function (err){
    console.log(`error while trying to connect with mongodb: ${ err }`);
  })

  const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
  },
    {
      timestamps: true
});
  //same as:
  // const { Schema: UserSchema } = mongoose;
  const User = conn.model('User', UserSchema);
  // const User = mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
  // var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

  app.get('/', function(req, res) {
    User.find({}).then(function(users){
      console.log(users);
      let postData = users;
      res.render("index", { postData });
    }).catch(function(err) {
      console.log(`We caught an error ${ err }`);
    })
  });

  app.post('/users', function (req, res){
      console.log("POST DATA: ", req.body)
      var user = new User({name: req.body.name, age: req.body.age});
      user.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/');
        }
      });
    });
}
