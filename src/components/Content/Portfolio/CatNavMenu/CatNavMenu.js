import React from 'react';
import { ItemCat } from './ItemCat/ItemCat.js';

class CatNavMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			listCat: this.props.cat.categories,
		};
	}

	render(){
		const categories = this.state.listCat;
		const items = categories.map((category) => 
			<ItemCat key={category.id} data={category}/>
		);
		return(
			<ul>
				{ items }
			</ul>
		);
	}
}

export { CatNavMenu };