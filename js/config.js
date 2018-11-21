app.config(function($routeProvider) {

	$routeProvider
	.when("/", {
		templateUrl: "cajero.html",
		controller: "controlador"
	}) //Al poner el mismo controlador, ambas páginas tienen el mismo controlador y, por lo tanto, comparten información
	.when("/productos", {
		templateUrl: "productos.html",
		controller: "controlador"
	}); //No hace falta meterle el símbolo raro que se le ha metido en el .html
//La función when() nos la da AngularJS.
//Se ponen dos veces porque solo queremos ir a dos sitios.

});