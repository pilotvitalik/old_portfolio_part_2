import React from 'react';
import style from './sendForm.module.css';

class SendForm extends React.Component{
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
							<label for='feedbackName'>Введите имя</label>
						</div>
						<div className={ style.upperInput }>
							<input id='feedbackMail' type='text'/>
							<label for='feedbackMail'>Email</label>
						</div>
					</div>
					<div className={ style.message }>
						<textarea id='feedbackMes' rows='9'></textarea>
						<label for='feedbackMes'>Как я могу помочь Вам?</label>
					</div>
					<button type='button'>Отправить</button>
				</form>
			</div>
		);
	}
};

export { SendForm };