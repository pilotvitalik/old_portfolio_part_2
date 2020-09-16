import React, { Component } from 'react';
import style from './home.module.css';

class Home extends Component{
	render(){
		return(
			<div className={ style.homeTitle }>
				<div>
					<h3>Виталий </h3><h3>Кожушко</h3>
				</div>
				<p>Frontend developer</p>
			</div>
		);
	}
}

export { Home };