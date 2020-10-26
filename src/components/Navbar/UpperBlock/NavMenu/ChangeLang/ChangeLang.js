import React, { Component } from 'react';
import './ChangeLang.module.css';

class ChangeLang extends Component{
	constructor(props){
		super(props);
		this.state = {
			id: this.props.data.idLang,
			langName: this.props.data.language,
			langCode: this.props.data.langCode,
			name: this.props.data.name,
		};
	}

	render(){
		const idInp = `${ this.state.id }_${ this.state.langCode }`;
		return(
			<li>
				<input id={ idInp } type='radio' name={ this.state.name }/>
				<label htmlFor={ idInp }>{ this.state.langCode }</label>
			</li>
		);
	}

} 

export { ChangeLang };