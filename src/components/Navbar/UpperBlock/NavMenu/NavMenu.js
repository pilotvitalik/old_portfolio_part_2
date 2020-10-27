import React, { Component } from 'react';
import { Item } from './Item/Item.js';
import { ChangeLang } from './ChangeLang/ChangeLang.js';
import style from './NavMenu.module.css';

class NavMenu extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: this.props.navMenu,	
			lang: this.props.lang,
		};
	}

	render(){
		const list = this.state.items;
		const listLang = this.state.lang;
		const listItems = list.map((item) =>{
			return <Item activeOnlyWhenExact={ true } key={ item[2].id } data={ item[2] } activeImg={ item[1] } url={ item[0] } onChamgeItem={ this.handleChangeMenuItem }/>
		});
		const langItems = listLang.map((itemLang) => {
			return <ChangeLang key={ itemLang.idLang } data={ itemLang }/>
		});
		return (
			<div className={ style.navMenu }>
				<ul>
					{ listItems }
				</ul>
				<ul>
					{ langItems }
				</ul>
			</div>
		);
	}
}

export { NavMenu };