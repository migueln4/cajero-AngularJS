app.filter('euros',function() {

	return function(numero){
		return numero.toFixed(2).replace(".",",") + " €";
	}

});