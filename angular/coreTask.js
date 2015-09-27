angular.module('MainApp', [])

function taskController($scope, $http) {
	$scope.newTask = {};
	$scope.tasks = {};
	$scope.action = "";
	$scope.show = false;
	$scope.users = {};

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/task').success(function(data) {
		$scope.tasks = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	$http.get('/api/users').success(function(data) {
		$scope.users = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	$scope.showMe = function(){
    	$scope.show=true;
    	$scope.action = "create"
  	}
  	$scope.hideMe = function(){
  		$scope.action = ""
   	 	$scope.show=false;
   	 	$scope.newTask = {}; // Borramos los datos del formulario
  	}

  	$scope.registrarTask = function() {
		console.log($scope.newTask);
		$http.post('/api/task', $scope.newTask)
		.success(function(data) {
				$scope.newUser = {}; // Borramos los datos del formulario
				$scope.tasks = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

}
/*
function mainController($scope, $http) {
	$scope.newUser = {};
	$scope.users = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/users').success(function(data) {
		$scope.users = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Función para registrar a una persona
	$scope.registrarPersona = function() {
		$http.post('/api/persona', $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una persona
	$scope.modificarPersona = function(newPersona) {
		$http.put('/api/persona/' + $scope.newPersona._id, $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.borrarPersona = function(newPersona) {
		$http.delete('/api/persona/' + $scope.newPersona._id)
		.success(function(data) {
			$scope.newPersona = {};
			$scope.personas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectPerson = function(persona) {
		$scope.newPersona = persona;
		$scope.selected = true;
		console.log($scope.newPersona, $scope.selected);
	};

	*/