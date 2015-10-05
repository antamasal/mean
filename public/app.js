//creamos el modulo e inyectamos bootstrap ui
var app = angular.module('cookies', ['ngCookies', 'factoryLogin', 'loginController', 'homeController', 'registerController', 'taskFactory', 'taskController']);

//damos configuración de ruteo a nuestro sistema de login
app.config(function($routeProvider)
{
    $routeProvider.when("/login", {
        controller : "loginController",
        templateUrl : "login/templates/login.html"
    })
    .when("/home", {
        controller : "homeController",
        templateUrl : "login/templates/home.html"
    })
    .when("/", {
        controller : "loginController",
        templateUrl : "login/templates/login.html"
    })
    .when("/registrarse", {
        controller : "registerController",
        templateUrl : "login/templates/singin.html"
    })
    .when("/crearTask", {
        controller : "taskController",
        templateUrl : "task/templates/task.html" 
    })
});

//mientras corre la aplicación, comprobamos si el usuario tiene acceso a la ruta a la que está accediendo
app.run(function($rootScope, auth)
{
    //al cambiar de rutas
    $rootScope.$on('$routeChangeStart', function()
    {
        //llamamos a checkStatus, el cual lo hemos definido en la factoria auth
        //la cuál hemos inyectado en la acción run de la aplicación
        auth.checkStatus();
    })
})
