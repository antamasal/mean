var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var Task = new Schema({
    name  :  { type: String}
  , description  :  { type: String}
  , date  :  { type: Date }
  , creador: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});


//Para poder acceder al modulo.
module.exports = mongoose.model('Task', Task);
