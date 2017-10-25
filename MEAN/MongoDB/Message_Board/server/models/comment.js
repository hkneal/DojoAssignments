const mongoose = require('mongoose');
const { Schema } = mongoose;
const CommentSchema = Schema({
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  name: { type: String, required: true, minlength: 4},
  comment: { type: String, required: true}
});

const Comment = mongoose.model('Comment', CommentSchema);
