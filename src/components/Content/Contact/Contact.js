import React from 'react';
import style from './contact.module.css';
import { Title } from './Title/title.js';
import { SendForm } from './SendForm/SendForm.js';
import { OtherContacts } from './OtherContacts/OtherContacts.js';

class Contact extends React.Component{
	render(){
		return(
			<div className={ style.contact }>
				<Title/>
				<SendForm/>
				<OtherContacts/>
			</div>
		);
	}
}

export { Contact };