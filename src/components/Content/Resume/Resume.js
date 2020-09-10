import React from 'react';
import { HeaderPage } from '../../Common/HeaderPage/HeaderPage.js';
import { Description } from './Description/Description.js';

class Resume extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.resume[0].resumeIcon,
			descript: this.props.resume[1].description,
		}
	}

	render(){
		return(
			<div>
				<HeaderPage icon={ this.state.title }/>
				<Description descript={ this.state.descript }/>
			</div>
		);
	}
}

export { Resume };