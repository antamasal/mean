var app = angular.module('loginController', ['ngCookies']);

//creamos el controlador pasando $scope y $http, así los tendremos disponibles
app.controller('loginController', function($scope,auth) 
{
    //la función login que llamamos en la vista llama a la función
    //login de la factoria auth pasando lo que contiene el campo
    //de texto del formulario
    $scope.login = function()
    {
        auth.login($scope.username, $scope.password);
    }

});

