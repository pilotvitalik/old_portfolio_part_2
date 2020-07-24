import React from 'react';
import style from './Navbar.module.css';
import { NavMenu } from './NavMenu/NavMenu.js';

class Navbar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			img: this.props.navMenu
		}
	}

	render(){
		return(
		<ul>
		  <li>Photo</li> 
		  <NavMenu navMenu={ this.state.img }/>
		  <li>SocialNetwork</li>
		  <li>Rights</li>	
		</ul>
		);
	}
}

export { Navbar };