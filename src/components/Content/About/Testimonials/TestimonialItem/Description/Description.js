import React from 'react';

class Description extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: this.props.text,
		};
	}

	render(){
		return(
			<div>
				<p>{ this.state.text }</p>
			</div>
		);
	}
}

export { Description };