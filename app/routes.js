var User = require('./modelo/user');
var Task = require('./modelo/task');

var ControllerTask = require ('./controllerTask');
var ControllerUser = require ('./controllerUser');

module.exports = function(app) {

	// devolver todos los Users
	app.get('/api/users', ControllerUser.getUsers);
	// establece usuario en sesion
	app.post('/api/users/establecer', ControllerUser.establecerUsuario);
	// desestablece usuario en sesion
	app.post('/api/users/desestablecer', ControllerUser.desestablecerUsuario);
	// Crear un nueva User
	app.post('/api/user', ControllerUser.saveUser);
	// Modificar los datos de un Usuario
	app.put('/api/user/:user_id', ControllerUser.updateUser);
	// Borrar una Persona
	app.delete('/api/user/:user_id', ControllerUser.removeUser);


	// devolver todos los Users
	app.get('/api/task', ControllerTask.getTasks);
	// Crear un nueva User
	app.post('/api/task', ControllerTask.saveTask);
	// Modificar los datos de un Usuario
	app.put('/api/task/:task_id', ControllerTask.updateTask);
	// Borrar una Persona
	//app.delete('/api/task/:task_id', ControllerTask.removeTask);

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // Carga única de la vista
	});

};
