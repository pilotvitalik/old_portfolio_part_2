import React, { Component } from 'react';
import style from './contact.module.css';
import { HeaderPage } from '../../Common/HeaderPage/HeaderPage.js';
import { SendForm } from './SendForm/SendForm.js';
import { OtherContacts } from './OtherContacts/OtherContacts.js';

class Contact extends Component{
	constructor(props){
		super(props);
		this.state = {
			mailIcon: this.props.contactPage[0].contactIcon,
			otherContacts: this.props.contactPage[2],
			button: this.props.contactPage[1].button,
			titleSection: this.props.contactPage[3].title,
		}
	}

	render(){
		return(
			<div className={ style.contact }>
				<HeaderPage icon={ this.state.mailIcon }/>
				<SendForm btn={ this.state.button } title={ this.state.titleSection }/>
				<OtherContacts contact={ this.state.otherContacts }/>
			</div>
		);
	}
}

export { Contact };