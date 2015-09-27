var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var User = new Schema({

	name : String,
	age: Number,
	bio: String,
	email: String,
	password: String,
	date: { type: Date, default: Date.now }
});


//Para poder acceder al modulo.
module.exports = mongoose.model('User', User);
