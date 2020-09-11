import React from 'react';
import { TitleSection } from '../../../Common/TitleSection/TitleSection.js';
import { ListSkills } from './ListSkills/ListSkills.js';

class Skills extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.skill[0].title,
			list: this.props.skill[1],
		};
	}

	render(){
		return(
			<div>
				<TitleSection title={ this.state.title } />
				<ListSkills list={ this.state.list }/>
			</div>
		);
	}
}

export { Skills };