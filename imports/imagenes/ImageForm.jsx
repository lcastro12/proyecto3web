import React,{Component} from "react";
export default class ImageForm extends Component{

	addImage(event)
	{
		event.preventDefault();
		var title=this.refs.imTitle.value.trim();
		var url=this.refs.imgUrl.value.trim();
		var snippet=this.refs.imSnippet.value.trim();
		Meteor.call('addImagen',url,snippet,title,(error,data)=>{
			if(error)
			{
			Bert.alert( 'Por favor inicie sesión para subir imágenes', 'danger', 'fixed-top', 'fa-frown-o' );
			Session.set("Meteor.loginButtons.dropdownVisible", true);
			}
			else
			{
			Bert.alert( 'La imágen se ha subido correctamente', 'success', 'fixed-top', 'fa-check' );

			}


		});

	}

	render(){
		return(
			<form className="new-image" onSubmit={this.addImage.bind(this)}>
			 <div className="form-group">
			 <label htmlFor="text">Titulo de la imagen</label>
			<input type="text"
				   ref="imTitle"
				   id="text"
				   required="required"
				   className="form-control"
				   placeholder="Perro"/>
			<label htmlFor="imagenUrl">Url de la imagen a subir</label>
				<input type="text"
				   ref="imgUrl"
				   className="form-control"
				   id="imagenUrl"
				   required="required"
				   placeholder="google.com/img3.png"/>
			<label htmlFor="imagenUrl">Descripción de la imagen</label>
				<input type="text"
				   ref="imSnippet"
				   id="imagenUrl"
				   className="form-control"
				   default="una imagen"
				   placeholder="Perro bonito"/>
				<button type="submit"  value="Submit" className="btn btn-default">Subir</button>
				</div>
			</form>
			)
	}
}
