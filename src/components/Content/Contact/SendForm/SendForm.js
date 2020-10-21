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
		};
		this.moveDownTitle = this.moveDownTitle.bind(this);
		this.moveTitle = this.moveTitle.bind(this);
		this.showVal = this.showVal.bind(this);
	}

	showVal(e){
		e.preventDefault();
		const curVal = e.currentTarget.value;
		const id = e.currentTarget.id + '_label';
		const val = e.key;
		let newVal;
		let arr = this.state.prohibLabel;
		let oldActiveEl = this.state.activeEl;
		if (val.length === 1){
			newVal = curVal + val;
		} else {
			newVal = curVal;
		}
		if (newVal.length !== 0){
			arr.push(id);
			this.setState({
				activeEl: '',
			});
			document.removeEventListener('click', this.moveDownTitle);
		} else {
			arr.splice(arr.indexOf(id), 1);
			this.setState({
				activeEl: id,
			});
		}
		e.currentTarget.value = newVal;
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
			[oldActiveEl]: false,
			[oldInp]: false,
			[id]: true,
			[inp]: true,
			activeEl: id,
		}, () => {
			document.addEventListener('click', this.moveDownTitle);
		})	
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
				<form>
					<div>
						<div className={ style.upperInput }>
							<input id='feedbackName' type='text' onClick={ this.moveTitle } onKeyDown={ this.showVal } className={ inpName }/>
							<label className={ this.state.feedbackName_label ? style.upLabel : '' } htmlFor='feedbackName'>Введите имя</label>
						</div>
						<div className={ style.upperInput }>
							<input id='feedbackMail' type='text' onClick={ this.moveTitle } onKeyDown={ this.showVal } className={ inpMail }/>
							<label className={ this.state.feedbackMail_label ? style.upLabel : '' } htmlFor='feedbackMail'>Email</label>
						</div>
					</div>
					<div className={ style.message }>
						<textarea id='feedbackMes' rows='9' onClick={ this.moveTitle } onKeyDown={ this.showVal } className={ this.state.feedbackMes_inp ? style.whiteBorder : '' }></textarea>
						<label className={ this.state.feedbackMes_label ? style.upTextarea : '' } htmlFor='feedbackMes'>Как я могу помочь Вам?</label>
					</div>
					<Button btn={ this.state.button }/>
				</form>
			</div>
		);
	}
};

export { SendForm };