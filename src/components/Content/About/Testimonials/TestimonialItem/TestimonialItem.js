import React from 'react';
import { Description } from './Description/Description.js';

class TestimonialItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: this.props.data.text,
			name: this.props.data.user_name,
			job: this.props.data.user_job,
		};
	}

	render(){
		return(
			<div>
				<Description text={ this.state.text }/>
			</div>
		);
	}
}

export { TestimonialItem };