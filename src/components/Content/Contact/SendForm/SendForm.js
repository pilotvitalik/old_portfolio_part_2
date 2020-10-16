import React, { Component } from 'react';
import style from './sendForm.module.css';
import { Button } from '../../../Common/Button/Button.js';
import { TitleSection } from '../../../Common/TitleSection/TitleSection.js';

class SendForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			button: this.props.btn,
			titleSection: this.props.title,
			activeEl: '',
		};
		this.moveDownTitle = this.moveDownTitle.bind(this);
		this.moveTitle = this.moveTitle.bind(this);
	}

	moveTitle(e){
		console.log('=== moveTitle ===');
		console.log(e.currentTarget)
		const id = e.currentTarget.id + '_label';
		let oldActiveEl;
		if (this.state.activeEl === ''){
			this.setState({
				[id]: true,
				activeEl: id,
			}, () => {
				document.addEventListener('click', this.moveDownTitle);
			})
			return false;
		}
		document.removeEventListener('click', this.moveDownTitle);
		oldActiveEl = this.state.activeEl;
		this.setState({
			[oldActiveEl]: false,
			[id]: true,
			activeEl: id,
		}, () => {
			document.addEventListener('click', this.moveDownTitle);
		})		
	}

	moveDownTitle(e){
		console.log('=== moveDownTitle ===');
		let oldActiveEl = this.state.activeEl;
		this.setState({
			[oldActiveEl]: false,
			activeEl: '',
		});
		console.log(this.state);
		document.removeEventListener('click', this.moveDownTitle);
	}


	render(){
		return(
			<div className={ style.sendForm }>
				<TitleSection title={ this.state.titleSection }/>
				<form>
					<div>
						<div className={ style.upperInput }>
							<input id='feedbackName' type='text' onClick={ this.moveTitle }/>
							<label className={ this.state.feedbackName_label ? style.upLabel : '' } htmlFor='feedbackName'>Введите имя</label>
						</div>
						<div className={ style.upperInput }>
							<input id='feedbackMail' type='text' onClick={ this.moveTitle }/>
							<label className={ this.state.feedbackMail_label ? style.upLabel : '' } htmlFor='feedbackMail'>Email</label>
						</div>
					</div>
					<div className={ style.message }>
						<textarea id='feedbackMes' rows='9' onClick={ this.moveTitle }></textarea>
						<label className={ this.state.feedbackMes_label ? style.upTextarea : '' } htmlFor='feedbackMes'>Как я могу помочь Вам?</label>
					</div>
					<Button btn={ this.state.button }/>
				</form>
			</div>
		);
	}
};

export { SendForm };