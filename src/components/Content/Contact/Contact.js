import React from 'react';
import style from './contact.module.css';
import { Title } from './Title/Title.js';
import { SendForm } from './SendForm/SendForm.js';
import { OtherContacts } from './OtherContacts/OtherContacts.js';

class Contact extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			contact: this.props.contact,
		}
	}

	render(){
		return(
			<div className={ style.contact }>
				<Title icon={ this.state.contact }/>
				<SendForm/>
				<OtherContacts/>
			</div>
		);
	}
}

export { Contact };