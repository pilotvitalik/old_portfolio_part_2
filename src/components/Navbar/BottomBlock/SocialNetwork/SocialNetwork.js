import React, { Component } from 'react';
import style from './socialNetwork.module.css';

class SocialNetwork extends Component{
	constructor(props){
		super(props);
		this.state = {
			img: this.props.social,
		}
	}

	render(){
		const item = this.state.img;
		const listItem = item.map(img => 
			<li key={ img.id }>
				<img src={ img.url } alt={ img.name }/>
			</li>
		);
		return(
			<ul className={ style.socialNetwork }>
				{ listItem }
			</ul>
		);
	}
}

export { SocialNetwork };