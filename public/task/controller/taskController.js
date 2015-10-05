var app = angular.module('taskController', ['ngCookies']);

//creamos el controlador pasando $scope y auth
app.controller('taskController', function($rootScope, $scope, $cookies, taskFactory) 
{
	/*var tasks =  taskFactory.getTaskByUser();
	$scope.tasksByUser = tasks;*/

	taskFactory.getTaskByUser()
		.then(function(data) {
            $scope.tasks = data;
        })

        
	$scope.createTask = function()
    {

    	taskFactory.create($scope.newTask)
		.then(function(data) {
            $scope.tasks = data;
            $scope.newTask = {};
            $location.path("/crearTask");
        })
    }

});

