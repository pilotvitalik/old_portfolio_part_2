import React from 'react';
import { LeftDescript } from './LeftDescript/LeftDescript.js';
import { RightDescript } from './RightDescript/RightDescript.js';

class Description extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			leftDesc: this.props.descript[0],
			rightDesc: this.props.descript[1],
		}
	}

	render(){
		return(
			<div>
				<LeftDescript desc={ this.state.leftDesc }/>
				<RightDescript desc={ this.state.rightDesc }/>
			</div>
		);
	}
}

export { Description };