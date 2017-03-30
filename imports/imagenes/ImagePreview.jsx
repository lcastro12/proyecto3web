'use strict';
import React, { Component } from 'react';

export default class ImagePreview extends Component {

	votarPositivo(events)
	{
		console.log("Vota positivo")
		Meteor.call('likeImage',this.props.imagen,true);
	}
	votarNegativo(events)
	{
		Meteor.call('likeImage',this.props.imagen,false);
	}
    componentWillReceiveProps(nextProps) 
  {
    if(this.props.imagen._id!=nextProps.imagen._id)
    {
      console.log("CAMBIO")
    }

    
  }

  render() {
    return (
        <div className="imagen" onClick={this.votarPositivo.bind(this)}>
        
          <img className="imageResult"  src={`${this.props.imagen.url}`}
          alt={`${this.props.imagen.title}`}
          title={`${this.props.imagen.title}`}
          
          />
        
        </div>

    );
  }
}
