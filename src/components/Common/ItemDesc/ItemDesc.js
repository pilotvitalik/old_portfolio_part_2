import React from 'react';
import style from './item.module.css';

class ItemDesc extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			start: this.props.data.startYear,
			stop: this.props.data.stopYear,
			pos: this.props.data.position,
			company: this.props.data.companyName,
			city: this.props.data.companyCity,
			desc: this.props.data.description,
		};
	}

	render(){
		return(
			<div className={ style.item }>
				<div className={ style.period }>
					<p>{ this.state.stop }</p>
					<span></span>
					<p>{ this.state.start }</p>
				</div>
				<div className={ style.desc }>
					<h4>{ this.state.pos }</h4>
					<div className={ style.company }>
						<p>{ this.state.company }</p>
						<p>{ this.state.city }</p>
					</div>
					<p>
						{ this.state.desc }
					</p>
				</div>
			</div>
		);
	}
}

export { ItemDesc };