// Inicialización
var express  = require('express');
var app      = express(); 							// Utilizamos express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var port  	 = process.env.PORT || 8000; 			// Cogemos el puerto 8080

// Configuracion
mongoose.connect('mongodb://localhost:27017/UserTask'); 	// Hacemos la conexión a la base de datos de Mongo con nombre "UserTask"

app.configure(function() {
	app.use(express.static(__dirname + '/public')); 		// indicamos el lugar donde estaran los archivos estaticos
	app.use(express.logger('dev')); 						// activamos el log en modo 'dev'
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.favicon());
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.cookieParser());
	app.use(express.session({secret: 'abcd1234'}));
});

// Cargamos los endpoints
require('./app/routes.js')(app);

// Cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto " + port);
