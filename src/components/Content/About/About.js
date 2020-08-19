import React from 'react';
import style from './about.module.css';
import { HeaderPage } from '../../Common/HeaderPage/HeaderPage.js';
import { Description } from './Description/Description.js';
import { Services } from './Services/Services.js';


class About extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userTitle: this.props.about[0].aboutIcon,
			descript: this.props.about[1],
			services: this.props.about[2],
		};
	}

	render(){
		return(
			<div className={ style.aboutPage }>
				<HeaderPage icon={ this.state.userTitle }/>
				<Description descript={ this.state.descript }/>
				<Services service={ this.state.services }/>
			</div>
		);
	}
}

export { About };