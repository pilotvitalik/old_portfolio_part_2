import React from 'react';
import style from './testimonials.module.css';
import { TitleSection } from '../../../Common/TitleSection/TitleSection.js';
import { TestimonialItem } from './TestimonialItem/TestimonialItem.js';

class Testimonials extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: this.props.testimonial.title,
			listTestim: this.props.testimonial.data,
		};
	}

	render(){
		const list = this.state.listTestim;
		const itemTestim = list.map((item) => 
			<TestimonialItem key={ item.id } data={ item }/>
		);
		return(
			<div className={ style.testim }>
				<TitleSection title={ this.state.title }/>
				<div className={ style.slider }>
					<button type='button'>&lt;</button>
					<div className={ style.wrapSlid }>
						{ itemTestim }
					</div>
					<button type='button'>&gt;</button>
				</div>
			</div>
		);
	}
}

export { Testimonials };