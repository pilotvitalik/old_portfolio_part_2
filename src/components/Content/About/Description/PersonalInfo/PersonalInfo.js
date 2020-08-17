import React from 'react';
import { InfoItem } from './InfoItem/InfoItem.js';
import { Button } from '../../../../Common/Button/Button.js';

class PersonalInfo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.personal.titleArticle,
			btn: this.props.personal.button
		};
	}

	render(){
		console.log(this.props.personal);
		return(
			<div>
				<InfoItem/>
				<Button btn={ this.state.btn }/>
			</div>
		);
	}
}

export { PersonalInfo };