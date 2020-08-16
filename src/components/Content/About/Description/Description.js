import React from 'react';
import { AboutMe } from './AboutMe/AboutMe.js';
import { PersonalInfo } from './PersonalInfo/PersonalInfo.js';

class Description extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props.descript);
		return(
			<div>
				<AboutMe/>
				<PersonalInfo/>
			</div>
		);
	}
}

export { Description };