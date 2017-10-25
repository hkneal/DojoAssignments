const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.Promise = global.Promise;
const conn = mongoose.connect('mongodb://localhost/dojo_quotes',{
  useMongoClient: true
});
// conn.on('connected', () => console.log('mongodb connected!!'));
conn.then(function (){
  console.log('mongodb connected!');
}).catch(function (err){
  console.log(`error while trying to connect with mongodb: ${ err }`);
})

const models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('js') >= 0) {
    require(models_path + '/' + file);
  }
});
