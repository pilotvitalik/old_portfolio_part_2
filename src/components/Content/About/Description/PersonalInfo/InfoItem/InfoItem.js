import React from 'react';

class InfoItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.info.name,
			value: this.props.info.val,
		};
	}

	render(){
		return(
			<div>
				<p>{ this.state.title }</p>
				<p>{ this.state.value }</p>
			</div>
		);
	}
}

export { InfoItem };