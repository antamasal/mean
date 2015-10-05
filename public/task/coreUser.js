angular.module('MainApp', [])


function userController($scope, $http) {
	$scope.newUser = {};
	$scope.users = {};
	$scope.action = "";
	$scope.show = false;

	// Obtenemos todos los datos de la base de datos
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
   	 	$scope.newUser = {}; // Borramos los datos del formulario
  	}


	// Función para registrar a una persona
	$scope.registrarUser = function() {
		console.log($scope.newUser);
		$http.post('/api/user', $scope.newUser)
		.success(function(data) {
				$scope.newUser = {}; // Borramos los datos del formulario
				$scope.users = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectUser = function(user) {
		$scope.newUser = user;
		$scope.action = "update";
		console.log($scope.newPersona, $scope.selected);
	};

	// Función para editar los datos de una persona
	$scope.updateUser = function(newUser) {
		console.log( newUser._id);
		console.log($scope.newPersona);
		$http.put('/api/user/' + newUser._id, newUser)
		.success(function(data) {
				$scope.newUser = {}; // Borramos los datos del formulario
				$scope.users = data;
				$scope.action = "";
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	$scope.removeUser = function (newPersona) {
		$http.delete('/api/user/' + newPersona._id)
			.success(function(data) {
				$scope.newUser = {}; // Borramos los datos del formulario
				$scope.users = data;
				$scope.action = "";
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
}