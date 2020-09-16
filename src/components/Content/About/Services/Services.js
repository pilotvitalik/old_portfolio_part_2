import React, { Component } from 'react';
import style from './services.module.css';
import { TitleSection } from '../../../Common/TitleSection/TitleSection.js';
import { ServiceItem } from './ServiceItem/ServiceItem.js';

class Services extends Component{
	constructor(props){
		super(props);
		this.state ={
			title: this.props.service.title,
			service: this.props.service.data,
		};
	}
	render(){
		const services = this.state.service;
		const serv = services.map((item) => 
			<ServiceItem key={ item.id } data={ item }/>
		);
		return(
			<div className={ style.services }>
				<TitleSection title={ this.state.title }/>
				<div>
					{ serv }
				</div>
			</div>
		);
	}
};

export { Services };