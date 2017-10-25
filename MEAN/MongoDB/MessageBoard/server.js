const express = require("express");
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bodyParser = require('body-parser');
const path = require("path");
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./views")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(port, () => console.log(`Listening on port ${ port }`));

mongoose.Promise = global.Promise;

const conn = mongoose.connect('mongodb://localhost/message',{ useMongoClient: true});

conn.then(() => { console.log('mongodb connected!');
  }).catch((err) => {console.log(`error while trying to connect with mongodb: ${ err }`);
})

const MessageSchema = Schema({
  name: { type: String, required: true, minlength: 4},
  message: { type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}] //one to many []
  }, { timestamps: true
});

const CommentSchema = Schema({
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  name: { type: String, required: true, minlength: 4},
  comment: { type: String, required: true}
});
//same as: const { Schema: UserSchema } = mongoose;
const Message = conn.model('Message', MessageSchema);
const Comment = conn.model('Comment', CommentSchema);

app.get('/', function(req, res) {
Message.find({}).populate('comments').exec(function (err, messages) {
      if(err) { console.log(`Error: ${ err }`); }
      else {
        console.log(messages);
        console.log("Messages Updated");
        res.render("index", { messages });
        }
    });
});

app.post('/message', function(req, res) {
  Message.create(req.body).then(() => { console.log('successfully added a message!');
      res.redirect("/");
    })
    .catch(err => { console.log(`We caught an error ${ err }`);
      res.redirect("/");
    });
});

app.post('/comment/:id', function(req, res){
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
            console.log(message);
            res.redirect("/")
            }
          });
        };
      });
    });
  });
