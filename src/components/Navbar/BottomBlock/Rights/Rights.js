import React from 'react';
import style from './rights.module.css'

class Rights extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			year: this.props.rights.year,
			sign: this.props.rights.sign,
			text: this.props.rights.text
		}
	};

	render(){
		return(
			<div className={ style.rights }>
				<p>{ this.state.text }</p>
				<p>{ this.state.year }</p>
			</div>
		);
	}
}

export { Rights };