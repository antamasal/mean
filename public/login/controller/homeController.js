var app = angular.module('homeController', ['ngCookies']);

//creamos el controlador pasando $scope y auth
app.controller('homeController', function($rootScope, $scope, $cookies, auth) 
{
    //devolvemos a la vista el nombre del usuario
    $rootScope.userFull = $cookies.user;
    //la función logout que llamamos en la vista llama a la función
    //logout de la factoria auth
    $scope.logout = function()
    {
        auth.logout();
    }

});

