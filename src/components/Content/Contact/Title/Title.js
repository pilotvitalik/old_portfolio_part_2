import React from 'react';
import style from './title.module.css';

class Title extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			image: this.props.icon,
		}
	}

	render(){
		return(
			<div className={ style.title }>
				<h3>Контакты</h3>
				<img src={ this.state.image.url } alt={ this.state.image.name }/>
			</div>
		);
	}
};

export { Title };