const mongoose = require('mongoose');
const { Schema } = mongoose;
const MessageSchema = Schema({
  name: { type: String, required: true, minlength: 4},
  message: { type: String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}] //one to many []
  }, { timestamps: true
});

const Message = mongoose.model('Message', MessageSchema);
