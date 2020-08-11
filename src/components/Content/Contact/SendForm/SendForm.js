import React from 'react';
import style from './sendForm.module.css';

class SendForm extends React.Component{
	render(){
		return(
			<div className={ style.sendForm }>
				<h3>Обратная связь</h3>
				<form>
					<div>
						<input type='text' placeholder='Введите имя'/>
						<input type='text' placeholder='Email'/>
					</div>
					<textarea placeholder='Как я могу помочь Вам?'></textarea>
					<button type='button'>Отправить</button>
				</form>
			</div>
		);
	}
};

export { SendForm };