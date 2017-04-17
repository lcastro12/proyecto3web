Imagenes= new Mongo.Collection("imagenes");

// Denegar cualquier actualización de las imágenes en el cliente, solo el servidor puede hacerlo.
Imagenes.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Meteor.publish("allImages",function(bus,options){
		console.log("Filtros");
		console.log(bus);
		console.log("Opciones");
		console.log(options);
		var title = {};
		var snippet = {};
	    snippet['snippet'] = new RegExp('.*' + bus);
	    title['title'] = new RegExp('.*' + bus);
	    var filtro = { '$or': [snippet, title] };

	return Imagenes.find(filtro,options);
});

Meteor.publish("myImages",function(bus,options){

		var title = {};
		var snippet = {};
		console.log("Filtros");
		console.log(bus);
		console.log("Opciones");
		console.log(options);
	    snippet['snippet'] = new RegExp('.*' + bus);
	    title['title'] = new RegExp('.*' + bus);
	    var filtro = { user:this.userId,'$or': [snippet, title] };
	return Imagenes.find(filtro,options);

})

