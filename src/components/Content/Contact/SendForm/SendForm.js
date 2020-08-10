import React from 'react';
import style from './sendForm.module.css';
import { Form } from './Form/Form.js';
import { SendBtn } from './SendBtn/SendBtn.js';

class SendForm extends React.Component{
	render(){
		return(
			<div className={ style.sendForm }>
				<Form/>
				<SendBtn/>
			</div>
		);
	}
};

export { SendForm };