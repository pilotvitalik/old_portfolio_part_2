import React, { Component } from 'react';
import style from './about.module.css';
import { HeaderPage } from '../../Common/HeaderPage/HeaderPage.js';
import { Description } from './Description/Description.js';
import { Services } from './Services/Services.js';
import { Clients } from './Clients/Clients.js';
import { Testimonials } from './Testimonials/Testimonials.js';


class About extends Component{
	constructor(props){
		super(props);
		this.state = {
			userTitle: this.props.about[0].aboutIcon,
			descript: this.props.about[1],
			services: this.props.about[2],
			clients: this.props.about[3],
			testimonials: this.props.about[4],
		};
	}

	render(){
		return(
			<div className={ style.aboutPage }>
				<HeaderPage icon={ this.state.userTitle }/>
				<Description descript={ this.state.descript }/>
				<Services service={ this.state.services }/>
				<Clients client={ this.state.clients }/>
				<Testimonials testimonial={ this.state.testimonials }/>
			</div>
		);
	}
}

export { About };