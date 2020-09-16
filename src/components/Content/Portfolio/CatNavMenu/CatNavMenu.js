import React, { Component } from 'react';
import { ItemCat } from './ItemCat/ItemCat.js';
import style from './CatNavMenu.module.css';

class CatNavMenu extends Component{
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
			<ul className={ style.catNavbar }>
				{ items }
			</ul>
		);
	}
}

export { CatNavMenu };