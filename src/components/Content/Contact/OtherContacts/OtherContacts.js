import React from 'react';
import style from './OtherContacts.module.css';
import { Item } from './Item/Item.js';

class OtherContacts extends React.Component{
	render(){
		return(
			<div className={ style.otherContacts }>
				<h3>This is OtherContacts Component</h3>
				<Item/>
			</div>
		);
	}
};

export { OtherContacts };