const mongoose = require('mongoose');
const User = mongoose.model('User');
const Quote = mongoose.model('Quote');
const bcrypt = require('bcrypt');

function loadQuotes(user, req, res){
  console.log(typeof(user));
  console.log(user);
  req.session.name = user[0].id;
  Quote.find({}).populate('_user', 'name').exec(function (err, quotes) {
    if(err) {
      console.log(`There was an error retrieving quotes: ${ err }`);
      res.redirect("/");
    } else {
      let session = req.session.name
      console.log("Successfully loaded the quotes.");
      res.render("quotes", { quotes, session });
      }
    });
  }

module.exports = {
  login: function(req, res) {
    User.find({email: req.body.email}, (err, user) => {
      if(err) {
        console.log(`Login Error - (Email Address not found): ${ err }`);
        err = "Login Error: The Email Address is not found, please make sure it was entered in correctly.";
        res.render("index", { err });
      } else {
        console.log("Success, Email Address Found!");
        if(bcrypt.compareSync(req.body.password, user[0].password)) {
            loadQuotes(user, req, res);
        } else {
            console.log(`User Passwords don't match`);
            err = "The Password for this email address is incorrect!";
            res.render("index", { err });
          }
        };
      });
  },
  register: function(req, res) {
    if(!(req.body.password === req.body.confirm_password)){
      console.log("Password Mismatch!");
      let err = "Password and Confirm Password must match!"
      res.render("index", { err });
    } else {
      User.create(req.body).then((user) => {
        console.log("Successfully registered");
        let userArr = [user];
        loadQuotes(userArr, req, res);
      }).catch((err) => {
        console.log(`User Registration Error: ${ err }`);
        res.render("index", { err });
      });
    }
  },
  logout: function(req, res){
    req.session.destroy();
    res.redirect("/");
  }
}
