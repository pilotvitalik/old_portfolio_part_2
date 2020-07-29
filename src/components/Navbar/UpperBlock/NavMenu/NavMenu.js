import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.module.css';

class NavMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: this.props.navMenu
		}
	}

	render(){
		const list = this.state.items;
		const listItems = list.map((item) =>
			<li key={ item.id }>
				<img src={ item.url } alt={ item.name }/>
				<NavLink to={ item.path }>{ item.title }</NavLink>
			</li>
		  );
		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}

export { NavMenu };