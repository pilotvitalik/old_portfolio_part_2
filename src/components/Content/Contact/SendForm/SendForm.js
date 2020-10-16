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
		console.log('showVal');
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
		console.log('moveTitle');
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
		console.log('moveDownTitle');
		let oldActiveEl = this.state.activeEl;
		if (!this.state.prohibLabel.includes(oldActiveEl)){
			this.setState({
				[oldActiveEl]: false,
				activeEl: '',
			});
		}
		document.removeEventListener('click', this.moveDownTitle);
	}


	render(){
		return(
			<div className={ style.sendForm }>
				<TitleSection title={ this.state.titleSection }/>
				<form>
					<div>
						<div className={ style.upperInput }>
							<input id='feedbackName' type='text' onClick={ this.moveTitle } onKeyDown={ this.showVal }/>
							<label className={ this.state.feedbackName_label ? style.upLabel : '' } htmlFor='feedbackName'>Введите имя</label>
						</div>
						<div className={ style.upperInput }>
							<input id='feedbackMail' type='text' onClick={ this.moveTitle } onKeyDown={ this.showVal }/>
							<label className={ this.state.feedbackMail_label ? style.upLabel : '' } htmlFor='feedbackMail'>Email</label>
						</div>
					</div>
					<div className={ style.message }>
						<textarea id='feedbackMes' rows='9' onClick={ this.moveTitle } onKeyDown={ this.showVal }></textarea>
						<label className={ this.state.feedbackMes_label ? style.upTextarea : '' } htmlFor='feedbackMes'>Как я могу помочь Вам?</label>
					</div>
					<Button btn={ this.state.button }/>
				</form>
			</div>
		);
	}
};

export { SendForm };