import React from 'react';
import style from './serviceItem.module.css';

class ServiceItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			img: this.props.data.img,
			alt: this.props.data.alt,
			title: this.props.data.title,
			text: this.props.data.text,
		}
	}

	render(){
		return(
			<div className={ style.servItem }>
				<img src={ this.state.img } alt={ this.state.alt }/>
				<h5>
					{ this.state.title }
				</h5>
				<p>
					{this.state.text}
				</p>
			</div>
		);
	}
}

export { ServiceItem };