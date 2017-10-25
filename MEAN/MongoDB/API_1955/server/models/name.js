const mongoose = require('mongoose');
const { Schema } = mongoose;
const NameSchema = Schema({
  name: { type: String, required: true, minlength: 4}
});

const Name = mongoose.model('Name', NameSchema);
