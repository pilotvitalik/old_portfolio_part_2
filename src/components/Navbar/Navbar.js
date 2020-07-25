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
		<div className={style.leftNavbar}>
		  <div>Photo</div> 
    	  <NavMenu navMenu={ this.state.img }/>
		  <div>SocialNetwork</div>
		  <div>Rights</div>	
		</div>
		);
	}
}

export { Navbar };