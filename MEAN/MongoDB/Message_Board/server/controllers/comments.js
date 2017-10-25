const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const Message = mongoose.model('Message');

module.exports = {
  create: function(req, res) {
    Message.findOne({_id: req.params.id}, (err, message) => {
      const comment = new Comment(req.body);
      comment._message = message._id;
      comment.save((err) => {
        if(err) { console.log(`Error: ${ err }`); }
        else { console.log("Successfully saved comment!");
          message.comments.push(comment);
          message.save((err) => {
            if(err) { console.log(`Error: ${ err }`); }
            else {
              console.log("Successfully added a comment!");
              // console.log(message);
              res.redirect("/")
              }
            });
          };
        });
      });
  }
}
