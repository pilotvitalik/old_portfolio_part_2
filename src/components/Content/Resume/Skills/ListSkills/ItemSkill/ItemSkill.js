import React from 'react';

class ItemSkill extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			skill: this.props.data,
		}
	}

	render(){
		return(
			<li>
				<span></span>
				{ this.state.skill.name }
			</li>
		);
	}
}

export { ItemSkill };