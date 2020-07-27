import React from 'react';
import style from './Navbar.module.css';
import { NavMenu } from './NavMenu/NavMenu.js';
import { Logo } from './Logo/Logo.js';
import { Feedback } from './Feedback/Feedback.js';

class Navbar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			img: this.props.navBar.darkImg,
			logo: this.props.navBar.logo,
			social: this.props.navBar.socialDark,
		}
	}

	render(){
		return(
		<div className={ style.leftNavbar }>
		  <Logo image={ this.state.logo }/> 
    	  <NavMenu navMenu={ this.state.img }/>
		  <Feedback social={ this.state.social }/>
		</div>
		);
	}
}

export { Navbar };