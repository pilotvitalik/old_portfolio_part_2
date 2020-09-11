import React from 'react';
import { TitleSection } from '../../../../Common/TitleSection/TitleSection.js';
import { ItemDesc } from '../../../../Common/ItemDesc/ItemDesc.js';

class RightDescript extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.desc.title,
			description: this.props.desc.data,
		};
	}

	render(){
		const listDesc = this.state.description;
		const items = listDesc.map((item) =>
			<ItemDesc key={ item.id } data={ item }/>
		);
		return(
			<div>
				<TitleSection title={ this.state.title }/>
				{ items }
			</div>
		);
	}
}

export { RightDescript };