const mongoose = require('mongoose');
const QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
},
  {
    timestamps: true
});
//same as:
// const { Schema: UserSchema } = mongoose;
const Quote = mongoose.model('Quote', QuoteSchema);
