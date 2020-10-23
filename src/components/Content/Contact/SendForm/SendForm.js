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
			prohibLabel: [],
			feedbackName_val: '',
			feedbackMail_val: '',
			feedbackMes_val: '',
		};
		this.moveDownTitle = this.moveDownTitle.bind(this);
		this.moveTitle = this.moveTitle.bind(this);
		this.showVal = this.showVal.bind(this);
		this.formSubmit = this.formSubmit.bind(this);
	}

	formSubmit(event){
		event.preventDefault();
		let re = /\w+@\w+.\w+/gm;
		if (re.test(this.state.feedbackMail_val)){
			console.log('Отправляем форму');
		}
	}

	showVal(e){
		const id = e.currentTarget.id + '_label';
		const nameField = e.currentTarget.id + '_val';
		let arr = this.state.prohibLabel;
		this.setState({
			[nameField]: e.currentTarget.value,
		}, () => {
			if (this.state[nameField].length !== 0){
				if (!arr.includes(id)){
					arr.push(id)
				};
			} else {
				arr.splice(arr.indexOf(id), 1);
				this.setState({
					activeEl: id,
				});
			}
		});		
	}

	moveTitle(e){
		const id = e.currentTarget.id + '_label';
		const inp = e.currentTarget.id + '_inp';
		let oldActiveEl;
		let oldInp;
		if (this.state.activeEl === ''){
			this.setState({
				[id]: true,
				[inp]: true,
				activeEl: id,
			}, () => {
				document.addEventListener('click', this.moveDownTitle);
			})
			return false;
		}
		document.removeEventListener('click', this.moveDownTitle);
		oldActiveEl = this.state.activeEl;
		oldInp = oldActiveEl.replace(/_label/g, '_inp');
		this.setState({
			[id]: true,
			[inp]: true,
			activeEl: id,
		}, () => {
			document.addEventListener('click', this.moveDownTitle);
		})
		if (!this.state.prohibLabel.includes(oldActiveEl)){
			this.setState({
				[oldActiveEl]: false,
				[oldInp]: false,
			});
		}
	}
	

	moveDownTitle(e){
		let oldActiveEl = this.state.activeEl;
		const inp = e.currentTarget.id + '_inp';
		if (!this.state.prohibLabel.includes(oldActiveEl)){
			this.setState({
				[oldActiveEl]: false,
				[inp]: false,
				activeEl: '',
			});
		}
		document.removeEventListener('click', this.moveDownTitle);
	}


	render(){
		let inpName = style.formInp;
		inpName += ' ';
		inpName += this.state.feedbackName_inp ? style.whiteBorder : '';
		let inpMail = style.formInp;
		inpMail += ' ';
		inpMail += this.state.feedbackMail_inp ? style.whiteBorder : '';
		return(
			<div className={ style.sendForm }>
				<TitleSection title={ this.state.titleSection }/>
				<form onSubmit={ this.formSubmit }>
					<div>
						<div className={ style.upperInput }>
							<input 
								id='feedbackName'
								type='text'
								className={ inpName }
								name='fullname'
								value={ this.state.feedbackName_val }
								onClick={ this.moveTitle }
								onChange={ this.showVal }
							/>
							<label className={ this.state.feedbackName_label ? style.upLabel : '' } htmlFor='feedbackName'>Введите имя</label>
						</div>
						<div className={ style.upperInput }>
							<input 
								id='feedbackMail'
								type='text'
								className={ inpMail }
								name='mail'
								value={ this.state.feedbackMail_val }
								onClick={ this.moveTitle }
								onChange={ this.showVal }
							/>
							<label className={ this.state.feedbackMail_label ? style.upLabel : '' } htmlFor='feedbackMail'>Email</label>
						</div>
					</div>
					<div className={ style.message }>
						<textarea 
							id='feedbackMes'
							rows='9'
							name='message'
							value={ this.state.feedbackMes_val }
							className={ this.state.feedbackMes_inp ? style.whiteBorder : '' }
							onClick={ this.moveTitle }
							onChange={ this.showVal }
						></textarea>
						<label className={ this.state.feedbackMes_label ? style.upTextarea : '' } htmlFor='feedbackMes'>Как я могу помочь Вам?</label>
					</div>
					<Button btn={ this.state.button }/>
				</form>
			</div>
		);
	}
};

export { SendForm };