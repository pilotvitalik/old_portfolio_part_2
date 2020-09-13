import React from 'react';

class ItemCat extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cat: this.props.data.name,
		};
	}

	render(){
		return(
			<li>
				{ this.state.cat }
			</li>
		);
	}
}

export { ItemCat };