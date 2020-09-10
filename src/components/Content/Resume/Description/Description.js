import React from 'react';
import { LeftDescript } from './LeftDescript/LeftDescript.js';

class Description extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			leftDesc: this.props.descript[0],
		}
	}

	render(){
		return(
			<div>
				<LeftDescript desc={ this.state.leftDesc }/>
			</div>
		);
	}
}

export { Description };