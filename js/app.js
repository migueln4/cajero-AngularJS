var app = angular.module("app", ["ngRoute"]);

app.controller("controlador", function($scope){

	var lista = this; //Aquí es donde voy a apuntar desde el html, ya que es mi variable principal

	var n = 4; //Creo esta variable con valor 3 porque tengo tres elementos creados
	var nCarrito = 1; //inicializamos la variable n en 1 porque se toma como referencia el carrito, no el total de productos existentes

	lista.productos = [

		{id: 1, nombre: "Agua", precio: 2.0},
		{id: 2, nombre: "Café", precio: 5.75},
		{id: 3, nombre: "Aceite", precio: 10.00}
		{id: 4, nombre: "Tomates", precio: 0.31}
	];

	lista.carrito = [];

	lista.addProducto = function() {
		var nombre = lista.nombre;
		var precio = lista.precio;

		if(nombre != "" && precio != "" && !isNaN(precio)) {
			n++;
			lista.productos.push({id: n, nombre: nombre, precio: precio}); //La función push en JavaScript sirve para insertar elementos en arrays
		
		/*
		Esto se hace para que se limpien las variables que se han ido utilizando
		*/
			lista.nombre = '';
			lista.precio = '';

		}
	}

	lista.addProductoAlCarrito = function() {
		
		var id = lista.productoSeleccionado; //esto hace referecia a un modelo de datos que viene definido en la parte del html dentro del <select>

		var cantidad = lista.cantidad; //esto se obtiene de un input que es ng-model y es el que indica la cantidad
		var producto = lista.productos.find(function(obj){
			return obj.id == id;
		}); //Esta función sin definir lo que hace es recueprar el objeto producto que tenga el mismo id que se le está pasando por parámetro.

		//La función de find() ya la tiene JavaScript

		if(producto != undefined && cantidad > 0){
	/*
	Aquí lo que se hace, en primer lugar, es comprobar que el objeto de producto que se ha recuperado esté definido.
	Después, se le añade, con la función push() de JavaScript objetos que componen los componentes del carrito.
	*/
			lista.carrito.push({id: nCarrito, nombre: producto.nombre, precio: producto.precio, cantidad: cantidad, total: producto.precio * cantidad});

			nCarrito++;
		}

	}

	lista.getTotalCarrito = function() {

		var total = 0;

		lista.carrito.forEach(x => {

			total += x.total;

		});

		return total;


	}

});