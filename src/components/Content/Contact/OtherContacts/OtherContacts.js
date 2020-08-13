import React from 'react';
import style from './OtherContacts.module.css';
import { Item } from './Item/Item.js';

class OtherContacts extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			contacts: this.props.contact,
		}
	}

	render(){
		let contactsArr = this.state.contacts;
		let contact = contactsArr.map(item => 
			<Item key={item.id} value={item}/>
		);
		return(
			<div className={ style.otherContacts }>
				{ contact }
			</div>
		);
	}
};

export { OtherContacts };