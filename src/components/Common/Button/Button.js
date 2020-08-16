import React from 'react';

class Button extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			type: this.props.btn.type,
			title: this.props.btn.title,
		};
	}

	render(){
		return(
			<button type={ this.state.type }>{ this.state.title }</button>
		);
	}
}

export { Button };