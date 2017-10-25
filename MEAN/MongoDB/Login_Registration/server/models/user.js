const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;

const UserSchema = Schema({
  name: {
    first: { type: String, required: [true, "First Name is required."], minlength: 2, maxlength: 25, trim: true},
    last:  { type: String, required: [true, "Last Name is required."], minlength: 2, maxlength: 25, trim: true}
  },
  email: { type: String, required: [true, "Email address is required"], unique: true,
  validate: {
    validator: function( email ) {
      return /^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$/.test( email );
      },
      message: "Please enter in a valid email address"
    }
  },
  password: { type: String, required: [true, "You must enter in a valid password"], minlength:8, maxlength: 255,
  validate: {
      validator: function ( password ) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#])[A-Za-z\d$@$!%*?&#]{8,32}/.test( password );
      },
      message: "Password failed validation, you must have at least 1 number, uppercase and special character"
    }
  },
  birthday: { type: Date, required: [true, "You must enter in a proper birthdate."]},
  quotes: [{type: Schema.Types.ObjectId, ref: 'Quote'}] //one to many []
  }, { timestamps: true
});

UserSchema.methods.bycryptPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

UserSchema.pre('save', function(done){
  if (!this.isNew) {
        console.log('In PreSave: This Document is not new!!');
      return done();
    }
  this.password = this.bycryptPassword(this.password);
  done();
});

UserSchema.plugin(uniqueValidator);

UserSchema.virtual('fullName').get(function () {
  return this.name.first_name + ' ' + this.name.last_name;
});
//console.log(UserModelInstance.fullName);

const User = mongoose.model('User', UserSchema);
