import React from 'react';
import { HeaderPage } from '../../Common/HeaderPage/HeaderPage.js';
import style from './about.module.css';


class About extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userTitle: this.props.about[0].aboutIcon
		};
	}

	render(){
		return(
			<div className={ style.aboutPage }>
				<HeaderPage icon={ this.state.userTitle }/>
			</div>
		);
	}
}

export { About };