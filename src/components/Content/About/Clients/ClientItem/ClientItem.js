import React from 'react';
import style from './clientItem.module.css';

class ClientItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			image: this.props.data.img,
			alt: this.props.data.alt,
		};
	}

	render(){
		return(
			<div className={ style.clientItem }>
				<img src={ this.state.image } alt={ this.state.alt }/>
			</div>
		);
	}
}

export { ClientItem };