import React, { Component } from 'react';
import style from './headerPage.module.css';

class HeaderPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			image: this.props.icon,
		}
	}

	render(){
		return(
			<div className={ style.title }>
				<h3>{ this.state.image.titlePage }</h3>
				<img src={ this.state.image.url } alt={ this.state.image.name }/>
			</div>
			
		);
	}
}

export { HeaderPage };