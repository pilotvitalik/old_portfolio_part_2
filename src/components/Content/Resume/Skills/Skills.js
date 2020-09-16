import React, { Component } from 'react';
import { TitleSection } from '../../../Common/TitleSection/TitleSection.js';
import { ListSkills } from './ListSkills/ListSkills.js';
import style from './Skills.module.css';

class Skills extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.skill[0].title,
			list: this.props.skill[1],
		};
	}

	render(){
		return(
			<div className={ style.skills }>
				<TitleSection title={ this.state.title } />
				<ListSkills list={ this.state.list }/>
			</div>
		);
	}
}

export { Skills };