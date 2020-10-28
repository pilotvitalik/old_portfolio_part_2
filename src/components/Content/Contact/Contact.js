import React, { Component } from 'react';
import style from './contact.module.css';
import { HeaderPage } from '../../Common/HeaderPage/HeaderPage.js';
import { SendForm } from './SendForm/SendForm.js';
import { OtherContacts } from './OtherContacts/OtherContacts.js';
import { Maps } from './Maps/Maps.js';

class Contact extends Component{
	constructor(props){
		super(props);
		this.state = {
			mailIcon: this.props.contactPage[0].contactIcon,
			otherContacts: this.props.contactPage[2],
			button: this.props.contactPage[1].button,
			titleSection: this.props.contactPage[3].title,
			activeLang: this.props.activeLang,
			compareLang: this.props.compareLang,
		}
	}

	render(){
		return(
			<div className={ style.contact }>
				<HeaderPage icon={ this.state.mailIcon }/>
				<SendForm btn={ this.state.button } title={ this.state.titleSection } activeLang={ this.state.activeLang } compareLang={ this.state.compareLang }/>
				<OtherContacts contact={ this.state.otherContacts }/>
				<Maps/>
			</div>
		);
	}
}

export { Contact };