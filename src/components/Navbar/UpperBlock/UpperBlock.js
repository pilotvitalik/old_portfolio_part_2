import React, { Component } from 'react';
import { NavMenu } from './NavMenu/NavMenu.js';
import { Logo } from './Logo/Logo.js';
import style from './upperBlock.module.css';

class UpperBlock extends Component{
	constructor(props){
		super(props);
		this.state = {
			logo: this.props.navBar.logo, 
			list: this.props.navBar.navMenuList,
			lang: this.props.navBar.changeLang,
		};
	}

	render(){
		return(
			<div className={ style.upperBlock }>
				<Logo image={ this.state.logo }/> 
				<NavMenu navMenu={ this.state.list } lang={ this.state.lang }/>
			</div>
		);
	}
}

export { UpperBlock };