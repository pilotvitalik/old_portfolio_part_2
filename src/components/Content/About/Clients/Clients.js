import React from 'react';
import style from './clients.module.css';
import { TitleSection } from '../../../Common/TitleSection/TitleSection.js';
import { ClientItem } from './ClientItem/ClientItem.js';

class Clients extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.client.title,
			clients: this.props.client.data,
		};
	}

	render(){
		const clients = this.state.clients;
		const client = clients.map((item) => 
			<ClientItem key={ item.id } data={ item }/>
		);
		return(
			<div className={ style.clients }>
				<TitleSection title={ this.state.title }/>
				<div className={ style.slider }>
					<div>
						{ client }
					</div>
				</div>
			</div>
		);
	}
}

export { Clients };