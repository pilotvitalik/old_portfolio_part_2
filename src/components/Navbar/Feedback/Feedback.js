import React from 'react';
import { SocialNetwork } from './SocialNetwork/SocialNetwork.js';

class Feedback extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			social: this.props.social,
		}
	}

	render(){
		return(
			<div className='feedback'>
				<SocialNetwork social={ this.state.social }/>
				{/*Rights*/}
			</div>
		);
	}
}

export { Feedback };
