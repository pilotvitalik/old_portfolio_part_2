import React, { Component } from 'react';
import './button.module.css';

class Button extends Component{
	constructor(props){
		super(props);
		this.state = {
			type: this.props.btn.type,
			title: this.props.btn.title,
			link: this.props.btn.link,
		};
	}

	render(){
		if (this.state.type === 'button'){
			return(
				<button type={ this.state.type }>{ this.state.title }</button>
			);
		} else {
			return(
				<button type={ this.state.type } data-link={ this.state.link }>{ this.state.title }</button>
			);
		}
		
	}
}

export { Button };