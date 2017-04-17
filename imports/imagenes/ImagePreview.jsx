'use strict';
import React, { Component } from 'react';

export default class ImagePreview extends Component {

	votarPositivo(events)
	{
		console.log("Vota positivo")
		Meteor.call('likeImage',{identi:this.props.imagen._id,liked:true});
	}
	votarNegativo(events)
	{
		Meteor.call('likeImage',{identi:this.props.imagen._id,liked:false});
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
