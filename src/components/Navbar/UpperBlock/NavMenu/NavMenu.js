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
			if (window.location.pathname === item[0]){
				return <Item key={ item[2].id } data={ item[2] } activeImg={ item[1].whiteImg } url={ item[0] } onChamgeItem={ this.handleChangeMenuItem }/>
			} else {
				return <Item key={ item[2].id } data={ item[2] } activeImg={ item[1].darkImg } url={ item[0] } onChamgeItem={ this.handleChangeMenuItem }/>
			}
			
		});
		return (
			<ul>
				{ listItems }
			</ul>
		);
	}
}

export { NavMenu };