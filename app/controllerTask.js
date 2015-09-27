var Task = require('./modelo/task');


// Obtiene todos los objetos Tasks de la base de datos
exports.getTasks = function (req, res){
	Task.find(
		function(err, tasks) {
			if (err)
				res.send(err)
					res.json(tasks); // devuelve todas las Personas en JSON		
				}
			);
}

// Guarda un objeto Usuario en base de datos
exports.saveTask = function(req, res) {
		// Creo el objeto Persona
		console.log(req.body);
		Task.create(
			{name : req.body.name,	description: req.body.description, idUser: req.body.idUser._id, date: req.body.date}, 
			function(err, task) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Task.find(function(err, tasks) {
				 	if (err)
				 		res.send(err)
				 	res.json(tasks);
				});
			});

	}

// Modificamos un objeto Usuario de la base de datos
exports.updateTask = function(req, res){
	Task.update( {_id : req.params.task_id},
					{$set:{name : req.body.name,	description: req.body.description}}, 
					function(err, task) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Task.find(function(err, tasks) {
				 	if (err)
				 		res.send(err)
				 	res.json(tasks);
				});
			});
	}

// Elimino un objeto Usuario de la base de Datos
exports.removeTask = function(req, res) {
	Task.remove({_id : req.params.task_id}, function(err, task) {
		if (err)
			res.send(err);

			// Obtine y devuelve todas las personas tras borrar una de ellas
			Task.find(function(err, tasks) {
				if (err)
					res.send(err)
				res.json(tasks);
			});
		});
}