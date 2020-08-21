import React from 'react';
import style from './user.module.css';

class User extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			photo: this.props.photo,
			name: this.props.name,
			job: this.props.job,
		};
	}

	render(){
		return(
			<div className={ style.userData }>
				<img src={ this.state.photo } alt={ this.state.name }/>
				<div>
					<p>{ this.state.name }</p>
					<p>{ this.state.job }</p>
				</div>
			</div>
		);
	}
}

export { User };