import React from 'react';
import style from './sendForm.module.css';
import { Button } from '../../../Common/Button/Button.js';

class SendForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			button: this.props.btn,
		};
	}

	render(){
		return(
			<div className={ style.sendForm }>
				<div>
					<h3>Обратная связь</h3>
					<span></span>
				</div>
				<form>
					<div>
						<div className={ style.upperInput }>
							<input id='feedbackName' type='text'/>
							<label htmlFor='feedbackName'>Введите имя</label>
						</div>
						<div className={ style.upperInput }>
							<input id='feedbackMail' type='text'/>
							<label htmlFor='feedbackMail'>Email</label>
						</div>
					</div>
					<div className={ style.message }>
						<textarea id='feedbackMes' rows='9'></textarea>
						<label htmlFor='feedbackMes'>Как я могу помочь Вам?</label>
					</div>
					<Button btn={ this.state.button }/>
				</form>
			</div>
		);
	}
};

export { SendForm };