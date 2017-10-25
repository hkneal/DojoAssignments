const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.Promise = global.Promise;

const conn = mongoose.connect('mongodb://localhost/message',{ useMongoClient: true});

conn.then(() => { console.log('mongodb connected!');
  }).catch((err) => {console.log(`error while trying to connect with mongodb: ${ err }`);
});

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('js') >= 0) {
    require(models_path + '/' + file);
  }
});
