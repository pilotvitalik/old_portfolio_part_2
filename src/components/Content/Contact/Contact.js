import React from 'react';
import style from './contact.module.css';
import { Title } from './Title/Title.js';
import { SendForm } from './SendForm/SendForm.js';
import { OtherContacts } from './OtherContacts/OtherContacts.js';

class Contact extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			mailIcon: this.props.contactPage[0].contactIcon,
			otherContacts: this.props.contactPage[1],
		}
	}

	render(){
		return(
			<div className={ style.contact }>
				<Title icon={ this.state.mailIcon }/>
				<SendForm/>
				<OtherContacts contact={ this.state.otherContacts }/>
			</div>
		);
	}
}

export { Contact };