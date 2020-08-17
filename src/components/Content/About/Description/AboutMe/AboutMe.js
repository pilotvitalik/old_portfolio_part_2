import React from 'react';
import style from './aboutMe.module.css';

class AboutMe extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.about.titleArticle,
			text: this.props.about.text,
			wish: this.props.about.wishes,
		};
	}

	render(){
		return(
			<div className={ style.about }>
				<h3>{ this.state.title }</h3>
				<p>{ this.state.text }</p>
				<p>{ this.state.wish }</p>
			</div>
		);
	}
}

export { AboutMe };