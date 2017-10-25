const mongoose = require('mongoose');
const Message = mongoose.model('Message');

module.exports = {
  create: function(req, res) {
    Message.create(req.body).then(() => { console.log('successfully added a message!');
        res.redirect("/");
      })
      .catch(err => { console.log(`We caught an error ${ err }`);
        res.redirect("/");
      });
  },
  show: function(req, res) {
    Message.find({}).populate('comments').exec(function (err, messages) {
      if(err) { console.log(`Error: ${ err }`); }
      else {
        // console.log(messages);
        console.log("Messages Updated");
        res.render("index", { messages });
        }
      });
  }
}
