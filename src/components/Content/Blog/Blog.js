import React from 'react';
import { HeaderPage } from '../../Common/HeaderPage/HeaderPage.js';
import { Articles } from './Articles/Articles.js';
import style from './Blog.module.css';

class Blog extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			icon: this.props.blog[0].blogIcon,
			articles: this.props.blog[1],
		};
	}

	render(){
		return(
			<div className={ style.blogPage }>
				<HeaderPage icon={ this.state.icon }/>
				<Articles articles={ this.state.articles }/>
			</div>
		);
	}
}

export { Blog };