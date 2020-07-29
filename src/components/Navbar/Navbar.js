import React from 'react';
import style from './Navbar.module.css';
import { BottomBlock } from './BottomBlock/BottomBlock.js';
import { UpperBlock } from './UpperBlock/UpperBlock.js';

class Navbar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			navBar: this.props.navBar,
			social: this.props.navBar.socialDark,
			rights: this.props.navBar.rights,
		}
	}

	render(){
		return(
		<div className={ style.leftNavbar }>
		  <UpperBlock navBar={ this.state.navBar }/>
		  <BottomBlock social={ this.state.social } rights={ this.state.rights }/>
		</div>
		);
	}
}

export { Navbar };