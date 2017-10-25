var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
  show: function(req, res) {
    Quote.find({}).then((postData) => { res.render("quotes", { postData });
      }).catch((err) => { console.log(`We caught an error ${ err }`); });
  },
  create: function(req, res) {
    console.log("POST DATA: ", req.body)
    Quote.create(req.body).then((quote) => { console.log('successfully added a quote!');
      Quote.find({}).then((postData) => { res.render("quotes", { postData });
        }).catch((err) => { console.log(`We caught an error ${ err }`);
          res.redirect("/");
        })
      }).catch((err) => { console.log(`something went wrong: ${ err }`);
          res.redirect("/");
      });
  }
}
