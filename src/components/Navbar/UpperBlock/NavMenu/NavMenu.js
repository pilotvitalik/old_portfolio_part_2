import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.module.css';

class NavMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: this.props.navMenu
		};
		this.changeImg = this.changeImg.bind(this);
	}

	changeImg(e){
		this.props.onChangeImg();
	}

	render(){
		console.log(this.state.items);
		const list = this.state.items;
		const listItems = list.map((item) =>
			<li key={ item.id }>
				<img src={ item.url } alt={ item.name }/>
				<NavLink exact to={ item.path } activeClassName='activeNavBar' onClick={ this.changeImg }>{ item.title }</NavLink>
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