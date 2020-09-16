import React, { Component } from 'react';
import style from './infoItem.module.css';

class InfoItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.info.name,
			value: this.props.info.val,
		};
	}

	render(){
		return(
			<div className={ style.infoBlock }>
				<div>
					<p>{ this.state.title }</p>
					<p>:</p>
				</div>
				<p>{ this.state.value }</p>
			</div>
		);
	}
}

export { InfoItem };