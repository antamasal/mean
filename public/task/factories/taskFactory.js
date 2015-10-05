var app = angular.module('taskFactory', ['ngCookies']);
//factoria que controla la autentificación, devuelve un objeto
//$cookies para crear cookies
//$cookieStore para actualizar o eliminar
//$location para cargar otras rutas
app.factory("taskFactory", function($cookies,$cookieStore,$location, $http, $q)
{
    return{
        getTaskByUser : function()
        {

        var defered = $q.defer();
        var promise = defered.promise;

        $http.get('/api/task')
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

        return promise;
            
        },
        create : function(newTask)
        {
            var defered = $q.defer();
        var promise = defered.promise;

            $http.post('/api/task', newTask)
            .success(function(data) {
                defered.resolve(data);
            })
            .error(function(err) {
                defered.reject(err)
            });

            return promise;

        },
        

    }
});
