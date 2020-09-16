import React, { Component } from 'react';
import { ItemArticle } from './ItemArticle/ItemArticle.js';
import style from './Articles.module.css';

class Articles extends Component{
	constructor(props){
		super(props);
		this.state = {
			list: this.props.articles,
		};
	}

	render(){
		const list = this.state.list;
		const items = list.map((item) => 
			<ItemArticle key={ item.id } data={ item }/>
		);
		return(
			<ul className={ style.blogList }>
				{ items }
			</ul>
		);
	}

}

export { Articles };