import React, { Component } from 'react';
import { HeaderPage } from '../../Common/HeaderPage/HeaderPage.js';
import { Description } from './Description/Description.js';
import { Skills } from './Skills/Skills.js';
import style from './Resume.module.css';

class Resume extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.resume[0].resumeIcon,
			descript: this.props.resume[1].description,
			skills: this.props.resume[1].skills
		}
	}

	render(){
		return(
			<div className={ style.resume }>
				<HeaderPage icon={ this.state.title }/>
				<Description descript={ this.state.descript }/>
				<Skills skill={ this.state.skills }/>
			</div>
		);
	}
}

export { Resume };