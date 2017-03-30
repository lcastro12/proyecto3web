import React,{Component} from 'react';
import AccountsUI from './AccountsUI';
import TrackerReact from 'meteor/ultimatejs:tracker-react';



export default class Navbar  extends TrackerReact(Component){

	constructor(props) {
		super(props);
		this.state=
		{
			logged:false
		}
	}


	render()
	{
		const nav=Meteor.userId()
		if(!nav)
		{
	return (
			<nav className="menu">
			<a href="./" className="btn btn-primary"> Home </a>
			<AccountsUI />
			</nav>
			)
		}
		else
		{
			return(
						<nav className="menu">
			<a href="./" className="btn btn-primary"> Home </a>
			<a href="./upload" className="btn btn-primary" role="button">Subir Imagen </a>
			<a href="./mine" className="btn btn-primary" role="button">Mi Imagenes </a>
			<AccountsUI />
		</nav>)


		}


	}
}


	