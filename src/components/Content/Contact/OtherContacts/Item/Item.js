import React, { Component } from 'react';
import style from './item.module.css';

class Item extends Component{
	constructor(props){
		super(props);
		this.state = {
			image: this.props.value.img,
			alt: this.props.value.titleImg,
			showTxt: this.props.value.contact,
		};
	}

	render(){
		return(
			<div className={ style.itemContact }>
				<img src={ this.state.image } alt={ this.state.alt }/>
				<p>{ this.state.showTxt }</p>
			</div>
		);
	}
};

export { Item };