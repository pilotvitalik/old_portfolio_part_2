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
			isActive: false,
		};
	}

	render(){
		let activeCheckbox = false;
		const idInp = `${ this.state.id }_${ this.state.langCode }`;
		if (this.state.langCode === 'RU'){
			activeCheckbox = true;
		}
		return(
			<li>
				<input id={ idInp } type='radio' name={ this.state.name } defaultChecked={ activeCheckbox }/>
				<label htmlFor={ idInp }>{ this.state.langCode }</label>
			</li>
		);
	}

} 

export { ChangeLang };