import React from 'react';
import style from './titleSection.module.css';

class TitleSection extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.title,
		};
	}

	render(){
		console.log(this.props);
		return(
			<div className={ style.title }>
				<h3>{ this.state.title }</h3>
				<span></span>
			</div>
		);
	}
}

export { TitleSection };