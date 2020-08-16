import React from 'react';
import { InfoItem } from './InfoItem/InfoItem.js';

class PersonalInfo extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<InfoItem/>
		);
	}
}

export { PersonalInfo };