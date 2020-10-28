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
		this.actLang = this.actLang.bind(this);
	}

	actLang(e){
		this.props.changeLang(e.target.dataset.active);
	}

	render(){
		let activeCheckbox = false;
		const idInp = `${ this.state.id }_${ this.state.langCode }`;
		if (this.state.langCode === 'RU'){
			activeCheckbox = true;
		}
		return(
			<li>
				<input 
					id={ idInp }
					type='radio'
					name={ this.state.name }
					defaultChecked={ activeCheckbox }
					data-active={ this.state.langCode }
					onClick={ this.actLang }
				/>
				<label htmlFor={ idInp }>{ this.state.langCode }</label>
			</li>
		);
	}

} 

export { ChangeLang };