import React, { Component } from 'react';
import style from './ItemSkill.module.css';

class ItemSkill extends Component{
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
				<p>{ this.state.skill.name }</p>
			</li>
		);
	}
}

export { ItemSkill };