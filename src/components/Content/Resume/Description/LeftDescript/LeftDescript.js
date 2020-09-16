import React, { Component } from 'react';
import { TitleSection } from '../../../../Common/TitleSection/TitleSection.js';
import { ItemDesc } from '../../../../Common/ItemDesc/ItemDesc.js';
import style from './LeftDescript.module.css';

class LeftDescript extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.desc.title,
			description: this.props.desc.data,
		}
	}

	render(){
		const listDesc = this.state.description;
		const items = listDesc.map((item) =>
			<ItemDesc key={ item.id } data={ item }/>
		);
		return(
			<div className={ style.leftDescript }>
				<TitleSection title={ this.state.title }/>
				{ items }
			</div>
		);
	}
}

export { LeftDescript };