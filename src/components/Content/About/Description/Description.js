import React from 'react';
import { AboutMe } from './AboutMe/AboutMe.js';
import { PersonalInfo } from './PersonalInfo/PersonalInfo.js';

class Description extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			about: this.props.descript.about,
			personal: this.props.descript.personalInfo,
		};
	}

	render(){
		return(
			<div>
				<AboutMe about={ this.state.about }/>
				<PersonalInfo personal={ this.state.personal }/>
			</div>
		);
	}
}

export { Description };