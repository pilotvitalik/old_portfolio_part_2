import React from 'react';
import { NavMenu } from './NavMenu/NavMenu.js';
import { Logo } from './Logo/Logo.js';
import style from './upperBlock.module.css';

class UpperBlock extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			img: this.props.navBar.darkImg,
			logo: this.props.navBar.logo, 
		}
	}

	render(){
		return(
			<div className={ style.upperBlock }>
				<Logo image={ this.state.logo }/> 
				<NavMenu navMenu={ this.state.img }/>
			</div>
		);
	}
}

export { UpperBlock };