var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var User = new Schema({

	name : { type : String , unique : true, required : true },
	lastname: String,
	age: Number,
	bio: String,
	email: String,
	username: String,
	password: String,
	date: { type: Date, default: Date.now }
});


//Para poder acceder al modulo.
module.exports = mongoose.model('User', User);
