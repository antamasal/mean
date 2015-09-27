var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var Task = new Schema({
    name  :  { type: String, index: true  }
  , description  :  { type: String, index: true  }
  , date  :  { type: Date }
  , idUser  :  { type: String, index: true  }
});


//Para poder acceder al modulo.
module.exports = mongoose.model('Task', Task);
