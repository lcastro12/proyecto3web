import React,{Component} from 'react';

export default class Buscador extends Component{

	addSearch(event)
	{
		event.preventDefault();
		var bus=this.refs.filtroImagenes.value.trim()

		var title = {};
		var snippet = {};
	    snippet['snippet'] = new RegExp('.*' + image);
	    title['title'] = new RegExp('.*' + image);
	    var filtro = { '$or': [snippet, title] };

		Meteor.call('changeSearch',bus,()=>{
			this.refs.filtroImagenes.value="";
		});
	}

	render()
	{
		return(

			<form className="Buscador centerImages" id="FormBuscar"onSubmit={this.addSearch.bind(this)}>
			<input type="text" 
				   ref="filtroImagenes"
				   defaultValue="20"/>
			<button type="submit"  value="Submit">Buscar</button>
			</form>

			)
	}
}
