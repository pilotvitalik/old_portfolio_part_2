import React from 'react';
import style from './item.module.css';

class ItemSkill extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			skill: this.props.data,
		}
	}

	render(){
		return(
			<li className={ style.item }>
				<span></span>
				{ this.state.skill.name }
			</li>
		);
	}
}

export { ItemSkill };