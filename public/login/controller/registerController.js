var app = angular.module('registerController', []);

//creamos el controlador pasando $scope y $http, así los tendremos disponibles
app.controller('registerController', function($scope,auth, $location) 
{    
    $scope.registrarUser = function()
    {
        var status = auth.register($scope.newUser);
        if (status != null) {
        	$scope.newUser = {};
            $location.path("/login");
        }
    }
});
