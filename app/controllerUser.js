var User = require('./modelo/user');


// Obtiene todos los objetos Usuarios de la base de datos
exports.getUsers = function (req, res){
	User.find(
		function(err, users) {
			if (err)
				res.send(err)
					res.json(users); // devuelve todas las Personas en JSON		
				}
			);
}

// Guarda un objeto Usuario en base de datos
exports.saveUser = function(req, res) {

		// Creo el objeto Persona
		console.log(req.body);
		User.create(

			{name : req.body.name,	age: req.body.age, bio: req.body.bio, email: req.body.email, password: req.body.password}, 
			function(err, persona) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				User.find(function(err, users) {
				 	if (err)
				 		res.send(err)
				 	res.json(users);
				});
			});

	}

// Modificamos un objeto Usuario de la base de datos
exports.updateUser = function(req, res){
	User.update( {_id : req.params.user_id},
					{$set:{name : req.body.name,	age: req.body.age, bio: req.body.bio, email: req.body.email, password: req.body.password}}, 
					function(err, user) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				User.find(function(err, users) {
				 	if (err)
				 		res.send(err)
				 	res.json(users);
				});
			});
	}

// Elimino un objeto Usuario de la base de Datos
exports.removeUser = function(req, res) {
	User.remove({_id : req.params.user_id}, function(err, user) {
		if (err)
			res.send(err);

			// Obtine y devuelve todas las personas tras borrar una de ellas
			User.find(function(err, users) {
				if (err)
					res.send(err)
				res.json(users);
			});
		});
}

// establece usuario en sesion
exports.establecerUsuario = function(req, res) {
	var user = [];
	User.findOne({username: req.body.username}, function(err,obj) {
		user = obj;
		console.log(obj);
		console.log(err);
	});
	req.session.user = req.body.username;
	res.send("ok");
}



// desestablece usuario en sesion
exports.desestablecerUsuario = function(req, res) {
	var username = req.params.username;
	var password = req.params.password;
	console.log(username);
	console.log(password);
	req.session.user = "";
	res.send("ok");
}

