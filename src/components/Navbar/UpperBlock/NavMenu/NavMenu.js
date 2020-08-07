import React from 'react';
import { Item } from './Item/Item.js';
import './NavMenu.module.css';

class NavMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: this.props.navMenu,	
		};
	}

	render(){
		const list = this.state.items;
		const listItems = list.map((item) =>{
			return <Item activeOnlyWhenExact={ true } key={ item[2].id } data={ item[2] } activeImg={ item[1] } url={ item[0] } onChamgeItem={ this.handleChangeMenuItem }/>
		});
		return (
			<ul>
				{ listItems }
			</ul>
		);
	}
}

export { NavMenu };