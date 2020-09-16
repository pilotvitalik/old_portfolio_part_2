import React, { Component } from 'react';
import style from './description.module.css';
import { AboutMe } from './AboutMe/AboutMe.js';
import { PersonalInfo } from './PersonalInfo/PersonalInfo.js';

class Description extends Component{
	constructor(props){
		super(props);
		this.state = {
			about: this.props.descript.about,
			personal: this.props.descript.personalInfo,
		};
	}

	render(){
		return(
			<div className={ style.descript }>
				<AboutMe about={ this.state.about }/>
				<PersonalInfo personal={ this.state.personal }/>
			</div>
		);
	}
}

export { Description };