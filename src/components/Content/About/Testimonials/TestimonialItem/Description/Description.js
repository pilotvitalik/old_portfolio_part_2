import React from 'react';
import style from './description.module.css';

class Description extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: this.props.text,
		};
	}

	render(){
		return(
			<div className={ style.desc }>
			<i className="fas fa-quote-left"></i>
				<p>{ this.state.text }</p>
			</div>
		);
	}
}

export { Description };