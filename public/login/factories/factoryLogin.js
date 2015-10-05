var app = angular.module('factoryLogin', ['ngCookies']);
//factoria que controla la autentificación, devuelve un objeto
//$cookies para crear cookies
//$cookieStore para actualizar o eliminar
//$location para cargar otras rutas
app.factory("auth", function($cookies,$cookieStore,$location, $http/*, $q*/)
{
    return{
        login : function(username, password)
        {
            var ok = false;
                //creamos la cookie con el nombre que nos han pasado
            $http.post('/api/users/establecer', { 'username' : username, "password" : password}).success(function(data,status){
                if (data.username == username) {
                    $cookies.user = JSON.stringify(data);
                    $location.path("/home");

                } else {
                  $location.path("/login");
                }
		  });
        },
        register : function(newUser)
        {
            //var res = $q.defer();
            /*$http.post('/api/user', $scope.newUser)
                .success(function(data) {
                    console.log(data);
                    $location.path("/registrarse");

                    })
                .error(function(data) {
                    console.log('Error: ' + data);
                    $location.path("/login");
            });
            $location.path("/login");*/
            var res = false;
            $http.post('/api/user', newUser).success(function(data,status){
                if (status == "200") {
                    res = true;
                }
            });
            return res;
        },
        logout : function()
        {
            //al hacer logout eliminamos la cookie con $cookieStore.remove
             var ok = false;
                //creamos la cookie con el nombre que nos han pasado
            $http.post('/api/users/desestablecer', { 'username' : $cookies.username, "password" : $cookies.password}).success(function(data,status){
                if (data.username == $cookies.username) {
                    $cookieStore.remove("user");
                    $location.path("/login");

                } else {
                  $location.path("/home");
                }
          });
        },
        checkStatus : function()
        {
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/home","/dashboard","/login", "/crearTask"];
            if(this.in_array($location.path(),rutasPrivadas) && typeof($cookies.user) == "undefined")
            {
                $location.path("/login");
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if(this.in_array("/login",rutasPrivadas) && typeof($cookies.user) != "undefined")
            {
                //$location.path("/home");
            }
        },
        in_array : function(needle, haystack)
        {
            var key = '';
            for(key in haystack)
            {
                if(haystack[key] == needle)
                {
                    return true;
                }
            }
            return false;
        }
    }
});
