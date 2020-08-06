import React from 'react';
import { NavLink } from 'react-router-dom';

class Item extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			img: this.props.activeImg,
			titleImg: this.props.data.name,
			path: this.props.url,
			title: this.props.data.title,
		};
	}


	render(){
		let img;
		return(
			<li>
				<img src={ this.state.img } alt={ this.state.titleImg }/>				
				<NavLink exact to={ this.state.path } activeClassName='activeNavBar'>{ this.state.title }</NavLink>
			</li>
		);
	}
};

export { Item };