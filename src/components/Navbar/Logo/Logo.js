import React from 'react';
import style from './logo.module.css';

class Logo extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			logo: this.props.image
		}
	}

	render(){
		return(
			<div className={ style.logo }>
				<img src={ this.state.logo.url } alt={ this.state.logo.name }/>
				<h2>
					{ this.state.logo.title }
				</h2>
			</div>
		);
	}
}

export { Logo };